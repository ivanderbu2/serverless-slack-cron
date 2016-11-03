'use strict';
require('dotenv').config();
const request = require('request');

module.exports.run = (event, context, callback) => {
  
  request.post( process.env.WEBHOOK, {
    form: { 
      payload: '{"text": "Now is: '+ new Date() +'"}'
    } },
    (err, response, body) => {
      if (! err) {
        callback(null, { message: 'Slack message sent', body})
      } else {
        callback(true, err);
      }
    }
  );

};
