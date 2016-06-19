const app = require('express')();
const bodyParser = require( './my-body-parser' )();

function checkAuth( req, res, next ) {
	const token = req.get('Authorization');
	if( token && token === 'sekrit' ) {
		next();
	}
	else {
		res.status(400).send('not authorized')
	}
}

app.use( ( req, res, next ) => {
	console.log( req.method, req.url );
	next();
});

app.get( '/', checkAuth, (req, res) => {
		res.send('hello authed peeps');
});

app.get( '/open', (req, res) => {
		res.send('hello world');
});

app.post( '/echo', checkAuth, bodyParser, (req, res, next) => {
		res.send( req.body );
});

const port = 8081;
app.listen(port, () => console.log('running on port', port));