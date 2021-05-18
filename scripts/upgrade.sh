#!/bin/bash

echo $'\e[1;36m'Upgrading and getting fresh packages!
echo

cd server && rm -rf node_modules && yarn upgrade && cd ../client && rm -rf node_modules && yarn upgrade


