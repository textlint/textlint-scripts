const fs = require("fs");
const paths = require("../configs/paths");
const useTypeScript = fs.existsSync(paths.appTsConfig);
const NO_INLINE = !!process.env.NO_INLINE;
module.exports = {
    presets: [
        [
            "@babel/env",
            {
                "useBuiltIns": "usage",
                "corejs": {
                    "version": 3,
                    "proposals": true
                },
                // For async/await support
                // https://babeljs.io/docs/en/babel-preset-env#targetsesmodules
                targets: {
                    esmodules: true
                }
            }
        ]
    ].concat(useTypeScript ? [["@babel/preset-typescript"]] : []),
    plugins: NO_INLINE
        ? []
        : [
              // inline fs content
              "static-fs"
          ]
};
