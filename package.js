Package.describe({
  name: 'daoli:hallo',
  version: '1.1.1',
  summary: 'Hallo.js (the simplest web editor imaginable) for Meteor',
  git: 'https://github.com/daoli/hallo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use(['jquery', 'mrt:rangy', 'mizzao:jquery-ui']);
  api.imply(['mrt:rangy', 'mizzao:jquery-ui']);

  api.addFiles('dist/hallo.js');
});
