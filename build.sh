#!/usr/bin/env sh

greenBold='\x1B[1;32m'
endColor='\x1B[0m'

# сборка основного проекта
echo "Build main"
./node_modules/.bin/gulp build --production
