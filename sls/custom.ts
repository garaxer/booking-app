import type { AWS } from '@serverless/typescript';

const custom: AWS['custom'] = {
  functions: {
    functionPrefix: '${self:service}-${self:provider.stage}',
  },
  prune: {
    automatic: true,
    number: 3,
  },
};

export default custom;
