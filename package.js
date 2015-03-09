Package.describe({
  name: '3stack:mongo-sequence',
  version: '0.0.1',
  summary: 'A simple sequence system - where you can store multiple named sequences on a parent object',
  git: 'https://github.com/3stack-software/meteor-mongo-sequence',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0.3');
  api.use('mongo');
  api.export('sequence');
  api.addFiles('sequence-client.js', 'server');
  api.addFiles('sequence-server.js', 'client');
});
