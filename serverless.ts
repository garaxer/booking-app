import type { AWS } from '@serverless/typescript';
import custom from './sls/custom';
import provider from './sls/provider';
import functions from './sls/functions';

const serverlessConfiguration: AWS = {
  service: 'gary-nest-booking-app',
  frameworkVersion: '3',
  plugins: ['serverless-plugin-typescript'],
  package: {
    individually: true,
    excludeDevDependencies: true,
    patterns: ['!libs/**'],
  },
  custom,
  provider,
  resources: {
    Conditions: Object.assign({}),
    Outputs: Object.assign({}),
    Resources: Object.assign({}),
  },
  functions,
};

module.exports = serverlessConfiguration;
