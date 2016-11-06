var vows = require('vows');

var suite = vows.describe('Post to Slack');

require('./slack')(suite);

module.exports.cron = suite;