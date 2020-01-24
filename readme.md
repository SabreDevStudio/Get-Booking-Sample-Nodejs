# GetBooking Demo
## Introduction
This is sample client application written in node.js allowing to call trip/orders/GetBooking Sabre RPC service. It is dedicated to provide overview to web developer how this service can be easly integrated. 


## Developers Guide
###Setup
* Install NodeJS 12 LTS
* (Running on Windows 10 system) Add User Environment Variable:
 ComSpec: `C:\Windows\System32\cmd.exe`
* Clone repository on github
* run `npm install` in console for project source path

### Usage
#### Getting Sabre API Credentials

You’ll need your [Sabre REST APIs CERT-environment credentials](https://developer.sabre.com/guides/travel-agency/quickstart). They’re used by the sample app as part of the authentication flow to call GetBooking.

#### Encoding Credentials

Using the APIs requires entering credentials so that the app can find them. Part of its logic is requesting a token in order to properly call the GetBooking API. Tokens are gained in part from private credentials.

Simply open up the app’s source code and look at the file named [`config.js`](./app/config.js) to find where they’re declared. There is one attribute (`userSecret` ) where value can be copied-in as hardcoded string. Alternatively, it can be picked-up from O/S environment variables that you create on your local development machine.

```
exports.api = {
  apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
  userSecret: process.env.SWS_API_SECRET || ''
};
```

Environment variables are preferred in this sample app because it keeps them hidden and protected. In this case all code is publicly visible in revision control, and that’s not the place for private information.

* `userSecret` – is a base64-encoded string computed from steps you can [read more about](https://developer.sabre.com/guides/travel-agency/how-to/rest-apis-token-credentials)

#### Request configuration
In order to successfully run the application you should provide request required data valid for your context. Construction of request happens in `app/request.js` file:
```
const request = {
	confirmationId: "KLTNTG",
	surname: "Sponge"
};
```


#### Running the Sample App

The sample app is ready to run after setup. Enter this command in the local copy of the source code to run the sample app:

`npm start` 

####Using locally on Sabre dev machine:
1. Generate Token on CERT
2. Comment 18-24 lines in index.js
3. In getBooking.js:14 provide token instead of variable

## License

Copyright (c) 2019 Sabre Corp Licensed under the MIT license.

## Disclaimer of Warranty and Limitation of Liability

This software and any compiled programs created using this software are furnished “as is” without warranty of any kind, including but not limited to the implied warranties of merchantability and fitness for a particular purpose. No oral or written information or advice given by Sabre, its agents or employees shall create a warranty or in any way increase the scope of this warranty, and you may not rely on any such information or advice.
Sabre does not warrant, guarantee, or make any representations regarding the use, or the results of the use, of this software, compiled programs created using this software, or written materials in terms of correctness, accuracy, reliability, currentness, or otherwise. The entire risk as to the results and performance of this software and any compiled applications created using this software is assumed by you. Neither Sabre nor anyone else who has been involved in the creation, production or delivery of this software shall be liable for any direct, indirect, consequential, or incidental damages (including damages for loss of business profits, business interruption, loss of business information, and the like) arising out of the use of or inability to use such product even if Sabre has been advised of the possibility of such damages.
