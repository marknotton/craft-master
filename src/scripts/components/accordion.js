////////////////////////////////////////////////////////////////////////////////
// Accordion
////////////////////////////////////////////////////////////////////////////////

/**
 * Event handlers and class toggling for accordion elements.
 * @author Mark Notton <mark@marknotton.uk>
 * @link https://github.com/marknotton/custom-properties
 * @module Utilities
 * @external "jQuery.fn"
 * @license Apache-2.0
 */

class Accordion {

  constructor() {

		super();

		this.manage(arguments, {
			element : (value) => { this.container = value },
		})

    if (this.container) {
      this.container.find('> *:first-child').on('click', (element) => {
        this.click($(element.currentTarget))
      })

			this.container.filter('.open').each((index, element) => {
				$(element).removeClass('open').find('> *:first-child').trigger('click');
			})
    }
  }

	// ===========================================================================
	// Click Handler
	// ===========================================================================

  click(element) {

    var height = element.next().find('> *:first-child').innerHeight();

    if(element.parent().hasClass("open")) {
      this.close(element, height)
    } else {
      this.open(element, height)
    }
  }

	// ===========================================================================
	// Close Handler
	// ===========================================================================

  close(element, height) {
    let content = element.next();
    content.height(height).height(0).when('transition-ends', 'height', () => {
      content.css('height','');
    }).parent().removeClass("open");
  }

	// ===========================================================================
	// Open Handler
	// ===========================================================================

  open(element, height) {
    let content = element.next();
    content.height(height).when('transition-ends', 'height', () => {
       content.css({'height':'auto'});
    }).parent().addClass("open");
  }

	// ===========================================================================
	// Open All
	// ===========================================================================

  openAll() {

  }

	// ===========================================================================
	// Close All
	// ===========================================================================

  closeAll() {

  }

}
