////////////////////////////////////////////////////////////////////////////////
// Listener
////////////////////////////////////////////////////////////////////////////////

/**
 * Manage Custom Property values
 * @author Mark Notton <mark@marknotton.uk>
 * @link https://github.com/marknotton/custom-properties
 * @module Utilities
 * @external "jQuery.fn"
 * @license Apache-2.0
 */

class Listener extends Utilities {

	constructor() {

		// $.fn['when'] = function(...options) {
		// 	$this.instances['when'] = new Listener(this, ...options)
		// 	return $this.instances[name]
		// }
		/**
		 * Reinstrocude the selector property on e
		 * @method
		 * @param  {[type]} type    [description]
		 * @param  {[type]} handler [description]
		 * @see https://stackoverflow.com/questions/2420970/how-can-i-get-selector-from-jquery-object
		 * @return {[type]}         [description]
		 */

		$.fn.addEvent = function(type, handler) {
		  this.bind(type, {'selector': this.selector}, handler);
		};


	}

	static add(name, truthMethod, falsyMathod ) {

	}

	static get list() {

	}

	static update() {

	}


	get list() {
		devices : 'desktop', 'tablet', 'mobile',
		browser : 'chrome', 'internet-explorer', 'ie', 'firefox', 'safari', 'opera',
		events : 'scroll', 'resize',
		mutations : 'arrives', 'leaves',

	}


}



$('a').when('animation-end', () => {...})
$('a').when('animation-start', () => {...})
$('a').when('animation-iteration', () => {...})
$('a').when('transition-end', () => {...})
$('a').when('scroll', () => {...})
$('a').when('resize', () => {...})
$('a').when('resize scroll', () => {...})
$('a').when('inview', () => {...})
$('a').when('!inview', () => {...})
$('a').when('arrives', () => {...})
$('a').when('arrives ie', () => {...})
$('a').when('leaves', () => {...})
$('a').when(breakpoint.medium, () => {...})
$('a').when('ie', () => {...})

listener.when('a', 'scroll', () => {...})
