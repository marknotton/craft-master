<?php

namespace modules\general\assets;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;
use modules\general\General;

class Assets extends AssetBundle {

  public function init() {
    $this->sourcePath = "@general/assets";

    $this->depends = [
      CpAsset::class,
    ];

    $this->js = [
      'scripts/example.js',
    ];

    $this->css = [
      'css/example.css',
    ];

    parent::init();
  }
}
