const axios = require('axios');
const fileHelper = require('./fileHelper');
const request = require('./request');
const config = require('./config');

function getBooking() {
	return axios({
					 method: 'post',
					 url: `${config.apiEndPoint}/v1/traveler/getBooking`,
					 data: request,
					 headers: {
						 'content-type': 'application/json',
						 accept: 'application/json',
						 authorization: `Bearer ${this.apiAccessToken}`
						 //authorization: `Bearer T1RLAQJqQ5M6L8YXn88l9ta690sbgh1p8RBvirrqpC/mSFUYppyc+A+/AACwNAdCI9pYiB+xyvKhvtfCvfNZx231PZcqkMMZnveDmkbinwH8yVKIG9tbsF1KuRpkmNPiBWF0DYx3MCTwxifZI+4I/zaM8/wUJ7ktHbRzhWCAVxk0kAU4yApcPiKdiXkIMDcU7+e/un5RQWdoFtSHMkJNQgZab3kB4xp7Vm2JZnQuEmBjKgnOAl2F2gJcwufSjg3pzJ9+tGvBLtxQN/ejO+zgBXJ9FRyHj8oUwbRLcQw*`
					 }
	}).then((response) => {
		fileHelper.writeData(JSON.stringify(response.data), './cachedResponse.json');
		return Promise.resolve(response.data);
	}).catch((error => {
		console.log(error);
		console.log(`[${error.response.status}] ... [${error.response.statusText}]`);
		console.log(`[${error.response.status}] ... [${error.response.statusText}]`);
		console.log(`[${error.response.data.errorCode}] ... [${error.response.data.message}]`);
		fileHelper.writeData(JSON.stringify(error.response.data), './cachedResponse.json');
	}));

}

module.exports = getBooking;