////////////////////////////////////////////////////////////////////////////////
// Window & Document dimensions
////////////////////////////////////////////////////////////////////////////////

// Add width and height getter methods to the window object

if ( typeof window.width == 'undefined' ) {
  Object.defineProperty(window, 'width', {
    get : () => { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth }
  });
}

if ( typeof window.height == 'undefined' ) {
  Object.defineProperty(window, 'height', {
    get : () => { return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight }
  });
}

// Add width and height getter methods to the document object

if ( typeof document.width == 'undefined' ) {
  Object.defineProperty(document, 'width', {
    get : (body = document.body, html = document.documentElement) => {
      return Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
    }
  });
}

if ( typeof document.height == 'undefined' ) {
  Object.defineProperty(document, 'height', {
    get : (body = document.body, html = document.documentElement) => {
      return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    }
  });
}
