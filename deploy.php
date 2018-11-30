<?php

////////////////////////////////////////////////////////////////////////////////
// Deployer
////////////////////////////////////////////////////////////////////////////////

namespace Deployer;

require 'recipe/common.php';
require 'recipe/npm.php';

$config = json_decode(file_get_contents(__DIR__.'/config.lock'), true)['deployer'];

// =============================================================================
// Settings
// =============================================================================

// Trailing slashes ------------------------------------------------------------
// Remove trailing slashes from strings in the shared_dirs & writable_dirs array.

$shared_dirs = array_map(function($string) {
  return rtrim($string, '/');
}, $config['shared-dirs']);

$writable_dirs = array_map(function($string) {
  return rtrim($string, '/');
}, $config['writable-dirs']);

// Setters ---------------------------------------------------------------------

foreach ($config['hosts'] as $host => $setting) {
  set($host.'_path', $setting['path']);
}

set('default_stage', 'staging');
set('repository', $config['repository']);
set('git_tty', true);
set('branch', 'staging');
set('shared_files', $config['shared-files']);
set('shared_dirs', $shared_dirs);
set('writable_dirs', $writable_dirs);
set('allow_anonymous_stats', false);

// Hosts -----------------------------------------------------------------------

foreach ($config['hosts'] as $host => $setting) {
  host($host)
  ->set('branch', $setting['branch'])
  ->stage($setting['name'])
  ->hostname($setting['hostname'])
  ->user($setting['username'])
  ->port($setting['port'])
  ->set('deploy_path', '~/{{'.$host.'_path}}');
}

// =============================================================================
// Tasks
// =============================================================================

// Main Deployment Task --------------------------------------------------------

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// Gulp ------------------------------------------------------------------------

desc('Run Gulp tasks');
task('run:gulp', function(){
	run('cd {{deploy_path}}/release && gulp --deployer');
});

// After Task Listeners --------------------------------------------------------

after('deploy:update_code', 'npm:install');
after('deploy:vendors', 'run:gulp');
after('deploy:failed', 'deploy:unlock');
