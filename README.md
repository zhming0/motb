# MOTB

**MOTB**, the Ming's Own Tiny Blog.

A website designed to be my personal blog and a demo.

## Tools

* Server: MongoDB + Compojure + Ring
* Front end: Backbone.js + Require.js + jQuery + Bootstrap + Sass
* Plugin: Pagedown.js

## Usage

### Prepare:
1. Download mongodb from [**here**](http://www.mongodb.org/downloads)
2. Use SASS to compile sass files at `resources/sass` and set output to `resources/public/css`
2. Run it: `mongod`
3. Set up a new db called `motb` by using the console `mongo`.

### Run development server:

	lein ring server 8080
	
### Deploy:

* Optimizing:
   1. Download [**r.js**](http://requirejs.org/docs/release/2.1.6/r.js)
   2. Change pwd to `resouces/public`.
   3. Run it using the config file: `resources/pubic/build.js`
       `r.js -o build.js`
   4. Replace the **public file** by **public-build**.
* Generate *war file*
	`lein ring uberwar`
* Put it to any server that support .war file such as Tomcat.

## License

Copyright © 2013 [Ming](http://mingplusplus.com)

Distributed under the Eclipse Public License, the same as Clojure.
