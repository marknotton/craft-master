////////////////////////////////////////////////////////////////////////////////
// jQuery Extensions
////////////////////////////////////////////////////////////////////////////////

(function() {

	// Native jQuery functions

  const nativeAddClass    = $.fn.addClass;
	const nativeRemoveClass = $.fn.removeClass;
	const nativeToggleClass = $.fn.toggleClass;

	/**
	 * Extends the Add Class functions by accepting a second parameter for a delayed toggle.
	 * @method
	 * @param  {String} classname Class names to be added
	 * @param  {Number} duration  How long until the class names are removed in milliseconds
	 * @example $('body').addClass('foo', 1000)
	 */

	$.fn.addClass = function () {
		let args = [].slice.call(arguments)

		args.forEach((arg) => {
			if ( !! (arg && typeof arg == 'number')) {
				setTimeout(() => { nativeRemoveClass.apply(this, arguments); }, arg);
				delete arg;
			}
		});

	  return nativeAddClass.apply(this, arguments);
	}

	/**
	 * Extends the Remove Class functions by accepting a second parameter for a delayed toggle.
	 * @method
	 * @param  {String} classname Class names to be added
	 * @param  {Number} duration  How long until the class names are removed in milliseconds
	 * @example $('body').removeClass('foo', 1000)
	 */

	$.fn.removeClass = function () {
		let args = [].slice.call(arguments)

		args.forEach((arg) => {
			if ( !! (arg && typeof arg == 'number')) {
				setTimeout(() => { nativeAddClass.apply(this, arguments); }, arg);
				delete arg;
			}
		});

		return nativeRemoveClass.apply(this, arguments);
	}

	/**
	 * Extends the Toggle Class functions by accepting a second parameter for a delayed reversed toggle.
	 * @method
	 * @param  {String} classname Class names to be added
	 * @param  {Number} duration  How long until the class names are removed in milliseconds
	 * @example $('body').toggleClass('foo', 1000)
	 */

	$.fn.toggleClass = function () {
		let args = [].slice.call(arguments)

		args.forEach((arg) => {
			if ( !! (arg && typeof arg == 'number')) {
				setTimeout(() => { nativeToggleClass.apply(this, arguments); }, arg);
				delete arg;
			}
		});

		return nativeToggleClass.apply(this, arguments);
	}

})();
