const express = require( 'express' );
const router = express.Router();
const pets = require( './pets' );
const bodyParser = require( './my-body-parser' )();

router
	.get( '/', ( req, res ) => {
		pets.getAll( ( err, pets ) => {
			if ( err ) res.status(500).send( err );
			else res.send( pets );
		});
	})
	.post( '/', bodyParser, ( req, res ) => {
		pets.add( req.body, ( err, pet ) => {
			if ( err ) res.status(500).send(err);
			else res.send( pet );
		})
	});

module.exports = router;