<?php

return [
  '*' => [

    // The public-facing name of the plugin
    'pluginName' => 'SEO',

    // Should SEOmatic render metadata?
    // 'renderEnabled' => true,

    // Should SEOmatic render frontend sitemaps?
    // 'sitemapsEnabled' => true,

    // The server environment, either `live`, `staging`, or `local`
    'environment' => 'live'

    // Should SEOmatic display the SEO Preview sidebar?
    // 'displayPreviewSidebar' => true,

    // Should SEOmatic display the SEO Analysis sidebar?
    // 'displayAnalysisSidebar' => true,

    // If `devMode` is on, prefix the <title> with this string
    // 'devModeTitlePrefix' => '[devMode] ',
//
    // The separator character to use for the `<title>` tag
    // 'separatorChar' => '|',

    // The max number of characters in the `<title>` tag
    // 'maxTitleLength' => 70,

    // The max number of characters in the `<meta name="description">` tag
    // 'maxDescriptionLength' => 320,
    //
  ],

  'dev' => [
    'environment' => 'local'
  ],

  'staging' => [
    'environment' => 'staging'
  ]

];
