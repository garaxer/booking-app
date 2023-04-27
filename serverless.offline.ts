import type { AWS } from '@serverless/typescript';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseServerless = require('./serverless');

const serverlessConfiguration: AWS = baseServerless;
if (serverlessConfiguration.plugins instanceof Array) {
  serverlessConfiguration.plugins.push('serverless-offline');
}
module.exports = serverlessConfiguration;
