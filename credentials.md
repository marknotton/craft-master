# Project Credentials

## Environments

| -                 | Production                          | Staging                                    
|:------------------|:------------------------------------|:------------------------------------
| Domain            | http://www.website.uk               | http://staging.website.uk           
| Username          | ***                                 
| Password          | 5xxxxxxx                            

## SSH / FTP

| -                 | Production                          | Staging                                    
|:------------------|:------------------------------------|:-------------------------------------
| Username          | production@website.uk               | staging@website.uk                  
| Password          | ***                                 | ***                               
| Host              | 201.xxx.xxx.xx                      
| Command           | `ssh root@201.xxx.xxx.xx`           

## Databases

| -                 | Production                          | Staging                               
|:------------------|:------------------------------------|:--------------------------------------
| Name              | website_production                  | website_staging                       
| Username          | website_production                  | website_staging                       
| Password          | ***                                 | ***                                   
| Host              | 206.xxx.xxx.xx                        

## Deployer

| -                 | Production                          | Staging                                
|:------------------|:------------------------------------|:--------------------------------------
| Branch            | production                          | staging                                
| Command           | `dep deploy production`             | `dep deploy staging`                   

## Hosting

| -                 | Production                          | Staging                                
|:------------------|:------------------------------------|:-------------------------------------
| Provider          | Digital Ocean                       | Digital Ocean                                
| Username          | root                                | root                  
| Password          | ***                                 | ***    
| Website           | http://www.website.uk/whm           | http://staging.website.uk/whm
