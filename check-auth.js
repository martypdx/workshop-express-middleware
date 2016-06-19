module.exports = function( secret ) {

	return function checkAuth( req, res, next ) {
		const token = req.get('Authorization');
		if( token && token === secret ) {
			next();
		}
		else {
			next({
				code: 400,
				error: 'not authorized'
			});
		}
	}

};
