<?php

namespace modules\general\variables;

use modules\general\General;

use Craft;

class Variables {

  /**
   *
   * @example {{ craft.general.exampleVariable() }}
   * @return [string]
   */
  public function exampleVariable($optional = null) {
    $result = "And away we go to the Twig template...";
    if ($optional) {
      $result = "I'm feeling optional today...";
    }
    return $result;
  }
}
