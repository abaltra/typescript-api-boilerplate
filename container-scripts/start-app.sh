#!/bin/bash

nohup mongod &

sleep 5

cd /app

npm run prod