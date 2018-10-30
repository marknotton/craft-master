<?php

return [
  'modules' => [
    'helpers' => [
      'class' => \modules\helpers\Helpers::class,
      'components' => [
        'service' => [ 'class' => 'modules\helpers\services\Services' ],
        'query'   => [ 'class' => 'modules\helpers\services\Queries'  ],
        'request' => [ 'class' => 'modules\helpers\services\Requests' ]
      ],
    ],
    'general' => [
      'class' => \modules\general\General::class,
      'components' => [
        'service' => [ 'class' => 'modules\general\services\Services' ],
      ],
    ],
    'templatemaker' => [
      'class' => \modules\templatemaker\TemplateMaker::class,
      'components' => [
        'service' => [ 'class' => 'modules\templatemaker\services\Services' ],
      ],
    ]
  ],
  'bootstrap' => ['helpers'],
  // 'bootstrap' => ['helpers', 'general'],
];
