#!/bin/bash
set -eux
declare currentDir=$(cd $(dirname $0);pwd)
declare dirName=$(basename "${currentDir}")
declare parentDir=$(dirname "${currentDir}")
declare exampleDir="${parentDir}/example"
declare exampleTsDir="${parentDir}/example-ts"
# init
cd "${exampleDir}"
npm install
npm test
npm run build

cd "${exampleTsDir}"
npm install
npm test
npm run build
exit 0
