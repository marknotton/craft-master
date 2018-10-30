<?php

////////////////////////////////////////////////////////////////////////////////
// Global Settings
////////////////////////////////////////////////////////////////////////////////

use modules\helpers\Helpers;

return [

  // ===========================================================================
  // Global settings
  // ===========================================================================

  '*' => [

    'segments'    => Craft::$app->getRequest()->getSegments(),
    'page'        => Helpers::$app->request->page(),
    'environment' => getenv('ENVIRONMENT'),

    // Image Transforms --------------------------------------------------------

    'featured' => ["mode" => "fit",  "width" => 1080],
    'thumb'    => ["mode" => "fit",  "width" => 400],
    'logo'     => ["mode" => "fit",  "width" => 300],
    'mobile'   => ["mode" => "crop", "width" => 480, "height" => 640, "quality" => 60],

    // Booleans ----------------------------------------------------------------

    'devmode'    => Helpers::$app->request->devmode(),
    'homepage'   => Helpers::$app->request->homepage(),
    'admin'      => Helpers::$app->request->admin(),
    'isDevice'   => Craft::$app->getRequest()->isMobileBrowser(true),
    'animations' => true,

    // Browser support criteria ------------------------------------------------
    // The following browsers are supported

    'browsers' => [
      'ie 11',
      'chrome > 55',
      'firefox > 44',
      'safari >= 9',
      'edge >= 15',
      'opera > 50'
    ],

    // Keys --------------------------------------------------------------------

    'keys' => [
      // 'googleTagManager' => 'GTM-XXXX',
      // 'campaignsID'      => 'XXXX',
      // 'campaignsDomain'  => 'http://newsletter.craftmaster.dev',
      // 'campaignsKey'     => 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    ],

    // Social Media ------------------------------------------------------------
    // (SEOMatic or Globals should be used instead of this ideally)

    'socialmedia' => [
      [
        'siteName' => 'Facebook',
        'handle' => 'facebook',
        'url' => 'https://www.facebook.com/thinkingmatterscom/'
      ],
      [
        'siteName' => 'Twitter',
        'handle' => 'twitter',
        'url' => 'https://twitter.com/thinkschoolcom'
      ]
    ],

    // CSS ---------------------------------------------------------------------
    // If combineCSS is enabled in config.json, this will be ignored.

    'stylesheets' => [
      'global.css'
    ],

    // Javascript --------------------------------------------------------------

    'scripts' => [
      Helpers::$config['filenames']['js']['vendors'],
      Helpers::$config['filenames']['js']['scripts']
    ]
  ],

  // ===========================================================================
  // Dev environment settings
  // ===========================================================================

  'dev' => [

  ],

  // ===========================================================================
  // Staging environment settings
  // ===========================================================================

  'staging' => [

  ],

  // ===========================================================================
  // Production environment settings
  // ===========================================================================

  'production' => [

  ]
];
