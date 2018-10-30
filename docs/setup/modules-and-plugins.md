# Modules & Plugins 🔧

## Modules
Modules are managed by the *config/app.php* file found on all Craft 3 projects. Installation is controlled via the *composer.json* file. Unlike plugins; modules are essentially loaded independently from Craft. Remember, Craft is essentially just a module.

### + Helpers

[Full Documentation](https://github.com/marknotton/craft-module-helpers) *(coming soon)*

This module bundles together many non-invasive optional twig extensions, filters, functions, services and more. The Helpers module attempts to add a bunch on functionality to the overall experience; both backend and frontend. All of the actions that are triggered on page load can be managed in the config/settings.php or config/helpers.php files. This includes theming the CMS, defining image transforms, setting directory paths, and other useful quick checks that are available globally.

Using the power of custom 'package types', Helpers module is kept up-to-date via Composer. In a similar way to how vendor dependencies are managed, this module does the same. So any changes to this module will be overwritten with each Composer update. If you want to contribute or fix anything for this Module, you'll have to create a [Pull Request via Github](https://github.com/marknotton/craft-module-helpers/pulls)

#### Helpers Config file

The */config/helpers.php* file is used to manage what parts of the Helpers module you actually want to turn include or exclude. By default, everything is used.  

#### Settings Config file

The */config/settings.php* file allows you set generic variables that will be defined on each page load. This is to avoid the need to manage a range of settings at the top of your layout templates. These settings can be tailored to your environment and are accessible from plugins and modules too.

##### PHP
```php
Helpers::$instance->services->getSettings()
```
#####  Twig
```twig
{{ helpers.getSettings() }}
```

### + Template Maker

Generate twig templates

### + General

This module has been included as a sort-of starting point for a bespoke module for this specific project. This boilerplate has been generated from the [Plugin Factory](https://pluginfactory.io/) and modified to cleanup and rectify common issues. As of writing this (June 2018), the Plugin Factory would not create the correct controller references. Also, it will suffix all classes, files, and instances with the word 'module'. Which I find to be unnecessary and ugly. The General module is a bare-bones example of a module.

## Plugins
Plugins are managed by the Plugin Store and may have settings available via the CMS.

| Name                    | Vendor                             | Version | Docs                                                                                   | Description   
|------------------------ | ---------------------------------- | ------- | -------------------------------------------------------------------------------------- | ----------------------------
| Redactor                | craftcms/redactor                  | 2.0.1   | [Link](https://imperavi.com/redactor/docs/)                                            | WYSIWYG Text Editor
| Minify                  | nystudio107/craft-minify           | 1.2.6   | [Link](https://github.com/nystudio107/craft-minify)                                    | A simple plugin that allows you to minify blocks of HTML, CSS, and JS inline in Craft CMS templates
| Agent                   | marknotton/agent                   | 1.0.1   | [Link](https://github.com/marknotton/craft-plugin-agent)                               | Query the server-side information from the users agent data.
| SEO                     | ether/seo                          | 3.2     | [Link](https://github.com/ethercreative/seo)                                           | Basic SEO management
| Super Table             | verbb/super-table                  | 2.0.7   | [Link](https://verbb.io/craft-plugins/super-table/docs/get-started/installation-setup) | Advanced Matrix-like table generator (allows sub-matrixes)
| Table Maker             | supercool/tablemaker               | 2.0.1   | [Link](https://github.com/supercool/tablemaker)                                        | A user-definable table field type for Craft CMS

## Paths

When including Javascript Node Modules, you tend to include scripts (normally into your core array). Here is a list of common script paths you may use.

| Name                            | Path               
|-------------------------------- | ----------------------------------
| Babel                           | `node_modules/babel-polyfill/dist/polyfill.js`
| Sticky Events Listener          | `node_modules/sticky-events-listener/sticky-events.js`
| jQuery Pluginify                | `node_modules/jquery-pluginify/pluginify.js`
| Element Iterator                | `node_modules/element-iterator/iterator.js`
| Plyr                            | `node_modules/plyr/dist/plyr.js`
| Hammer JS                       | `node_modules/hammerjs/hammer.js`
| GreenSock GSAP                  | `node_modules/gsap/src/uncompressed/TweenMax.js`
| GreenSock Draggable             | `node_modules/gsap/umd/Draggable.js`
| On Window Resize                | `node_modules/on-window-resize/on-window-resize.js`
| Transition End Listener         | `node_modules/transition-end-listener/transition-end-listener.js`
| InView                          | `node_modules/in-view/dist/in-view.min.js`
| jQuery Autocomplete             | `node_modules/devbridge-autocomplete/dist/jquery.autocomplete.js`
| Agent                           | `vendor/marknotton/agent/src/assets/scripts/agent.js`
| GreenSock GreenClub Throw Props | `modules/helpers/src/assets/scripts/gsap/plugins/ThrowPropsPlugin.js`
| Fetcher                         | `modules/helpers/src/assets/scripts/classes/fetcher.js`
