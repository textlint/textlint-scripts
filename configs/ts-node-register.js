/**
 * Transpile by tsc in runtime
 * It does transpile and type-check.
 *
 * Note: It does not babel-plugin-static-fs
 * Some behavior is a bit difference
 */
const fs = require("fs");
const paths = require("../configs/paths");
const useTypeScript = fs.existsSync(paths.appTsConfig);
if (!useTypeScript) {
    throw new Error(`${paths.appTsConfig} not found.

ts register mode require tsconfig.json.`);
}
require("ts-node").register({
    project: paths.appTsConfig
});
