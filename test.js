const app = require('express')();
const bodyParser = require( './my-body-parser' )();
const petsRouter = require( './pets-router' );

// function checkAuth( req, res, next ) {
// 	const token = req.get('Authorization');
// 	if( token && token === 'sekrit' ) {
// 		next();
// 	}
// 	else {
// 		res.status(400).send('not authorized')
// 	}
// }

app.use( ( req, res, next ) => {
	console.log( req.method, req.url );
	next();
});

app.get( '/', (req, res) => {
		res.send('hello world');
});

app.use( '/api/pets', petsRouter );



const port = 8081;
app.listen(port, () => console.log('running on port', port));