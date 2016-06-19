const app = require( './test' );
const app2 = require( 'express' )();

app2.use( app );
const port = 8081;
app2.listen(port, () => console.log('running on port', port));