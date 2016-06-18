Express Middleware
===

* Correctly order app routes and multi-function routes by knowing how middleware "flows"
* Understand what third-party middlewares like `body-parser` are actually doing
* Use the `next()` function to selectively apply common app logic like authentication and authorization
* Introduce custom properties on the request object

## Middlewhat?

* Ambiguous based on broad history
* Larger architectural meaning - middle between API and db
* For our purposes, think about the middle between request and response
* Basic "handler": `( res, req[, next] ) => { ... }`
* Middleware is flow to find one or more handlers

## All starts with `app.use()`

* `app.METHOD` "short cuts"
* `next()`
	* `( res, req[, next] ) => { ... }`
* order matters

## Functional middlewares

* Doesn't handle response, just does additional work
* Sometimes this is what people mean by middleware
* body-parser, authentication, authorization

## Another axis

* `app.use( fn1, fn2, fn3 )`
* `next('route')`

## Another branch...

* on to `express.Router`...

