#!/bin/bash

echo $'\e[1;36m'Updating main and pushing app to staging!
echo

git push origin main && git checkout staging && yarn pull && yarn hp


