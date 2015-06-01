Package.describe({
  name: 'daoli:hallo',
  version: '1.1.1_6',
  summary: 'Homebrew Hallo.js for Meteor',
  git: 'https://github.com/daoli/hallo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use(['jquery'], 'client');
  api.use(['linto:jquery-ui'], 'client');
  api.use(['sewdn:rangy'], 'client');
  api.use(['twbs:bootstrap'], 'client');
  api.use(['fortawesome:fontawesome'], 'client');

  api.addFiles(['lib/hallo.js'], 'client');
});
