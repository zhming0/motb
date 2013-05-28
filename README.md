# MOTB

**MOTB**, the Ming's Own Tiny Blog.

A website designed to be my personal blog and a demo.

## Tools

* Server: MongoDB + Compojure + Ring
* Front end: Backbone.js + Require.js + jQuery + Bootstrap
* Plugin: Pagedown.js

## Usage

### Start mongodb:
1. Download mongodb from [**here**](http://www.mongodb.org/downloads)
2. Run it: `mongod`

### Run development server:

	lein ring server 8080
	
### Deploy:

* Generate *war file*
	`lein ring uberwar`
* Put it to any server that support .war file

## License

Copyright © 2013 [Ming](http://mingplusplus.com)

Distributed under the Eclipse Public License, the same as Clojure.
