var concat = require('concat-files');

concat([
  'header.js',
  'states/attack.js',
  'states/hero_adventure.js',
  'states/idle.js',
  'states/trainTroops.js',
  'states/free_gold.js',
  'fightlands.js',
], 'concated.js', function(err) {
  if (err) throw err
  console.log('done');
});
