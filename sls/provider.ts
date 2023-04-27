const provider: any = {
  name: 'aws' as const,
  profile: "${opt:profile, 'personal'}", // the aws profile to deploy with
  stage: "${opt:stage, 'local'}",
  region: "${opt:region, 'ap-southeast-2'}",
  runtime: 'nodejs16.x',
  environment: {
    PROFILE: '${self:provider.profile}',
    STAGE: '${self:provider.stage}',
  },
  iamRoleStatements: [],
};

export default provider;
