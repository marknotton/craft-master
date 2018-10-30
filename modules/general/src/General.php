<?php
/**
* General module for Craft CMS 3.x
*
* Bespoke client module
*
* @link      https://www.yello.studio
* @copyright Copyright (c) 2018 Yello Studio
*/

namespace modules\general;

use modules\general\assets\Assets;
use modules\general\services\Services;
use modules\general\variables\Variables;
use modules\general\twigextensions\TwigExtensions;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\TemplateEvent;
use craft\i18n\PhpMessageSource;

use craft\web\View;
use craft\web\UrlManager;
use craft\web\twig\variables\CraftVariable;
use craft\events\RegisterUrlRulesEvent;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

class General extends Module {

  public static $instance;

  //////////////////////////////////////////////////////////////////////////////
  // Construct
  //////////////////////////////////////////////////////////////////////////////

  public function __construct($id, $parent = null, array $config = []) {

    Craft::setAlias('@modules/general', $this->getBasePath());
    Craft::setAlias('@general', $this->getBasePath());

    $this->controllerNamespace = 'modules\general\controllers';

    // Translation category
    $i18n = Craft::$app->getI18n();
    /** @noinspection UnSafeIsSetOverArrayInspection */
    if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id.'*'])) {
      $i18n->translations[$id] = [
        'class' => PhpMessageSource::class,
        'sourceLanguage' => 'en-US',
        'basePath' => '@modules/general/translations',
        'forceTranslation' => true,
        'allowOverrides' => true,
      ];
    }

    // Base template directory
    Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
      if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
        $e->roots[$this->id] = $baseDir;
      }
    });

    // Set this as the global instance of this module class
    static::setInstance($this);
    // parent::__construct($id, $parent, $config);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Init
  //////////////////////////////////////////////////////////////////////////////

  public function init() {
    parent::init();

    self::$instance = $this;

    if (!Craft::$app->getRequest()->getIsConsoleRequest()) {

      // Asset bundle prep

      if (Craft::$app->getRequest()->getIsCpRequest()) {
        Event::on(
          View::class,
          View::EVENT_BEFORE_RENDER_TEMPLATE,
          function (TemplateEvent $event) {
            try {
              Craft::$app->getView()->registerAssetBundle(Assets::class);
            } catch (InvalidConfigException $e) {
              Craft::error(
                'Error registering AssetBundle - '.$e->getMessage(),
                __METHOD__
              );
            }
          }
        );
      }
      // Instantiate Twig Extensions Class
      Craft::$app->view->registerTwigExtension(new TwigExtensions());

      // Controller rules

      Event::on(
        UrlManager::class,
        UrlManager::EVENT_REGISTER_SITE_URL_RULES,
        function (RegisterUrlRulesEvent $event) {
          $event->rules['siteActionTrigger1'] = 'general/default';
        }
      );

      Event::on(
        UrlManager::class,
        UrlManager::EVENT_REGISTER_CP_URL_RULES,
        function (RegisterUrlRulesEvent $event) {
          $event->rules['cpActionTrigger1'] = 'general/default/do-something';
        }
      );

      // Instantiate Variables Class

      Event::on(
        CraftVariable::class,
        CraftVariable::EVENT_INIT,
        function (Event $event) {
          /** @var CraftVariable $variable */
          $variable = $event->sender;
          $variable->set('general', Variables::class);
        }
      );

    }

    Craft::info(
      Craft::t(
        'general',
        '{name} loaded',
        ['name' => 'General']
      ),
      __METHOD__
    );
  }

}
