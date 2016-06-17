const app = require('express')();

app.get('/', (req, res) => {
	res.send('hello world');
});

const port = 8081;
app.listen(port, () => console.log('running on port', port));