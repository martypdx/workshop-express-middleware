const app = require('express')();
const checkAuth = require( './check-auth' )( 'sekrit' );
const petsRouter = require( './pets-router' );

app.use( ( req, res, next ) => {
	console.log( req.method, req.url );
	next();
});

// app.use( express.static( __dirname + 'public' ) );
 
// app.get( '/', (req, res) => {
// 		res.send('hello world');
// });

app.use( '/api/pets', checkAuth, petsRouter );

app.use( ( req, res ) => {
	res.status(404).send('<h6>not found</h6>');
})

app.use( ( err, req, res, next ) => {
	const code = ( err && err.code ) ? err.code : 500;
	const error = ( err && err.error ) ? err.error : err || 'Internal error';
	// be kind to developers expecting json api and return a json response
	res.status( code ).send( { error } );
});

module.exports = app;
