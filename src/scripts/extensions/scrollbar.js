////////////////////////////////////////////////////////////////////////////////
// Scrollbar
////////////////////////////////////////////////////////////////////////////////

const scrollbar = {
  y : window.pageYOffset || document.documentElement.scrollTop,
  x : window.pageXOffset || document.documentElement.scrollLeft,
  get width() {
    return window.innerWidth - document.documentElement.clientWidth;
  },
  get position() {
    return Math.round(((window.scrollY / (document.height - document.body.clientHeight)) * 100) * 100) / 100;
  },
  get direction() {

    let results = [];

    // Vertical check
    let y = window.pageYOffset || document.documentElement.scrollTop;
    let v = y < scrollbar.y ? 'up' : (y > scrollbar.y ? 'down' : false);
    if (v !== false) { results.push(v) }
    scrollbar.y = y <= 0 ? 0 : y;

    // Horizontal check
    let x = window.pageXOffset || document.documentElement.scrollLeft;
    let h = x < scrollbar.x ? 'left' : (x > scrollbar.x ? 'right' : false);
    if (h !== false) { results.push(h) }
    scrollbar.x = x <= 0 ? 0 : x;

    return results;
  }
};
