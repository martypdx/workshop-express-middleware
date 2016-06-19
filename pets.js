const pets = [
	{ name: 'tweety', type: 'bird' },
	{ name: 'felix', type: 'cat' },
	{ name: 'angeline', type: 'cat' },
	{ name: 'fido', type: 'dog' },
	{ name: 'polly', type: 'bird' },
	{ name: 'timmy', type: 'mouse' },
	{ name: 'garfield', type: 'cat' },
]

pets.forEach( ( p, i ) => p.id = i );
let i = pets.length;

const find = id => pets.find( p => p.id == id );

module.exports = {
	get( id, cb ) {
		const pet = find( id );
		process.nextTick( () => {
			if ( pet ) cb( null, pet );
			else cb( `id ${id} does not exist` );
		})
	},
	getAll( cb ) {
		process.nextTick( () => cb( null, pets ) );
	},
	add( pet, cb ) {
		pet.id = i++;
		pets.push( pet );
		process.nextTick( () => cb( null, pet ) );
	}
}