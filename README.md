# Craft Master

## Introduction

### Minimum Requirements

| Service   | Version
| --------- | --
| NPM       | 6.4.1
| Node JS   | 10.0.0
| Composer  | 1.6.3
| PHP       | 7.0
| mySQL     | 5.6
| Craft CMS | 3.0.22

### Set up
Once you've pulled the latest commit down. You should only need to run one command to get all dependancies installed locally (this also runs `npm install` automatically):

`composer install`

You will need to occasionally run `composer update` and `npm update` if there are any changes to the *composer.json* or *package.json* files. If you experience any issues, you can try manually installing NPM packages using this command `npm install`

Once your local server environment is set up (using Mamp), you should only need to run a `gulp serve` to get going.

### Database Connection

A `.env` found in the project root contains database credentials. This file should never be committed to the repo. Which is why new installations of this project may not work out of the box. You can create a new one by referring to the `.env.example` as a template.

You may run into an issue where your Security Key is not defined in your `.env` file. Open up you're Command Line (Terminal) and locate your project directory. Then run this command: `./craft setup/security-key`. This will update your security key. For more information refer to the [official guide](https://docs.craftcms.com/v3/installation.html#step-3-set-a-security-key). 

## Git
Following best-practice, you should never work directly on the `master` branch. The master branch is reserved as a sort-of clone of exactly what's on the live production site. Instead, you must work from another branch (staging) and pull-request these into the `master` branch when your changes are done.

### Credentials

In an effort to keep all essential account credentials secure and in one relevant place, please refer and update the 'credentials.md' file in the root of this project.
