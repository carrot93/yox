Package.describe({
  name: 'shjiaye:yox',
  version: '0.1.0',
  summary: 'yoxjs for Meteor',
  git: 'https://github.com/yoxjs/yox',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'typescript',
  use: ['barbatus:typescript-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.5');

  api.use('isobuild:compiler-plugin');
  api.use('barbatus:typescript-compiler');

  api.imply('modules');

  api.imply('barbatus:typescript-runtime');
  api.addAssets('src/Yox.ts','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shjiaye:yox');

  api.addFiles('tests/runtime-tests.ts', 'client');
  api.addFiles('tests/runtime-react-tests.tsx', 'client');
});
