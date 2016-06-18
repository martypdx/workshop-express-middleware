Express Router
===

* Use the `express.Router` object to modularize routes by resource type (REST noun)
* Decouple resource routes from app implementation
* Use parameter based middleware

## Branching route selection

* Helps with modularization (plug into main `app.js`
* Think of it as a branch

## Mounting routers

* `app.use( '/mounting-path`, router )
* "starts with"

## Chaining syntax

* basic
* `.route()` - specified a route the following `.METHOD` calls apply too
* `.param()`
	* called once on route when exists
	* useful for param processing that applies to multiple handlers
	* no array option like `app.param`

## Recurse to infinity and beyond

* `router.use()`
* sub-app's
