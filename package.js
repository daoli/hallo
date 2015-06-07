Package.describe({
  name: 'daoli:hallo',
  version: '1.1.1_7',
  summary: 'Homebrew Hallo.js for Meteor',
  git: 'https://github.com/daoli/hallo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use(['jquery@1.11.3'], 'client');
  api.use(['linto:jquery-ui@1.0.0'], 'client');
  api.use(['sewdn:rangy@1.3.0'], 'client');
  api.use(['nemo64:bootstrap@3.3.4'], 'client');
  api.use(['fortawesome:fontawesome@4.2.0'], 'client');

  api.addFiles(['lib/hallo.js'], 'client');
});
