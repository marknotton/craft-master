<?php

namespace modules\general\twigextensions;

use modules\general\General;

use Craft;

class TwigExtensions extends \Twig_Extension {

  public function getName() {
    return 'General';
  }

  public function getFilters() {
    return [
      new \Twig_SimpleFilter('someFilter', [$this, 'someInternalFunction']),
    ];
  }

  public function getFunctions() {
    return [
      new \Twig_SimpleFunction('someFunction', [$this, 'someInternalFunction']),
    ];
  }

  public function someInternalFunction($text = null) {
    $result = $text . " in the way";
    return $result;
  }
}
