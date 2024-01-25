#!/bin/bash

if [[ ! -e dist ]]; then
    mkdir dist
fi
cp src/* dist/
perl -pi -e 's/{{OPENAI_API_KEY}}/'"$OPENAI_API_KEY"'/g' dist/script.js
