const app = require('express')();

app.use( (req, res, next) => {
	if( req.method === 'GET' && req.url === '/' ){
		res.send('hello world');
	}
	else {
		next();
	}
	//console.log(req.method, req.url);
});

app.use( (req, res, next) => {
		res.send('finally something other than GET /');
});

const port = 8081;
app.listen(port, () => console.log('running on port', port));