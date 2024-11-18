#!/bin/bash
###########################################
#   Build of Birthdate Card
#   Author: Esequiel Delgado
#   Area: github.com/EzequielEDL
###########################################

reset=`tput sgr0`
red=`tput setaf 1`
green=`tput setaf 2`
blue=`tput setaf 4`

env=production

if [ $1 == development ]; then env=$1
fi

echo "${red}"
echo "
  bundle tool by Esequiel Delgado

  options bundle [ build:dev, build ]
  enviroment: $env
"
rm -rf bundle

node setenv-client.js $env

echo "${green}
  BUILD CLIENT (FRONTEND)
"
npm run build --prefix client

echo "
  BUILD API (BACKEND)"
webpack --env=mode=$env

mkdir -p bundle/public/
cp -a public/build bundle/public/build
cp -a ../resources/deploy/app.yaml bundle
cp -a ../resources/deploy/package.json bundle
# cp -a package.json bundle
rm ../bundle.tar
rm -rf ../bundle
cp -r bundle/ ../
# cp -r ../resources/production/. ../bundle
cd ..
tar -cf bundle.tar bundle
# zip -r bundle.zip bundle
rm -rf bundle

echo "${red}
  - PROJECT BUNDLE FINISH
  path: $PWD/bundle
"
echo "${reset}"
