////////////////////////////////////////////////////////////////////////////////
// Dom Ready Listener
////////////////////////////////////////////////////////////////////////////////

// This function can be defined multiple times. Each iterations
// will be triggered after all DOM elements and scripts have loaded.
// Usage:
// @see https://stackoverflow.com/a/37403125/843131
// dom.ready(() => {
//   console.log("All DOM elements and script files loaded.")
// });

const dom = {
  functions : [],
  triggered : false,
  ready : (func) => dom.functions.push(func),
  set status(val) {
    if (!dom.triggered) {
      loaded = val;
      dom.triggered = true;
      if (loaded == 'loaded') {
        dom.functions.forEach((func) => {
          func()
        });
      }
    }
  },
  get status() {
    return loaded;
  }
};
