# Craft Master

## Requirements

| Tool/App  | Version | Installation
| --------- | ------- | -------
| Craft CMS | 3.1.0   | -
| PHP       | 7.0     | -
| mySQL     | 5.6     | -
| Gulp      | 4.0.0   | -
| Composer  | 1.6.3   | https://getcomposer.org/download/
| Node JS   | 10.13.0 | https://nodejs.org/en/
| NPM       | 6.4.1   | npm install npm -g
| Gulp-CLI  | 2.0.1   | npm install -g gulp-cli

## Set up

Once you've pulled the latest commit down. You should only need to run one command to get all dependancies installed locally (this also runs `npm install` automatically):

`composer install`

You can also run `composer update` and/or `npm update` if you want to update the packages for this project. Some updates may introduce breaking changes, so be sure read developer notes and run tests everything afterwards.

Once your local server environment is set up (using MAMP normally), you should only need to run a `gulp serve` to get started.

**As of Gulp 4 you will need Gulp CLI installed globally on your machine in order to resolve any breaking changes since 3.9.1.**

## .env & Database Connection

You MUST create a `.env` in the project root. This file should never be committed to the repo. Which is why new installations of this project will not have one. You can create a new one by referring to the `.env.example` as a template. You will need update the details for your project include the 'SERVER_NAME' value to whatever you've called hostname in MAMP. This one is only required for local development.

There may be cases where your Security Key is not defined in your `.env` file. Open up you're Command Line (Terminal) and locate your project directory. Then run this command: `./craft setup/security-key`. This will update your security key. For more information refer to the [official guide](https://docs.craftcms.com/v3/installation.html#step-3-set-a-security-key).

## Git
Following best-practice, you should never work directly on the `master` branch. The master branch is reserved as a sort-of clone of exactly what's on the live production site. Instead, you must work from another branch (staging) and pull-request these into the `master` branch when your changes are done.

## Credentials

In an effort to keep all essential account credentials secure and in one relevant place, please refer and update the 'credentials.md' file in the root of this project.

## Whats-what

| File              | Purpose
| ----------------- | ------------------------------------------------------------
| .atomignore       | Hides files & folder in tree view and fuzzy finder for the Atom Editor commonly used for development
| .babelrc          | Options for babel allowing the use of ES6 when run locally.
| .gitignore        | Omit files or folders from being committed to repositories. Important for excluding sensitive data and large assets.
| .env.example      | See notes above about .ENV. This file is purely for demonstration purposes and can be deleted
| composer.json     | Handles all your composer settings, including dependancies like plugins and modules.
| composer.lock     | Generated automatically when composer update is run. Retains dependency library information. This should always be committed.
| craft/craft.bat   | Command line bootstrap for Windows and Linux.
| deploy.php        | Methods for deploying to specific environments. It refers to config.json for credentials and settings.
| gulpfile.babel.js | Handles precomposing of tasks to render scripts/css/svg's etc... The `.babel.` bit means you can uses ES6 based on your '.babelrc' settings.
| icon.png          | A purely aesthetic icon for notification messages and to make Sourcetree project listings easier to identify.
| package.json      | Used for Node settings and to install dependancies mainly for Gulp tasks.
| package-lock.json | Basically the same thing as `composer.lock`, only for Node packages instead.
