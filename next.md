What's `next()`?
===

* Use the `next()` function to selectively apply common app logic like authentication and authorization
* Introduce custom properties on the request object
* Setup common error handling and 404

## Control flow

* decline to handle
* work supplemental to response

## `next()`

* No arguments - on to next in list
* `route` - jump to next `app.use()`
* Any other argument - jump to error handler

## Special routes

* `( err, req, res, next ) => { ... }`
	* must have all four parameters defined, even if not using
	* act as own "tree"

* last `app.use()` is 404 handler

* Built-in express
	* "404"
	* Error 