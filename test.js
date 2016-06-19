const app = require('express')();

app.use( ( req, res, next ) => {
	console.log( req.method, req.url );
	next();
});

app.use( ( req, res, next ) => {
	let body ='';
	req.on( 'data', chunk => {
		body += chunk;
	});
	req.on( 'end', () => {
		req.body = body ? JSON.parse( body ) : null;
		next();
	});

})

app.get( '/', (req, res) => {
		res.send('hello world');
});

app.use( (req, res, next) => {
		if( req.body ) res.send( req.body );
		else res.send('finally something other than GET /');
});

const port = 8081;
app.listen(port, () => console.log('running on port', port));