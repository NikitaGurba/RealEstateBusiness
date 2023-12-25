#!/bin/bash
DIR_TO_WATCH=".."
COMMAND="npm run devBuild"
while [[ 1=1 ]]
do
  watch --chgexit -n 1 "ls --all -l --recursive --full-time ${DIR_TO_WATCH}  | sha256sum" > /dev/null && ${COMMAND} > /dev/null
  sleep 1
done
