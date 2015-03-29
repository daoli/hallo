Package.describe({
  name: 'daoli:hallo',
  version: '1.1.1',
  summary: 'Hallo.js (the simplest web editor imaginable) for Meteor',
  git: 'https://github.com/daoli/hallo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use(['jquery'], 'client');
  api.use(['mrt:rangy@0.0.1', 'mrt:jquery-ui@1.9.2']);
  api.imply(['mrt:rangy', 'mrt:jquery-ui']);

  api.addFiles('dist/hallo.js');
});
