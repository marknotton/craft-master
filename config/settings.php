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
    'admin'      => Helpers::$app->request->admin(),
    'desktop'    => !Craft::$app->getRequest()->isMobileBrowser(true),

    // Browser support criteria ------------------------------------------------
    // The following browsers are supported

    'browsers' => [
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

    // CSS ---------------------------------------------------------------------

		'stylesheets' => [
			Helpers::$config['filenames']['css']['global']
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
