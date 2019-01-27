<?php

use modules\helpers\Helpers;

$uploads = Helpers::$config['uploads'] ?? '/assets/uploads/';

return [

  // All environments
  '*' => [
    'general' => [
      'url' => $uploads,
      'path' => '@webroot' . $uploads,
    ],
    'logos' => [
      'url' => $uploads . 'logos/',
      'path' => '@webroot' . $uploads . 'logos/',
    ],
    'pdfs' => [
      'url' => $uploads . 'pdfs/',
      'path' => '@webroot' . $uploads . 'pdfs/',
    ]
  ],

];
