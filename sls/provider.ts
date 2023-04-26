const provider: any = {
  name: 'aws' as const,
  profile: 'personal',
  stage: "${opt:stage, 'local'}",
  region: "${opt:region, 'ap-southeast-2'}",
  runtime: 'nodejs16.x',
  lambdaHashingVersion: '20201221' as const,
  versionFunctions: false,
  environment: {
    PROFILE: '${self:custom.profile}',
    STAGE: '${self:provider.stage}',
  },
  iamRoleStatements: [],
};

export default provider;
