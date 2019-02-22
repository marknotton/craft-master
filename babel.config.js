const fs = require('fs')
let config = fs.existsSync('config.lock') ? JSON.parse(fs.readFileSync('config.lock', 'utf8')) : false;

module.exports = function (api) {
  api.cache(true);

  let presets = [
    ["@babel/preset-env", {
	    "targets": [
	      "chrome > 55",
	      "firefox > 44",
	      "safari >= 9",
	      "edge >= 15",
	      "opera > 50"
	    ]
	  }]
	];

  if ( config && typeof config['supported-browsers'] !== 'undefined') {
    // presets.push({"targets":config['supported-browsers']})
    // console.log({"targets":config['supported-browsers']})
  }

  console.log(config['supported-browsers'])

  return {
    presets
  };
}
