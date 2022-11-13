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

2. Optional, add swagger and openapi.

3. Add auth0
$ nest g module booking
$ nest g controller booking
$ nest g service booking

Following this guide, we set up auth0: https://auth0.com/blog/developing-a-secure-api-with-nestjs-adding-authorization/

1. Create new api. (specifiy audience/Identifier e.g https://menu-api.demo.com)
Add new .env files
AUTH0_ISSUER_URL=https://<AUTH0-TENANT-NAME>.auth0.com/
AUTH0_AUDIENCE=https://menu-api.demo.com