if (process.argv[2] === 'development') require('dotenv').config({ path: './environments/.env-dev' });
else require('dotenv').config({ path: './environments/.env-prod' });
const serverConfig = require('./config/server.js');
const path = require('path');
const fs = require('fs');
const fileName = path.resolve(__dirname, 'client/package.json');
const file = require(fileName);


const setClientEnviroment = () => {
  console.info(`${new Date().toISOString()}::enviroment configs settings, for any enviroment changes you need to restart the server`);

  const envClient = `\
REACT_APP_API_HOST=${serverConfig.apiHost}
REACT_APP_LANGUAGE=${serverConfig.language}
PORT=${serverConfig.portFront}
SKIP_PREFLIGHT_CHECK=${serverConfig.skipPreflight}
GENERATE_SOURCEMAP=false`;

  const writeEnvFile = () => {
    file.proxy = serverConfig.apiHost;
    fs.writeFileSync(path.resolve(__dirname, 'client/.env'), envClient, function writeENV(err) {
      if (err) return console.error(`${new Date().toISOString()}::error::`, err);
      return;
    });
  }

  const writeJsonFile = () => {
    file.proxy = serverConfig.apiHost;
    fs.writeFileSync(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
      if (err) return console.error(`${new Date().toISOString()}::error::`, err);
      return;
    });
  }

  writeEnvFile();
  writeJsonFile();
}

setClientEnviroment();
