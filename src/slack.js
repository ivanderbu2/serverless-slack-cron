'use strict';

require('dotenv').config();

const request = require('request');

module.exports.notify = function(event, context, cb) {

	var completeWebhook =  process.env.SLACK.concat( process.env.WEBHOOK );

	request.post( completeWebhook, {
    form: { 
      payload: '{"text": "Now is: '+ new Date() +'"}'
    } },
    (err, response, body) => {
      if (! err) {
       return cb(null, { message: 'Slack message sent' })
      } else {
        return cb(true, err);
      }
    }
  );

};