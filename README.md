<a ref="https://github.com/rafay-ds/FTD_FLOW/">
  <img src="https://ftd.flowsoftware.ky/images/FTD_Blue_logo.png" align="right" />
</a>

# First Time Depositor (FTD)
> FTD is a KYC Product. If someone (Affiliate of FTD) wants their users to be verified they can use FTD to do so. FTD will be integrated on Affiliate's sites, and their users will be redirected to FTD with a unique Request ID.<br>

In order to complete understanding of FTD, you must need to read & understand API Documentation as follow. After that you can go through project documentation & start the development.
> <a href="https://api-ftd.flowsoftware.ky/"><strong>Explore the API documentation »</strong></a>

Check the FTD on Development Environment:
> <a href="https://dev-ftd.flowsoftware.ky/">Hands-on Development Environment</a><br>

Check the Demo Video of FTD:
> <a href="https://drive.google.com/file/d/1XNp7LdoSeLy4Dcz_RW5LZkZf3PpnDOvO/view?usp=sharing">View Demo</a>

<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
        <a href="#directory-structure">Directory Structure</a>  
    </li>
    <li>
      <a href="#how-it-works">How it Works</a>
      <ul>
        <li><a href="#authentication">Authentication</a>
        <li><a href="#get-verification-url">Get Verification URL</a>
        <li><a href="#verify-verification-url">Verify Verification URL</a>
      </ul>
    </li>
    <li>
      <a href="#api-endpoints">API Endpoints</a>
    </li>
    <li>
      <a href="#third-party-integration">Third Party Integration</a>
      <ul>
        <li>
          <a href="#scrive">Scrive</a>
          <ul>
            <li><a href="#norwegian-bank-id">Norwegian Bank ID</a></li>
            <li><a href="#swedish-bank-id">Swedish Bank ID</a></li>
            <li><a href="#finnish-ftn">Finnish FTN</a></li>
            <li><a href="#dutch-idin">Dutch iDIN</a></li>
          <ul>
        </li>
      </ul>
    </li>
    <li><a href="notes">Notes</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
If some affiliate want their users to get verified against some particular action, they will redirect their users to FTD with a unique Request ID, callback and redirect URLs.
    
> *Purpose of Request ID is to differentiate the request (user), User will be redirected to redirect URL with success and fail case. Callbacks will be sent to Callback URL*

1. Affiliate will hit FTD endpoint *([see documentation](https://api-ftd.flowsoftware.ky))* with provided email address and password to get token.
2. After getting token, they will send us unique request id, callback url and redirect url to get the verification url.
3. Affiliate will redirect their users to the URL they get in response of point 2. In this screen user will fill a form to start the verification. After filling the form user will be redirected to verification page (from where user can choose verification method).
4. After verification process, user will be redirected to the redirect url with success and fail case.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Vue.js](https://vuejs.org/)
* [Laravel](https://laravel.com)
* [Vuetify](https://vuetifyjs.com/en/)
* [Postgres](https://www.postgresql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

* Install brew<br>
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
  
* Install Composer<br>
  ```
  brew install composer
  ```
  
* Install [Postgres](https://www.postgresql.org/)

### Installation

1. Clone the repository from git.<br>
   ```
   git clone https://github.com/Developers-Studio-Limited/FTD_v2.git
   ```
  
   *Open the project in any IDE (Visual Studio Code).*
  
2. Create a .env file in a project<br>
  
   ```
   APP_NAME=Laravel
   APP_ENV=local
   APP_KEY=
   APP_DEBUG=true
   APP_URL=http://localhost

   LOG_CHANNEL=stack
   LOG_DEPRECATIONS_CHANNEL=null
   LOG_LEVEL=debug

   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel
   DB_USERNAME=root
   DB_PASSWORD=

   BROADCAST_DRIVER=log
   CACHE_DRIVER=file
   FILESYSTEM_DRIVER=local
   QUEUE_CONNECTION=sync
   SESSION_DRIVER=file
   SESSION_LIFETIME=120

   MEMCACHED_HOST=127.0.0.1
   
   REDIS_HOST=127.0.0.1
   REDIS_PASSWORD=null
   REDIS_PORT=6379

   MAIL_MAILER=smtp
   MAIL_HOST=mailhog
   MAIL_PORT=1025
   MAIL_USERNAME=null
   MAIL_PASSWORD=null
   MAIL_ENCRYPTION=null
   MAIL_FROM_ADDRESS=null
   MAIL_FROM_NAME="${APP_NAME}"

   AWS_ACCESS_KEY_ID=
   AWS_SECRET_ACCESS_KEY=
   AWS_DEFAULT_REGION=us-east-1
   AWS_BUCKET=
   AWS_USE_PATH_STYLE_ENDPOINT=false

   PUSHER_APP_ID=
   PUSHER_APP_KEY=
   PUSHER_APP_SECRET=
   PUSHER_APP_CLUSTER=mt1

   MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
   MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
   ```
  
3. Createa a new file `dev_constants.php` under config/constants folder<br>
   ```
   <?php
      $dev_constants = [
        'CONSTNAME'            => 'dev',
        'DB_CONNECTION'        => 'pgsql',
        'DB_HOST'              => 'localhost',
        'DB_PORT'              => '5432',
        'DB_DATABASE'          => '',
        'DB_USERNAME'          => '',
        'DB_PASSWORD'          => '',
        'FTD_EMAIL'            => '',
        'FTD_PASSWORD'         => '',
        'JWT_SECRET'           => '',
        'SLACK_URL'            => '',
        'SLACK_HEADERS'        =>  ['Content-type: application/json'],
        'FRONTEND_FTD_URL'     => '',
        'BACKEND_FTD_URL'      => '',
        'SCRIVE_URL'           => '',
        'SCRIVE_TOKEN'         => '',
    ];
   ```
   Createa a new file `test_constants.php` under config/constants folder<br>
   ```
   <?php
      $dev_constants = [
        'CONSTNAME'            => 'test',
        'DB_CONNECTION'        => 'pgsql',
        'DB_HOST'              => 'localhost',
        'DB_PORT'              => '5432',
        'DB_DATABASE'          => '',
        'DB_USERNAME'          => '',
        'DB_PASSWORD'          => '',
        'FTD_EMAIL'            => '',
        'FTD_PASSWORD'         => '',
        'JWT_SECRET'           => '',
        'SLACK_URL'            => '',
        'SLACK_HEADERS'        =>  ['Content-type: application/json'],
        'FRONTEND_FTD_URL'     => '',
        'BACKEND_FTD_URL'      => '',
        'SCRIVE_URL'           => '',
        'SCRIVE_TOKEN'         => '',
    ];
   ```
   Createa a new file `production_constants.php` under config/constants folder<br>
   ```
   <?php
      $dev_constants = [
        'CONSTNAME'            => 'test',
        'DB_CONNECTION'        => 'pgsql',
        'DB_HOST'              => 'localhost',
        'DB_PORT'              => '5432',
        'DB_DATABASE'          => '',
        'DB_USERNAME'          => '',
        'DB_PASSWORD'          => '',
        'FTD_EMAIL'            => '',
        'FTD_PASSWORD'         => '',
        'JWT_SECRET'           => '',
        'SLACK_URL'            => '',
        'SLACK_HEADERS'        =>  ['Content-type: application/json'],
        'FRONTEND_FTD_URL'     => '',
        'BACKEND_FTD_URL'      => '',
        'SCRIVE_URL'           => '',
        'SCRIVE_TOKEN'         => '',
    ];
   ```
  
4. After creating the .env open the terminal and move to the project directory and run the following command to install the vendor file.<br>
   ```
   composer install
   ```
  
5. Install Node Modules<br>
   ```
   npm install
   ```
  
6. Then run the following command to generate the project key. <br />
   ```
   php artisan key:generate
   ```
  
7. Serve the project<br />
   ```
   npm run dev
   ```
  
   ```
   php artisan serve
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

# Directory Structure
```
    root
    |-- app
         |-- Console
               |-- (Jobs will be here)
         |-- Http
               |-- Controllers
                      |-- (Main Logic will be here)
               |-- Middleware
                      |-- (Middleware will be here)
         |-- Models
               |-- (Models will be here)
    |-- database
           |-- migrations
                   |-- (Database Migrations will be here)
    |-- resources
          |-- js
               |-- components
                   |-- (Vue Components will be here)
               |-- plugins
                   |-- (Vue Plugins will be here)
               |-- router
                   |-- (Router will be here)
               |-- views
                   |-- (Views will be here)
          |-- views
                |-- auth
                     |-- passwords
                |-- layouts
    |-- routes
           |-- (API Endpoints will be here)
```
    
# How it Works
## Authentication:

Affiliate will enter the email address and password to get the token. If the email address and password is correct, affiliate will get token in response, else they will get error `invalid_credentials`. For Authentication we are using JWT, so you need to have knowledge of JWT Authentication.
  
```
  Following Controllers and models are being used in Authentication Functionality:
  
  #### Controller: **AuthController**
```

## Get Verification URL:

Affilate will hit FTD endpoint to get verification URL, and to get the URL they will send us following things: `request_id`, `redirect_url`, `callback_url`. The `request_id` must be unique, and this URL is valid only for 10 minutes. Affiliate will redirect their particular user to this URL. Because this URL will contain request_id.

```
  Following Controller and models are being used in Verification URL:
  
  #### Controller: GenerateUrlController.php
  #### Model: VerificationRequest
```

## Verify Verification URL:
  
When user hit the Verification URL, FTD will first check the status of the URL, either the URL is valid or not, or if the request_id matched with the one store in our database. 

```
  Following Controller and models are being used in Verification URL:
  
  #### Controller: GenerateUrlController.php
  #### Model: VerificationRequest
```

# API Endpoints:

<a href="https://api-ftd.flowsoftware.ky/"><strong>Explore the API documentation »</strong></a>

# Third Party Integration

FTD is using following third parties integrations:
1. Scrive

## Scrive
  
FTD is using methods of Scrive in FTD and their method names are as follow:
| Verification Name | Method                    |
| ----------------- | ------------------------- |
| Norwegian Bank ID | <strong>noBankID</strong> |
| Swedish Bank ID   | <strong>seBankID</strong> |
| Finnsih FTN       | <strong>fiTupas</strong>  |
| Dutch iDIN        | <strong>nlIDIN</strong>   |
  
### Norwegian BankID

Visit this [link](https://ra-preprod.bankidnorge.no/#/generate) to create `customer_id` for Norwegian Bank ID or you can use test details below. When you get the customer id proceed with Norwegian Bank ID. Verification will start and user need to enter following details:

#### Norwegian BankID Test Details
|    Name     |           Details            |
| ----------- | ---------------------------- |
| Customer ID | <strong>69075797109</strong> |
| Password    | <strong>password</strong>    |
| OTP         | <strong>otp</strong>         |

### Swedish Bank ID

For Swedish Bank ID, we need to create personal number from this [link](https://www.personnummer.nu/), after getting personal bank ID log in to the account using personal number, doing this the account will be activated. We need to download the Swedish Bank ID app for verification.  
  
### Finnsih FTN

We can get the details of Finnish Bank ID from following [link](https://www.nets.eu/developer/e-ident/eids/Pages/testusers.aspx), after getting the details user will proceed with verification.
  
### Dutch iDIN

We can get the details of Dutch iDIN from the following [link](https://www.nets.eu/developer/e-ident/eids/Pages/testusers.aspx), after getting the details user will proceed with verification.  
  
<p align="right">(<a href="#top">back to top</a>)</p>

## Environment URL(s):

Development URL:
```
https://dev-ftd.flowsoftware.ky
```

Staging URL:
```
https://test-ftd.flowsoftware.ky
```
  
  <p align="right">(<a href="#top">back to top</a>)</p>

## Notes

In this version of KYC, the affiliate will register themselve on FTD and provide us with the logo images, name, theme color, when the affiliate will send their users to FTD, logo and theme will be according to the provided items. *(FTD is not using their own logo on page of Verification)* And when the verification starts FTD have hosted page, in this page user can do their verification.
    
This is the extended version of [FTD](https://github.com/Developers-Studio-Limited/FTD). In Previous FTD we were using many methods like:

1. OTP
2. Ekata
3. IDology
4. Signicat
5. Yoti
6. BankID SE
    
For further details, please visit above mentioned repo.

<p align="right">(<a href="#top">back to top</a>)</p>
