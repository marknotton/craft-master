////////////////////////////////////////////////////////////////////////////////
// Iterator
////////////////////////////////////////////////////////////////////////////////

/**
 * Manage Custom Property values
 * @author Mark Notton <mark@marknotton.uk>
 * @link https://github.com/marknotton/helpers.js#iterator
 * @module Utilities
 * @external "jQuery.fn"
 * @license Apache-2.0
 */

class Iterator extends Utilities {

	constructor() {

		this.defaults = {
			duration  : 3000,       // Time (in miliseconds) between each iteration callback
			instant   : true,       // Trigger iniitial callback instantly with no delay
			delay     : 0,          // End function delay.
			loop      : 3,          // Iterations loop infinetly or by a set amount
			autostop  : true,       // Adds a listener to pause iterations when user is not activly looking at page
			startfrom : 1,          // Choose to start the iteration from a particular index
			endon     : 1,          // Loop rules are ignored until a particular index is found after the final loop.
			direction : 'forwards', // Start playing immediatly
			autoplay  : true,       // Start playing immediatly
			log       : false       // Dev option to console log out status changes.
		}

		this.manage(arguments, {
			function : (value) => { console.log('function argument found with value: ', value) },
			boolean  : (value) => { console.log('boolean argument found with value: ', value) },
			string   : (value) => { console.log('string argument found with value: ', value) },
			number   : (value) => { console.log('number argument found with value: ', value) },
			object   : (value) => { console.log('object argument found with value: ', value) },
			array    : (value) => { console.log('array argument found with value: ', value) },
			element  : (value) => { console.log('jquery element argument found with value: ', value) }
		})

	}

	play() {
		console.log('Iterator play')
	}

	pause() {
		console.log('Iterator pause')
	}

	stop() {
		console.log('Iterator stop')
	}

	next() {
		console.log('Iterator next')
	}

	prev() {
		console.log('Iterator prev')
	}

}
