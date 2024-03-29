import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'graceful-fs';
import path from 'path';

export function swagger(app: INestApplication) {
  const apiSwaggerOptions = new DocumentBuilder()
    .setTitle('Booking api')
    .setDescription('The API for booking app')
    .setVersion('1.0.0')
    .build();
  const apiSwaggerDocs = SwaggerModule.createDocument(app, apiSwaggerOptions);
  SwaggerModule.setup('/docs', app, apiSwaggerDocs);

  // create openapi.json
  const outputPath = path.resolve(process.cwd(), 'openapi.json');
  writeFileSync(outputPath, JSON.stringify(apiSwaggerDocs, null, 2), {
    encoding: 'utf8',
  });
}
