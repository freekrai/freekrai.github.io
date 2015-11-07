---
layout: "post"
title: "How to Use Ghost as middleware in an express app"
tags: 
- "code"
date: "2015-09-07 10:00:00"
ogtype: "article"
bodyclass: "post"
---

[Ghost](tryghost.org) is a handy blog engine, I use [Camel](https://github.com/DataMcFly/camel) on this site and the [Flybase Blog](http://blog.flybase.io), but I use Ghost on a few other projects.

One feature that is handy is being able to install Ghost via npm and then use it through middleware in Express, this lets you run Ghost alongside your main Node.js app.

We're going to set this up as a new express app, but you'll see how to go about setting this up. We'll set this up so that Ghost is accessed via `/blog` and everything else is accessed via your express app.

1. Create a new app (or add ghost to your existing express app)

```javascript
npm install express ghost
```

2. Create a folder called `ghost-app/` this will let us keep our ghost related content in one place, we only need one folder from Ghost and a config file.

2. Copy the `node_modules/ghost/content/` folder to your app's folder as `ghost-app/content/`

3. Copy the following `ghost-app/config.js` file, this is the default config.js file, with `/blog/` added to the URLs. _It is very important that these URLs point to `/blog/` or where ever you decide to set up Ghost_

```javascript
var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://my-ghost-blog.com/blog/',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    },

    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://localhost:2368/blog/',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        // 
        //  mail: {
        //      transport: 'SMTP',
        //      options: {
        //          service: 'Mailgun',
        //          auth: {
        //              user: '', // mailgun username
        //              pass: ''  // mailgun password
        //          }
        //      }
        //  },
        //

        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's 'net.Server#listen()'
            host: '127.0.0.1',
            // Port to be passed to node's 'net.Server#listen()', for iisnode set this to 'process.env.PORT'
            port: '2368'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    // **Developers only need to edit below here**

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369/blog',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing MySQL
    // Used by Travis - Automated testing run through GitHub
    'testing-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'root',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    },

    // ### Testing pg
    // Used by Travis - Automated testing run through GitHub
    'testing-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_testing',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        },
        logging: false
    }
};

module.exports = config;
```

4. Now, we want to create `ghost-app/ghost-in-the-middle.js`:

```javascript
var ghost = require( 'ghost' )

function processBuffer( buffer, app ){
	while( buffer.length ){
		var request = buffer.pop()
			app( request[0], request[1] )
	}
}

function makeGhostMiddleware( options ){
	var requestBuffer = []
	var app = false

	ghost( options ).then( function( ghost ){
		app = ghost.rootApp
		processBuffer( requestBuffer, app )
	})

	return function handleRequest( req, res ){
		if( !app ){
			requestBuffer.unshift( [req, res] )
		} else {
			app( req, res )
		}
	}
}

module.exports = makeGhostMiddleware
```

5. Use the included `index.js` to see how to include Ghost

```javascript
var express = require('express');
var path = require('path');
var ghost = require('./ghost-app/ghost-in-the-middle');

var app = express();
var parentApp = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use( '/blog', ghost({
	config: path.join(__dirname, 'ghost-app/config.js')
}) );

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Example app listening at http://%s:%s', host, port);
});
```

You've now got Ghost running inside your express app via middleware, When you want to edit your ghost theme, you can do that via `ghost-app/content`, this lets you keep your ghost files separate from the rest of your app, you could also just include them in the root.

### Ok, why not copy the entire ghost folder?

That's a good question, and the answer is, you don't need it. The full folder includes the Ghost core, which is included via `node_modules/` and just isn't needed, so all your need is `config.js` and `content/` so I've found it easier to keep these in their own `ghost-app/` folder and keep the other app related folders separate.