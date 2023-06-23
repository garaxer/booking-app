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

  if (isServerless) {
    await app.init();
    const expressApp = app.getHttpAdapter().getInstance();

    return serverlessExpress({ app: expressApp });
  } else {
    swagger(app); // only locally
    await app.listen(3000);
  }
}

if (process.env.PROFILE === 'development') bootstrap();

export const execute: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap(true));
  return server(event, context, callback);
};
