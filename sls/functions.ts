const functions = {
  execute: {
    name: '${self:custom.functions.functionPrefix}-execute',
    handler: 'src/handler.execute',
    timeout: 30,
    environment: {},
    events: [
      {
        http: {
          path: '/',
          method: 'any',
          cors: true,
        },
      },
      {
        http: {
          path: '/{uri+}',
          method: 'any',
          cors: true,
        },
      },
    ],
  },
};

export default functions;
