if (process.env.ENV === 'production' || process.argv[2] === 'production') require('dotenv').config({ path: './environments/.env-prod' });
else require('dotenv').config({ path: './environments/.env-dev' });
const server = require('./src/app.js');
const serverConfig = require('./config/server.js');


console.info(`${new Date().toISOString()}::environment::`, serverConfig.environment);

server.set('port', serverConfig.port);

server.listen(server.get('port'), (err) => {
  if (err) console.error(`${new Date().toISOString()}::error::problems try to run the server`, err);
  console.info(`${new Date().toISOString()}::running server on from ${serverConfig.apiHost}`);
});
