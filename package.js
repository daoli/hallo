Package.describe({
  name: 'daoli:hallo',
  version: '1.1.1_4',
  summary: 'Hallo.js (the simplest web editor imaginable) for Meteor',
  git: 'https://github.com/daoli/hallo.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');

  api.use(['jquery'], 'client');

  api.addFiles('lib/rangy/rangy-core.js', 'client');
  api.addFiles([
      'lib/hallo/font/fontawesome-webfont.woff',
      'lib/hallo/font/fontawesome-webfont.ttf',
      'lib/hallo/font/fontawesome-webfont.otf',
      'lib/hallo/css/bootstrap.css',
      'lib/hallo/css/font-awesome.css',
      'lib/hallo/css/hallo.css',
      'lib/hallo/css/jquery-ui-1.8.16.custom.css',
      'lib/hallo/js/jquery-ui-1.10.0.custom.min.js',
      'lib/hallo/js/hallo.js'
    ], 'client');
});
