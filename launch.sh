#!/bin/bash

echo Starting up!

osascript -e 'tell app "Terminal"
  do script "nicole && cd server && yarn start"
end tell'

cd client && yarn debug-start


#cd client && yarn start



