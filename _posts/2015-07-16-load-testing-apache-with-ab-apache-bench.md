---
layout: post
published: true
title:  "Load Testing Apache with AB (Apache Bench)"
tags:
 - devops
ogtype: "article"
bodyclass: "post"
---

The only productive way to load test web site is to test a real-world page that itself performs –

*   Loading and processing of multiple PHP files.
*   Establishment of multiple MySQL connections, and performing multiple table reads.

This is the minimum, because the test of an almost empty and static page (used by most examples) tells us nothing about how
the different parts of a web-server hold up under stress, nor how that web-server setup will handle real-world concurrent
connections to websites running on web-apps such as WordPress.

* Ideally, this test would also:

1. perform GETs of all page assets (css, js, images) and
2. simulate traffic of which 10% is DB writes (we’ll skip this because its more complicated to set up).

## Using AB

Luckily, this type of test is very easy to do in a quick (and somewhat dirty) way by using Apache’s `ab` (Apache Bench)
application (that’s included with each Apache version in its \bin directory).

This `ab` test won’t be the most extensive test, and it comes with its own caveats, but it will quickly show you –

*   If there is an immediate problem with the setup (this problem will manifest itself in Apache crashing).
*   How far you can push the Apache, PHP, and MySQL web-server (with concurrent connections and page request load).
*   And what Apache and PHP settings you should modify to get better performance and eliminate the crashes.

## AB Issues

There are some problems with `ab` to be aware of –

*   `ab` will not parse HTML to get the additional assets of each page (css, images, etc).
*   `ab` can start to error out, breaking the test, as the number of requests to perform is increased, more connections are established but not returned, and as the load increases and more time passes (see `ab -h` for explanation of `-r` switch).
*   `ab` is an HTTP/1.0 client, not a HTTP/1.1 client, and “`Connection: KeepAlive`” (`ab` -k switch) requests of dynamic pages will not work (dynamic pages don’t have a predetermined “`Content-Length: value`“, and using “`Transfer-Encoding: chunked`” is not possible with HTTP/1.0 clients).

More on `AB` and the `KeepAlive` issue –

[KeepAlive – Apache Directive](http://httpd.apache.org/docs/trunk/mod/core.html#keepalive)

> A Keep-Alive connection with an HTTP/1.0 client can only be used when the length of the content is known in advance. This
implies that dynamic content will generally not use Keep-Alive connections to HTTP/1.0 clients.

[Compatibility with HTTP/1.0 Persistent Connections – Hypertext Transfer Protocol HTTP/1.1 Standard](http://tools.ietf.org/html/rfc2068#section-19.7.1)

> A persistent connection with an HTTP/1.0 client cannot make use of the chunked transfer-coding, and therefore MUST use a
Content-Length for marking the ending boundary of each message.

[Chunked transfer encoding – Wikipedia](http://en.wikipedia.org/wiki/Chunked_transfer_encoding)

> Chunked transfer encoding allows a server to maintain an HTTP persistent connection for dynamically generated content. In
this case the HTTP Content-Length header cannot be used to delimit the content and the next HTTP request/response, as the
content size is as yet unknown.

### Request Floods

`ab` will flood the Apache server with requests – as fast as it can generate them (not unlike in a DDoS attack). AB has no
option to set a delay between these requests.

And given that these requests are generated from the same local system they are going to (i.e., the network layer is bypassed),
this will create a peak level of requests that will cause Apache to stop responding and the OS to start blocking/dropping
additional requests. Especially if the requested page is a simple PHP file that can be processed within a millisecond.

In this context, with `ab`, the bigger the `-c` (concurrent number of requests to do at the same time) is, the lower
your `-n` (total number of requests to perform) should be… Even with a `-c` of 5, `-n` should not be more than 200.

Expect the behavior of the `ab` tests to be very non-deterministic under higher concurrent loads, they will fail and
succeed randomly. Even a `-c` of 2 will cause issues.

These are the error messages displayed by `ab` –

```
apr_socket_recv: An existing connection was forcibly closed by the remote host. (730054)
```

```
apr_pollset_add(): Not enough space (12)
```

When this happens (a message is displayed that Apache has crashed), just ignore it (Apache is still running), and keep repeating the test until “Failed requests:” is reported as “0”, AND “Percentage of the requests served within a certain time (ms)” is about 2-20x between the 50% and 99% mark (and not 200x). Otherwise, the test is not reliable due to the issues that present themselves when `ab` floods Apache on loopback (and due to how the OS responds to that flood).

This is what you should see on a good test of a simple index.php page…

```
ab -l -r -n 100 -c 10 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/

Benchmarking www.example.com (be patient).....done

Server Software:        Apache/2.4.10
Server Hostname:        www.example.com
Server Port:            80

Document Path:          /
Document Length:        Variable

Concurrency Level:      10
Time taken for tests:   0.046 seconds
Complete requests:      100
Failed requests:        0
Keep-Alive requests:    100
Total transferred:      198410 bytes
HTML transferred:       167500 bytes
Requests per second:    2173.91 [#/sec] (mean)
Time per request:       4.600 [ms] (mean)
Time per request:       0.460 [ms] (mean, across all concurrent requests)
Transfer rate:          4212.17 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       2
Processing:     1    4   5.9      3      33
Waiting:        1    4   5.9      3      32
Total:          1    4   6.0      3      33

Percentage of the requests served within a certain time (ms)
50%      3
66%      4
75%      4
80%      5
90%      6
95%     22
98%     32
99%     33
100%     33 (longest request)
```

## Before Performing The Load Test

Make sure that –

*   You’ve rebooted the system and don’t have anything extra open/running (i.e., YouTube videos playing in your Browser).
*   These extra PHP extensions are not loaded: Zend OPcache, APC, nor XDebug.
*   You [wait 4 minutes](http://technet.microsoft.com/en-us/library/cc938217.aspx) before performing another `ab` test to avoiding [TCP/IP Port Exhaustion](http://blogs.technet.com/b/askds/archive/2008/10/29/port-exhaustion-and-you-or-why-the-netstat-tool-is-your-friend.aspx) (also known as ephemeral port exhaustion).
*   And in a test where `KeepAlive` works (it doesn’t in `ab` tests getting dynamic pages), the number of Apache Worker Threads are set to be greater than the number of concurrent users/visitors/connections.
*   If Apache or PHP crashes, you’ve rebooted the computer or VM before performing another test (some things get stuck and continue to persist after Apache and/or mod_fcgid’s PHP processes are restarted).

## Start The AB Test

1. Install WordPress as http://www.example.com/blog

2. Open the terminal.

3. Restart Apache and MySQL, and prime the web-server (with 1 request):  

```
ab -n 1 -c 1 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/blog/
```

4. Run the Apache Bench program to simulate –

### 1 concurrent user doing 100 page hits

This is 100 sequential page loads by a single user:  

```
ab -l -r -n 100 -c 1 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/blog/
```

This shows you how well the web-server will handle a simple load of 1 user doing a number of page loads.

### 5 concurrent users each doing 10 page hits

This is 100 page loads by 5 different concurrent users, each user is doing 10 sequential pages loads.  

```
ab -l -r -n 50 -c 10 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/blog/
```

This represents a peak load of a website that gets about 50,000+ hits a month. Congratulations, your website / business / idea
has made it (and no doubt is on its way up).

### 10 concurrent users each doing 10 page hits

This is 100 page loads by 10 different concurrent users, each user is doing 10 sequential pages loads.  

```
ab -l -r -n 100 -c 10 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/blog/
```

This is where the load starts to really stress test the web-server, as 10 concurrent (simultaneous) users is a lot of traffic.
Most websites will be lucky to see 1 or 2 users (visitors) a minute… So let me say it again, 10 users **per second** is a lot
of traffic!

### 30 concurrent users each doing 20 page hits

This is 600 page loads by 30 different concurrent users, each user is doing 20 sequential pages loads.  

```
ab -l -r -n 600 -c 30 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/blog/
```

This is the edge of what a non-cached WordPress setup will be able to handle without crashing or timing-out the web-server
(and/or `ab` itself). This type of load represents an extremely active website or forum, the top 1%.

### 90 concurrent users each doing 30 page hits

This is 2700 page loads by 90 different concurrent users, each user is doing 30 sequential pages loads.  

```
ab -n 2700 -c 90 -k -H "Accept-Encoding: gzip, deflate" http://www.example.com/blog/
```

Only a fully cached (using mod_cache) Apache setup will be able to handle this type of a load. This represents some of the
busiest sites on the net, and there is no hope of this not maxing out and crashing (if your settings are not just right) the
web-server with a non-cached WordPress setup.

## Analyze the AB Results

We only care about 3 things:

1. How many **Requests Per Second** are we seeing? The other metrics are not really useful, as they are not representative of
anything real in this `ab` context. * This value will remain somewhat the same regardless of the concurrency level used.

2. Are there any errors in the website’s or Apache’s (general) error and php logs? * When things stat to choke, PHP memory
issues will start coming up. A lot of PHP scripts also begin to crash (and take out Apache + PHP processes) if they are not
written with concurrency in mind.

3. At what concurrency level does Apache crash and/or time-out? * If this is happening at a lower concurrency level, something
is wrong and you need to adjust these settings either lower of higher…


Also, in my experience, the switch from 32 bit to 64 bit Apache, PHP, and MySQL versions only provides limited/marginal
performance gains (and in some cases it’s even negative).

To sum everything up, 99% of all performance gains will come from utilizing Apache’s caching mechanisms (via mod_cache), using
PHP Zend OPcache (extension), and afterwards (once the bottleneck is moved from Apache with PHP to MySQL), improving MySQL performance by tuning my.ini settings, and optimizing/restructuring MySQL queries by utilizing MySQL’s Slow Query log (to see what the problem is).

Having said that, there are also performance robbing issues that can exist on the OS, in the Apache/MySQL/PHP settings, and even
the client’s Browser, that are covered here.
