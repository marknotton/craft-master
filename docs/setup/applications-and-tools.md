# Applications & Tools

## Applications
| Name       | Version | Price | Website                                    | Description                           
| ---------- | ------- | ----- | ------------------------------------------ | ------------
| Atom       | 1.24    | Free  | [Site](https://atom.io/)                   | Atom is a text and source code editor
| Sequel Pro | 1.12    | Free  | [Site](https://www.sequelpro.com/)         | Database management                   
| Mamp Pro   | 4.0.0   | £49   | [Site](https://www.mamp.info/en/mamp-pro/) | Local server environment management   
| Sourcetree | 2.7.1   | Free  | [Site](https://www.sourcetreeapp.com)      | Git repository management

## Tools 🔧
| Name     | Version | Price | Website                          | Description
| -------- | ------- | ----- | -------------------------------- | -----------
| Node.js  | 10.11.0 | Free  | [Site](https://nodejs.org/en/)   | Open source server environment
| Composer | 1.7.2   | Free  | [Site](https://getcomposer.org/) | Composer is a tool for dependency management in PHP
| Deployer | 6.3.0   | Free  | [Site](https://deployer.org/)    | Git deployment

### Node.js Installation Guide

Download and install the latest **"current"** version [here](https://nodejs.org/en/)

### Composer Installation Guide

Using Terminal, `cd` into your users root directory (where Documents, Music, Movies folders are), and enter the following two commands:

`curl -sS "https://getcomposer.org/installer" | php`

`mv composer.phar /usr/local/bin/composer`

Note: If the above fails due to permissions, you may need to run it again with sudo.

To check it's installed fully, enter this to check the version:

`composer -V`

### Deployer Installation Guide

Run the following commands in the console:

`curl -LO https://deployer.org/deployer.phar`

`mv deployer.phar /usr/local/bin/dep`

`chmod +x /usr/local/bin/dep`

To check it's installed fully, enter this to check the version:

`dep -v`

You can deploy by running a command like this:

`dep deploy staging`
