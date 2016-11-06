var vows 			= require('vows'),
	assert			= require('assert'),
	lambdaWrapper	= require('lambda-wrapper')
	nock			= require('nock')
	dotenv			= require('dotenv').config();

var cronSlackHandler = require('../src/slack.js');
var handler = lambdaWrapper.wrap(cronSlackHandler, {
	handler: 'notify'
});

var slack = nock(process.env.SLACK)
				.post(process.env.WEBHOOK)
				.reply(200, 'ok');

module.exports = function(suite) {
	suite.addBatch({
		"post to slack": {
			topic: function() {
				handler.run({
					http_method: 'get',
				}, this.callback);
			}, 
			"runs": function (err, result) {
				assert.deepEqual(result, {
					message : 'Slack message sent'
				});
			}
		}
	});
}