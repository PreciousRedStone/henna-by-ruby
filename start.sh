#!/bin/bash

docker-compose up -d

cd front-end/

if [ ! -d "node_modules" ]; then
  npm install --no-package-lock
fi

trap "docker-compose down" EXIT

npm run dev
