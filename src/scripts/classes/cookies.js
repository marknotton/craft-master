////////////////////////////////////////////////////////////////////////////////
// Cookies
////////////////////////////////////////////////////////////////////////////////

/**
 * Manage browser Cookies
 *
 * @author Mark Notton <mark@marknotton.uk>
 *
 * @link https://github.com/marknotton/cookies.js
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

class Cookies {

	constructor() {

	}

	/**
	 * Create/Overwrite a cookie
	 * @method set
	 * @param  {String} name  Cookie name reference
	 * @param  {Mixed}  value Data to be stored
	 * @param  {Number} days  How long until the cookie should expire
	 * @param  {String} path  Path
	 */

	static set (name, value, days = 7, path = '/') => {
		const expires = new Date(Date.now() + days * 864e5).toUTCString()
		document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
	},

	/**
	 * Get cookie data
	 * @method get
	 * @param  {String} name  Cookie name reference
	 * @return {Mixed}
	 */

	static get (name) => {
		return document.cookie.split('; ').reduce((r, v) => {
			const parts = v.split('=')
			return parts[0] === name ? decodeURIComponent(parts[1]) : r
		}, '')
	},

	/**
	 * Delete a cookie by it's name reference and/oath reference data
	 * @method get
	 * @param  {String} name  Cookie name reference
	 * @param  {String} path  Path
	 */

	static delete (name, path) => {
		setCookie(name, '', -1, path)
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

}
