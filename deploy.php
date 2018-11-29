<?php
namespace Deployer;

require 'recipe/common.php';
require 'recipe/npm.php';

$config = json_decode(file_get_contents(__DIR__.'/config.lock'), true)['deployer'];

// Project name
foreach ($config['hosts'] as $host => $setting) {
  set($host.'_path', $setting['path']);
}

set('default_stage', 'staging');

// Project repository
set('repository', $config['repository']);

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);
set('branch', 'staging');

// Shared files/dirs between deploys
set('shared_files', $config['shared-files']);

// Remove trailing slashes from all strings in the shared_dirs array.
$shared_dirs = array_map(function($string) {
  return rtrim($string, '/');
}, $config['shared-dirs']);

set('shared_dirs', $shared_dirs);

// Remove trailing slashes from all strings in the writable_dirs array.
$writable_dirs = array_map(function($string) {
  return rtrim($string, '/');
}, $config['writable-dirs']);

// Writable dirs by web server
set('writable_dirs', $writable_dirs);
set('allow_anonymous_stats', false);

// Hosts
foreach ($config['hosts'] as $host => $setting) {
  host($host)
  ->set('branch', $setting['branch'])
  ->stage($setting['name'])
  ->hostname($setting['hostname'])
  ->user($setting['username'])
  ->port($setting['port'])
  ->set('deploy_path', '~/{{'.$host.'_path}}');
}

task('run:gulp', function(){
  run('cd {{deploy_path}}/release && gulp');
});

// Tasks
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

after('deploy:update_code', 'npm:install');

task('gulp', function () {
	run('gulp --deployer');
});

after('deploy:vendors', 'gulp');

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
