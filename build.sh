#!/bin/bash

BRANCH=${1}

echo "Start deployment"
echo "pulling source code..."
git reset --hard origin/master
git pull
git checkout $BRANCH
echo "building..."
npm install
npm run build
echo "Finished."
