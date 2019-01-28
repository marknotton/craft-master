////////////////////////////////////////////////////////////////////////////////
// jQuery Extensions
////////////////////////////////////////////////////////////////////////////////

(function() {

	/**
	 * Extends the jQuery selector method reintroduces storing selector string
	 * into the object data. This was depricated in version 1.7.
	 * that was depricated a few years ago
	 * @see https://stackoverflow.com/questions/2420970/how-can-i-get-selector-from-jquery-object#answer-46845104
	 * @author Albert Horta
	 * @example $('nav ul li:nth-of-type(2)' a).selector
	 */

	$ = (function(jQ) {
		return (function() {
			var fnc = jQ.apply(this,arguments)
			fnc.selector = (arguments.length > 0) ? arguments[0] : null
			return fnc
		});
	})($);


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
	 * @param  {Number} duration  How long until the class names are toggled in milliseconds
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
