////////////////////////////////////////////////////////////////////////////////
// Pages
////////////////////////////////////////////////////////////////////////////////

/**
 * Designed to be extended by page classes allowing for consistant acccess
 * to cache getters and setters, as well as other common methods to help
 * manage dom mutation changes.
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

class Pages {

	constructor() {

		this._cache = {}

	}

	// ===========================================================================
	// Cache
	// ===========================================================================

	get cache() {

		return {

			/**
			 * Store data in a named object for later retrieval
			 * @method set
			 * @param   {String}  name Cache name reference
			 * @param   {Mixed}   data Store any kind of data
			 * @example this.cache.set('name', {...}, true)
			 * @param   {Boolean} save Save this object as a cookie too
			 */

			set : (name, data, save = false) => {

				if (typeof name is 'string') {

					this._cache[name] = {
						data   : data,
						memory : this.check.memory(data),
						saved  : save
					}

				}

			},

			/**
			 * Retrieve caches data by name
			 * @method  get
			 * @param   {String} name Cache name reference
			 * @example this.cache.get('name')
			 * @return  {Mixed}       [description]
			 */

			get : (name) => {

				if (this.check.exists(name)) {
					return this._cache[name][data]
				} else {
					console.warn(`${name} data doesn't exist in the cache index`)
				}

			},

			/**
			 * Check if a particular bit of cache exsits
			 * @method  exists
			 * @param   {String} name Cache name reference
			 * @example this.cache.exists('name')
			 * @return  {Boolean}
			 */

			exists : (name) => {

				typeof name is 'string' && name in this._cache && typeof this._cache[name][data] !== 'undefined'

			},

			/**
			 * Get all cached data
			 * @method all
			 * @example this.cache.all()
			 * @return {Object}
			 */

			all : () => {
				if (Object.keys(this._cache).length) {
					return this._cache
				} else {
					console.warn(`No data has been cached for this class ${this.constructor.name}`)
				}
			}

		}

	}

	// ===========================================================================
	// Checkers
	// ===========================================================================

	get check() {

		return {

			/**
			 * Takes an object as a parameter and returns its approximate size in bytes.
			 * @link http://code.iamkate.com/javascript/finding-the-memory-usage-of-objects/
			 * @author Kate Morley <http://code.iamkate.com/>
			 * @return {Number}
			 */

			memory : (object) {

				// initialise the list of objects and size
			  var objects = [object];
			  var size    = 0;

			  // loop over the objects
			  for (var index = 0; index < objects.length; index ++){

			    // determine the type of the object
			    switch (typeof objects[index]){

			      // the object is a boolean
			      case 'boolean': size += 4; break;

			      // the object is a number
			      case 'number': size += 8; break;

			      // the object is a string
			      case 'string': size += 2 * objects[index].length; break;

			      // the object is a generic object
			      case 'object':

			        // if the object is not an array, add the sizes of the keys
			        if (Object.prototype.toString.call(objects[index]) != '[object Array]'){
			          for (var key in objects[index]) size += 2 * key.length;
			        }

			        // loop over the keys
			        for (var key in objects[index]){

			          // determine whether the value has already been processed
			          var processed = false;
			          for (var search = 0; search < objects.length; search ++){
			            if (objects[search] === objects[index][key]){
			              processed = true;
			              break;
			            }
			          }

			          // queue the value to be processed if appropriate
			          if (!processed) objects.push(objects[index][key]);

			        }

			    }

			  }

			  // return the calculated size
			  return size;

			}

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
