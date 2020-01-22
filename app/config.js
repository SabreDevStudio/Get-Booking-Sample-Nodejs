const APIConfig = {
  apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
  userSecret: process.env.SWS_API_SECRET || ''
};

module.exports = APIConfig;
