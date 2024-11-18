const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const WebpackObfuscator = require('webpack-obfuscator');


module.exports = (env) => {
  if (env.mode === 'development') require('dotenv').config({ path: './environments/.env-dev' });
  else require('dotenv').config({ path: './environments/.env-prod' });
  const environment = process.env.ENVIRONMENT;

  console.info('  -build-environment::', environment, '\n');

  return {
    entry: './index.js',
    mode: environment,
    output: {
      path: path.resolve(__dirname, 'bundle'),
      filename: 'api.bundle.js',
    },
    target: 'node',
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env)
      }),
      new WebpackObfuscator({
        // reservedStrings: [ '\s*' ],
      	rotateStringArray: true
      }, [])
    ],
    externals: {
      ...Object.fromEntries(
        fs.readdirSync('node_modules').filter(x => x !== 'bin').map(x => [x, 'commonjs ' + x])
      )
    }
  };
}
