<?php

namespace modules\general\services;

use modules\general\General;

use Craft;
use craft\base\Component;

class Services extends Component {

  /**
   * @example General::$instance->service->exampleService();
   * @return [string]
   */

  public function exampleService() {
    $result = 'something';
    return $result;
  }
}
