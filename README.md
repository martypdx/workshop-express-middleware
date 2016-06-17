![cf](http://i.imgur.com/7v5ASc8.png) Getting Beyond "app.get()": ExpressJS Middleware Explained and Explored
====

NodePDX 2016 Workshop

Agenda
* Intros
* [Setup Check](setup-check.md)
* Review [Arrow Functions](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/fat-arrows.md)
* Use the `express.Router` object to modularize routes by resource type (REST noun)
* Correctly order app routes and multi-function routes by knowing how middleware "flows"
* Use the `next()` function to selectively apply common app logic like authentication and authorization
* Understand what third-party middlewares like `body-parser` are actually doing
* Introduce custom properties on the request object
* Use parameter based middleware
* Setup common error handling