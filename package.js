Package.describe({
  name: 'hxx:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display application errors to the user',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hxx/meteor-errors',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['hxx:errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});

Package.onTest(function (api) {
  api.use('hxx:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.addFiles('errors_tests.js', 'client');
});
