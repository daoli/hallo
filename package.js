Package.describe({
  name: 'daoli:hallo',
  version: '1.1.1_3',
  summary: 'Hallo.js (the simplest web editor imaginable) for Meteor',
  git: 'https://github.com/daoli/hallo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use(['jquery', 'mrt:jquery-ui@1.9.2'], 'client');

  api.addFiles('lib/rangy/rangy-core.js', 'client');
  api.addFiles('lib/hallo/hallo.js', 'client');
});
