Example of creating a nest app from scratch with openapi

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


### Running
`npm run start:dev`

### Deploying
Check everything is running fine using `npm run offline` (not the base url doesn't work with serverless offline e.g '/' but will when deployed)
then `npm run deploy:fresh` or `npm run deploy` if updating.

## Swagger
After running the application, openapi.json will get created. You can then generate types from that using `npm run gen-api-client` to use in a front end application.
You can also head to this url to look at the swagger docs.
http://localhost:3333/docs/


### Plan
Goal: Have a sellable generic booking model, A user can create a service and a customer can make bookings against the service. Front end will show one service at a time serviceName/book
1. Have bookings and users. Can hardcode time slots and can show which ones have bookings
2. Service and timeslots, 1 service has many time slots which will have many bookings.
3. A business will have many services.

```mermaid
erDiagram
    SCHEDULES ||--o{ SERVICE : hasMany
    SCHEDULES {

    }
    SERVICE {
        id string
        serviceType string
        times DateList
        sections stringList
    }

    SERVICE ||--o{ TIMESLOTS : hasMany
    SERVICE {
        id string
        duration number
        serviceType string
        sections stringList
        createdAt Date
        updatedAt Date
    } 
    TIMESLOTS ||--o{ BOOKINGS : creates
    TIMESLOTS {
        id string
        time Date
    }
    BOOKINGS {
        time Date
        selectedMenuOptions List
        numOfPeople number
        customerNotes string
        managerNotes string
        created_at Date
        updated_at Date
    }
    CUSTOMER ||--o{ BOOKINGS : places
    CUSTOMER {
        id string PK
        firstName string
        lastName string
        email string
        phone string
    }
```


### Todos
0. pass auth0 params in -- maunally add to ssm, setup permissions, add key to provder.ts
1. database

10. domain name.
