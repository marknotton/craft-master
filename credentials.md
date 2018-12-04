# Credentials 🔧

## Craft CMS

| -                                      | Production                             | Staging                                | Development          
|:---------------------------------------|:---------------------------------------|:---------------------------------------|:---------------------------------------
| Admin                                  | www.website.com/admin                  | staging.website.com/admin              | www.website.loc/admin
| Username                               | yello                                  | yello                                  | yello                        
| Password                               | 5xxxxxxK                               | 5xxxxxxK                               | 5xxxxxxK            

## Environments

| -                                      | Production                             | Staging                                | Development          
|:---------------------------------------|:---------------------------------------|:---------------------------------------|:---------------------------------------
| Domain                                 | www.website.com                        | staging.website.com                    | www.website.loc
| IP Address                             | 192.168.0.0                            | 192.168.0.0                            | 192.168.0.93
| Control Panel                          | [WHM](https://)                        | [WHM](https://)                        | -
| Username                               | -                                      | -                                      | -                        
| Password                               | ***                                    | ***                                    | -                            

## SSH / FTP

| -                                      | Production                             | Staging                                | Development          
|:---------------------------------------|:---------------------------------------|:---------------------------------------|:---------------------------------------
| Host                                   | 206.xxx.xxx.xx                         | 206.xxx.xxx.xx                         | -                              
| Username                               | -                                      | -                                      | -                                     
| Password                               | ***                                    | ***                                    | -                            
| Port                                   | 822                                    | 822                                    | -
| Protocol                               | SFTP                                   | SFTP                                   | -
| Command                                | `ssh root@192.168.0.xxx -p 822`        | `ssh root@192.168.0.xxx -p 822`        | -

## Databases

| -                                      | Production                             | Staging                                | Development          
|:---------------------------------------|:---------------------------------------|:---------------------------------------|:---------------------------------------
| Host                                   | 127.0.0.1                              | 127.0.0.1                              | 192.168.0.93  
| Name                                   | -                                      | -                                      | -     
| Username                               | -                                      | -                                      | root                
| Password                               | ***                                    | ***                                    | ***           
| Prefix                                 | *empty*                                | *empty*                                | *empty*          
| Port                                   | *empty*                                | *empty*                                | *empty*

## Deployer

| -                                      | Production                             | Staging                                | Development          
|:---------------------------------------|:---------------------------------------|:---------------------------------------|:---------------------------------------
| Branch                                 | production                             | staging                                | -
| Command                                | `dep deploy production`                | `dep deploy staging`                   | -
| Password                               | ***                                    | ***                                    | -

## Hosting Company

| -                                      | Production                             | Staging                                | Development          
|:---------------------------------------|:---------------------------------------|:---------------------------------------|:---------------------------------------
| Company                                | Digital Ocean                          | Heart                                  | -           
| Username                               | -                                      | -                                      | -       
| Password                               | ***                                    | ***                                    | -        
| Website                                | [Admin](https://)                      | [Admin](https://)                      | -
