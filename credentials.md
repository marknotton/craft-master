# Project Credentials

## Environments

| -                                      | Production                          | Staging                                    
|:---------------------------------------|:------------------------------------|:------------------------------------
| Domain                                 | http://www.website.uk               | http://staging.website.uk           
| IP Address                             | 201.xxx.xxx.xx                      | 201.xxx.xxx.xx                             
| Username                               | ***                                 | ***
| Password                               | 5xxxxxxx                            | 5xxxxxxx

## SSH / FTP

| -                                      | Production                          | Staging                                    
|:---------------------------------------|:------------------------------------|:-------------------------------------
| Host                                   | 201.xxx.xxx.xx                      | 201.xxx.xxx.xx                             
| Username                               | production@website.uk               | staging@website.uk                  
| Password                               | ***                                 | ***                               
| Command                                | `ssh root@201.xxx.xxx.xx`           | `ssh root@201.xxx.xxx.xx`
| Port                                   | 822                                 | 882   
| Protocol                               | FTP                                 | FTP    

## Databases

| -                                      | Production                          | Staging                               
|:---------------------------------------|:------------------------------------|:--------------------------------------
| Host                                   | 127.0.0.1                           | 206.xxx.xxx.xx                        
| Name                                   | website_production                  | website_staging                       
| Username                               | website_production                  | website_staging                       
| Password                               | ***                                 | ***                                   
| Prefix                                 | *empty*                             | *empty*                               
| Port                                   | *empty*                             | *empty*                               

## Deployer

| -                                      | Production                          | Staging                                
|:---------------------------------------|:------------------------------------|:--------------------------------------
| Branch                                 | production                          | staging                                
| Command                                | `dep deploy production`             | `dep deploy staging`                   

## Hosting

| -                                      | Production                          | Staging                                
|:---------------------------------------|:------------------------------------|:-------------------------------------
| Provider                               | Digital Ocean                       | Digital Ocean                                
| Username                               | root                                | root                  
| Password                               | ***                                 | ***    
| Website                                | http://www.website.uk/whm           | http://staging.website.uk/whm
