![cf](http://i.imgur.com/7v5ASc8.png) Setup Check
====

* Create a repo, npm init and install express:

	```sh
	> mkdir my-express-app
	> cd my-express-app
	> npm init
	> npm install express -S
	```
* Create a file `test.js`

	```js
	const app = require('express')();

	app.get('/', (req, res) => {
	res.send('hello world');
	});

	const port = 8081;
	app.listen(port, () => console.log('running on port', port));	
	```

* From terminal:

	```sh
	> node test.js
	```

* Navigate to `http://localhost:8081`