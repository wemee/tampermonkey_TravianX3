var concat = require('concat-files');

concat([
  'header.js',
  'lib/libs.js',
  'states/idle.js',
  'states/adventures.js',
  'states/build.js',
  'states/upgradeRes.js',
  'travian.js',
], 'concated.js', function(err) {
  if (err) throw err
  console.log('done');
});
