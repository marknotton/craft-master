<?php

////////////////////////////////////////////////////////////////////////////////
// Module Settings
////////////////////////////////////////////////////////////////////////////////

use modules\helpers\Helpers;

return [

  // ===========================================================================
  // Global settings
  // ===========================================================================

  '*' => [

    // CMS ---------------------------------------------------------------------

    'cms' => [
      'themed'  => true,
      'sidebar' => true,
      'template-maker' => true,
      // 'theme'   => ['#3F4041', '#EB9F24'],
      // 'extensions' => ['filters','svg','wrapper','snip','tokens','transform','checks','globals']
    ],

    // Inclusions --------------------------------------------------------------
    // Explcitiely include module classes. Omit this to use everything.

    'include' => [
      'fields'      => ['video'],
      'controllers' => ['fetcher'],
      'extensions'  => ['filters','svg','wrapper','snip','tokens','transform','checks','globals'],
      'services'    => ['queries','requests','services','versioning']
    ],

    // Exclusions --------------------------------------------------------------
    // Explcitiely exclude module classes. Omit this to exclude nothing.

    'exclude' => [
      'fields'      => ['video'],
      'controllers' => ['fetcher'],
      'extensions'  => ['filters','svg','wrapper','snip','tokens','transform','checks','globals'],
      'services'    => ['queries','requests','services','versioning']
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
