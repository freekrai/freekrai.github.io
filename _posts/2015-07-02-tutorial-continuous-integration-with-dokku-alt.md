---
layout: post
title:  "Continuous Integration with dokku-alt"
date:   2015-07-02 09:31:58
tags:
 - code
 - devops
ogtype: "article"
bodyclass: "post"
---

I [recently](/2015/05/13/make-your-own-heroku/) rolled my own PAAS solution using Dokku, and ran into a couple problems that I think others might run in to, as well. It took just a few hours and I have a very cheap, but efficient CI stack. All things considered, the entire stack is made up of:

*   Docker
*   Circle CI
*   dokku-alt (and Digital Ocean for VM hosting)
*   Github

My main goal was to be able to simply run my test commands, build my Docker container, and deploy the app every time I pushed to Github.

## Docker

The first thing that you need to is Docker-ize your app. There are many different tutorials on this, so I will assume that this part has been done.

## dokku-alt

[dokku](https://github.com/progrium/dokku) is an open source competitor to [Heroku](http://heroku.com). It is gaining a lot of popularity and even Digital Ocean has a premade VM that runs `dokku` out of the box. While I wanted to go this route, it could not handle Docker containers.

Another open source project based on `dokku` did, however, called [dokku-alt](https://github.com/dokku-alt/dokku-alt). `dokku-alt` is essentially `dokku` but with much more features that made things very simple. The setup is a bit more manual than the Digital Ocean `dokku` but it is still pretty easy. To set it up, start a new Digital Ocean/Ubuntu VM. I would recommend selecting at least the second "size" Digital Ocean droplet as I tried the $5/month one and was constantly running out of memory for `npm install`s. I also would recommend including your ssh keys here so that Digital Ocean can add them on creating the droplet and you won't have to do this later.

If you are new to Digital Ocean, it is highly recommend and if you'd like, you can use [my referral link](https://www.digitalocean.com/?refcode=326e96423ba7) and get $10 towards a droplet (one free month in this case!).

Once the droplet is set up, go to the DNS records and route a new A record to the droplet's IP that was just created (this is optional but makes things a lot nicer). For this tutorial, I added `ci.freekrai` and `*.ci.freekrai` to the IP of the droplet. I will explain why this is nice later in the tutorial.

After everything is setup, `ssh root@YOUR_IP` or `ssh root@ci.website.com`, if you set up the A records, on your local machine. Now, run the script suggested by [dokku-alt](https://dokku-alt.github.io/try-it.html).

```javascript
$ sudo bash -c "$(curl -fsSL bit.ly/dokku-alt)"
```

This will handle the full installation for you, and at the end, will tell you to point to `ci.website.com:2000` to finish the setup. I used the pre-set SSH key, as it was mine already, and then changed the IP to be `ci.website.com` and then **enabled virtual hosting**. As you can see it allows for different projects to have much better URLs such as `app.ci.website.com`. This is the reason that I suggested to add the wilcard A record to Digital Ocean.

After you save these settings, `ctrl-c` the start up script out of the `dokku-alt` vm. That's it!

You can now test that this works by adding a new remote origin to your Docker project's git remotes. To do use this following command, and be sure to change the URL correctly:

```javascript
$ git remote add deploy dokku@ci.website.com:app
```

Also, be sure that you change `app` to whatever you want `app.ci.website.com` to be. I made mine `dev` in this case because it would be the development version of the app. After this is done, run `git push dokku master` to push the app up to `dokku-alt`. `dokku-alt` will recognize the `Dockerfile` and appropriately start the container. You will know if its working if at the end it says something about visiting `app.ci.website.com`.

One issue that I had a problem with was exposing the proper port! If `dokku-alt` does not detect that ports 80, 8080, or 5000 are not `EXPOSE`'d using the `Dockerfile`, it won't actually launch the site.

## CircleCI

[CircleCI](https://circleci.com/) is a continuous integration service (written in React!!) that integrates well with Github and is very cheap. It is actually free if you are okay with only running one CI at a time. In my case, this was perfectly acceptable as I would never have too many builds going on at once.

To begin sign up with your Github account and link your project. That's _technically_ it. At this point, Circle recognized that I was running a Node.js app so it read my `package.json` and built my Docker container. It ran the tests based off my test suite in `package.json` and simply ended. You may or may not have to do more to get Circle to work with your app specifically. This is where the `circle.yml` file comes in. [The docs](https://circleci.com/docs) are very good if you find that you have to use more configuration.

Add a private ssh key to the `Project Settings` for this specific project. In my case, I used my own private key but it would definitely be better to create a deploy key for Circle and then configure `dokku-alt` to receive that deployments (and deployments only) from that key.

For this tutorial, however, we will use the `circle.yml` file to deploy to our `dokku-alt` instance at the **end of a successful** test. It is very simple:

```javascript
deployment:  
  production:
    branch: master    
    commands:
      - ./deploy.sh
```

All it says is at the `deployment` step, in `production`, on the `master` branch, run `./deploy.sh`. This allows you to have multiple different configurations for production, demo, staging, etc. and can all run different deploy scripts.

Put this `circle.yml` file in the root of you repository, and then create another new file called `deploy.sh`. This file is even simpler:

```javascript
#! /bin/bash

git remote add dokku dokku@ci.website.com:dev  
git push dokku master  
```

We just do exactly the same thing we did as before to see if `dokku-alt` was running correctly! Just push to the `dokku` branch, as if it were being done manually. Be sure to `chmod +x deploy.sh` so that Circle can execute the file, and push to master.

At this point you can watch Circle receive the new push, initialize your container, run your tests, and then, on success, run the `deploy.sh` script.

## Conclusion

So far this has been working great, and I hope that if you followed this tutorial, you might avoid some of the mistakes that I made. If you have any questions, please [email me](mailto:roger@datamcfly.com) or find me on [Twitter](http://twitter.com/freekrai).
