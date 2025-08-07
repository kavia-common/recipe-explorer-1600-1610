#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-1600-1610/web_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

