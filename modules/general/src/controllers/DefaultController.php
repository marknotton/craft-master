<?php

namespace modules\general\controllers;

use modules\general\General;

use Craft;
use craft\web\Controller;

class DefaultController extends Controller {

  /**
  * @var    bool|array Allows anonymous access to this controller's actions.
  *         The actions must be in 'kebab-case'
  * @access protected
  */
  protected $allowAnonymous = ['index', 'do-something'];

  public function actionIndex() {
    $result = 'Welcome to the DefaultController actionIndex() method';
    return $result;
  }

  public function actionDoSomething() {
    $result = 'Welcome to the DefaultController actionDoSomething() method';
    return $result;
  }
}
