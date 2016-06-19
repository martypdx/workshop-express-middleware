const express = require( 'express' );
const router = express.Router();
const pets = require( './pets' );
const bodyParser = require( './my-body-parser' )();

router
	.get( '/', ( req, res ) => {
		pets.getAll( ( err, pets, next ) => {
			if ( err ) next( err );
			else res.send( pets );
		});
	})	
	.get( '/:id', ( req, res, next ) => {
		pets.get( req.params.id, ( err, pet ) => {
			if ( err ) next( err );
			else res.send( pet );
		});
	})
	.post( '/', bodyParser, ( req, res, next ) => {
		pets.add( req.body, ( err, pet ) => {
			if ( err ) next(err);
			else res.send( pet );
		})
	});

module.exports = router;