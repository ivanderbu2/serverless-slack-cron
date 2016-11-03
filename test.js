'use strict';

const handler = require('./handler');

handler.run(null, null, (err, output) => {
	console.log(output);
});