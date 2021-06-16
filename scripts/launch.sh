#!/bin/bash

echo $'\e[1;32m'Starting up!
echo

osascript -e 'tell app "Terminal"
  do script "nicole && cd server && yarn start"
end tell'

cd client && yarn start




