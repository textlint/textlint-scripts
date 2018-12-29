# textlint-scripts [![Build Status](https://travis-ci.org/textlint/textlint-scripts.svg?branch=master)](https://travis-ci.org/textlint/textlint-scripts)

textlint npm-run-scripts CLI help to create textlint rule.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-scripts --save-dev

## Usage

Use `textlint-scripts` as [npm-scripts](https://docs.npmjs.com/misc/scripts "npm-scripts").

```json
{
    "scripts" : {
        "build": "textlint-scripts build",
        "test": "textlint-scripts test"
    }
}
```


### `textlint-scripts build`

Build source codes in `src/` and output to `lib/`.

It is built by [Babel](https://babeljs.io/ "Babel") with [`env` preset](https://babeljs.io/docs/plugins/preset-env/).

### `textlint-scripts test`

Test test codes in `test/` by [Mocha](http://mochajs.org/ "Mocha").

Usually test textlint rule using [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester"). 

## Changelog

See [Releases page](https://github.com/textlint/textlint-scripts/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint/textlint-scripts/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
