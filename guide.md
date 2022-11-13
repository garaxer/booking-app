# NestJS with openapi and auth0, NextJS front end

Starting up create a new nest project
(Steps are in line with commits)

1.  Initiate your nest app and create a module.

```
$ npm i -g @nestjs/cli
$ nest new booking-app
$ nest g module user
$ nest g controller user
$ nest g service user
```

2. Add swagger and openapi.

3. Add auth0
```
$ nest g module booking
$ nest g controller booking
$ nest g service booking
```
Following this guide, we set up auth0: https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authorization/

Create new api. (specifiy audience/Identifier e.g https://menu-api.demo.com)
Add a new .env file: 
`
AUTH0_ISSUER_URL=https://<AUTH0-TENANT-NAME>.auth0.com/
AUTH0_AUDIENCE=https://menu-api.demo.com
`

4. Add nest swagger cli. Adding this allows types to come through automatically to the swagger documentation.

5. Add auth0 configuration.
Now that you have created an api on auth0, create a machine to machine test application so we can test our endpoints. Then open the api and add permissions for that new machine to machine application.

Using the information from the M2M app. 
send a request to https://<AUTH0-TENANT-NAME>.auth0.com/oauth/token
e.g.
https://dev-craig.au.auth0.com/oauth/token
`{
  "client_id": "",
  "client_secret": "",
  "audience": "https://booking.craigscounselling.com",
  "grant_type": "client_credentials"
}`


6. New app.