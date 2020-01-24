const config = require('./config');
const request = require('./request');
const AuthenticationModel = require('./authenticationModel');
const getBooking = require('./getBooking');
const render = require('./consoleRender');

function invokeGetBooking() {
	getBooking(request).then((response) => {
		render(response);
	});
}

console.log('Running GetBooking demo\n\n');

const authentication = new AuthenticationModel({apiEndPoint: config.apiEndPoint, userSecret: config.userSecret,});


authentication.createToken()
.then(() => {
	invokeGetBooking();
})
.catch(() => {
	console.log('\n');
});
invokeGetBooking();