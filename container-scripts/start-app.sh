#!/bin/bash

nohup mongod > /dev/null 2>&1 &

sleep 5

cd /app

npm run prod