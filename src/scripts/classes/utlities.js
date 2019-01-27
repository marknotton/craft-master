////////////////////////////////////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////////////////////////////////////

/**
 * Designed to be extended by other component classes allowing for consistant
 * acccess to methods and utilities
 *
 * @author Mark Notton <mark@marknotton.uk>
 *
 * @link https://github.com/marknotton/helpers-module#helpers.js
 *
 * @license Copyright 2019 Mark Notton
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 class Utilities {

 	constructor(...arguments) {

		this.defaults = {}

		// Check jQuery and Pluginify exists, that at least one parameter argument
		// was passed and the first element was a jQuery object $(...)
		if ( window.jQuery && arguments[0] instanceof jQuery && arguments.length && typeof pluginify !== 'undefined'  ) {
			// pluginify('iterate', Iterator, false);
		}

 	}

	// ===========================================================================
	// Manange
	// ===========================================================================

	manage(args, methods) {

		Object.entries(args).forEach((entry) => {
			const [key, value] = entry;

			if (!isNaN(key)) {
				if ( typeof value == 'object' ) {
					if ( window.jQuery && value instanceof jQuery ) {
						methods['element'](value)
					} else {
						methods['object'](value)
					}
				} else {
					methods[typeof value](value)
				}
			}
		});
		
	}

	// ===========================================================================
	// Define default settings
	// ===========================================================================

	set defaults(settings) => {

		if ( typeof settings !== 'object' ) {
			console.warn(`${this.constructor.name} default settings must be a single object`)
		} else if (Object.keys(settings).length !== 0) {
			console.warn(`${this.constructor.name} default settings cannot be reset.`, this.default)
		} else {
			// TODO: Deep merge
			this.default = {...this.default, settings}
		}

	}

	// ===========================================================================
	// Class methods
	// ===========================================================================

	/**
	 * List out all the methods this class has access to.
	 * @method methods
	 * @return {Array}
	 * @todo Exclude any methods starting with an underscore. These should be private.
	 */

	get methods() {
		// Object.getOwnPropertyNames(this.constructor.prototype).slice(1);
		let methods = [];
		for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) {
			if (!(this[name] instanceof Function) || name == 'constructor' ) continue;
			methods.push(name)
		}
		return methods
	}

}
