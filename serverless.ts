import type { AWS } from '@serverless/typescript';
import custom from './sls/custom';
import provider from './sls/provider';
import functions from './sls/functions';

const serverlessConfiguration: AWS = {
  service: 'gary-booking-app',
  variablesResolutionMode: '20210326',
  plugins: [],
  package: {
    individually: true,
    excludeDevDependencies: true,
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
