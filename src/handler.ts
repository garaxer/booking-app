import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { swagger } from './swagger';
import { VersioningType } from '@nestjs/common';

let server: Handler;

async function bootstrap(isServerless?: boolean): Promise<Handler> {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });

  swagger(app, !isServerless || process.env.PROFILE === 'local');

  app.enableCors();

  if (isServerless) {
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();

    return serverlessExpress({ app: expressApp });
  } else {
    await app.listen(3000);
  }
}

// development is for running nest on its own. local is for serverless offline. Could also use env.IS_OFFLINE
if (process.env.PROFILE === 'development') bootstrap();

export const execute: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap(true));
  return server(event, context, callback);
};

// TODO: Fix so openapi can be opened from lambda
// {
//     "errorType": "Error",
//     "errorMessage": "EROFS: read-only file system, open '/var/task/openapi.json'",
//     "code": "EROFS",
//     "errno": -30,
//     "syscall": "open",
//     "path": "/var/task/openapi.json",
//     "stack": [
//         "Error: EROFS: read-only file system, open '/var/task/openapi.json'",
//         "    at Object.openSync (node:fs:590:3)",
//         "    at writeFileSync (node:fs:2202:35)",
//         "    at swagger (/var/task/src/swagger.js:19:37)",
//         "    at bootstrap (/var/task/src/handler.js:20:27)",
//         "    at async Runtime.execute [as handler] (/var/task/src/handler.js:33:63)"
//     ]

/* old handler */

// import { NestFactory } from '@nestjs/core';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import { AppModule } from './app.module';
// import express from 'express';
// import http from 'serverless-http';
// import { APIGatewayProxyEvent, Callback, Context, Handler } from 'aws-lambda';

// let server: Handler;

// async function bootstrap(): Promise<Handler> {
//   const expressApp = express();
//   const app = await NestFactory.create(
//     AppModule,
//     new ExpressAdapter(expressApp),
//   );
//   //   swagger(app); // only locally
//   app.enableCors();
//   await app.init();
//   return http(expressApp);
// }

// export const execute: Handler = async (
//   event: APIGatewayProxyEvent,
//   context: Context,
//   callback: Callback,
// ) => {
//   server = server ?? (await bootstrap());
//   return server(event, context, callback);
// };

/*old main.ts */

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { swagger } from './swagger';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   swagger(app);

//   await app.listen(3000);
// }
// bootstrap();
