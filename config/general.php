<?php

////////////////////////////////////////////////////////////////////////////////
// Craft Settings
////////////////////////////////////////////////////////////////////////////////

use Craft;

return [

  // ===========================================================================
  // Global settings
  // ===========================================================================

  '*' => [
    'defaultWeekStartDay'              => 1,
    'enableCsrfProtection'             => false,
    'securityKey'                      => getenv('SECURITY_KEY'),
    'phpMaxMemoryLimit'                => '100M',
    'maxUploadFileSize'                => '100M',
    'omitScriptNameInUrls'             => true,
    'addTrailingSlashesToUrls'         => false,
    'generateTransformsBeforePageLoad' => true,
    'autoLoginAfterAccountActivation'  => true,
    'csrfTokenName'                    => 'X-CSRF-Token',
    'backupOnUpdate'		               => true,
    'errorTemplatePrefix'              => "_errors/",
    'defaultTemplateExtensions'        => array('twig', 'html'),
    'devMode'                          => false,
    'cooldownDuration'                 => 0,
    'useProjectConfigFile'             => true,
    'siteUrl'                          => null,
    'useCompressedJs'                  => true,
    'preventUserEnumeration'           => true,
    'resourceBasePath'                 => '@webroot/assets/resources',
    'resourceBaseUrl'                  => '@web/assets/resources',
    // 'postLoginRedirect'                => '',
    // 'postLogoutRedirect'               => '',
    // 'loginPath'                        => 'login',
    // 'logoutPath'                       => 'logout',
    // 'setPasswordPath'                  => 'reset-password',
    // 'setPasswordSuccessPath'           => ''
    'postCpLoginRedirect'              => "entries"
  ],

  // ===========================================================================
  // Dev environment settings
  // ===========================================================================

  'dev' => [
    'devMode'                          => true,
    'enableTemplateCaching'            => false,
    'isSystemLive'                     => true,
    'useCompressedJs'                  => false,
    'disableTemplateMinifying'         => true,
    'testToEmailAddress'               => 'technical@yello.studio',
    'siteUrl'                          => '//'.getenv('SERVER_NAME'),
  ],

  // ===========================================================================
  // Staging environment settings
  // ===========================================================================

  'staging' => [
    'devMode'                          => false,
    'enableTemplateCaching'            => false,
    'isSystemLive'                     => false,
    'useCompressedJs'                  => false,
    'disableTemplateMinifying'         => true,
    'testToEmailAddress'               => 'technical@yello.studio',
    'siteUrl'                          => '//staging.craftmaster.com',
  ],

  // ===========================================================================
  // Production environment settings
  // ===========================================================================

  'production' => []

];
