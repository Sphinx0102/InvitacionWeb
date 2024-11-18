const cors = require('cors');
const server = require('../../config/server');


const whitelist = [`${server.frontHost}`];

const corsConfigDelegate = (req, callback) => {
  let corsConfig = {
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
  };

  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    console.error(`${new Date().toISOString()}::error::CORS-enabled for this request`);
    corsConfig['origin'] = true;
  } else {
    console.error(`${new Date().toISOString()}::error::CORS-disabled for this request`);
    corsConfig['origin'] = false;
  }
  callback(null, corsConfig);
}


module.exports = cors();
