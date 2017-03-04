[![Dependency Status](https://david-dm.org/sturdynut/react-starter.svg)](https://david-dm.org/sturdynut/react-starter) 
[![devDependency Status](https://david-dm.org/sturdynut/react-starter/dev-status.png)](https://david-dm.org/sturdynut/react-starter?type=dev)

# React Starter

A starter kit for new React projects.

## Prerequisites

* Node 6+
* NPM 3+

## Major Features & Plugins

* [Tree Shaking](https://webpack.js.org/guides/tree-shaking/#components/sidebar/sidebar.jsx)
  * Eliminates unused code.  Enabled in .babelrc `{modules: false}`, then [uglifyjs](https://github.com/mishoo/UglifyJS) removes it from your bundle.
* [Code Splitting](https://webpack.js.org/guides/code-splitting/)
  * This is baked into webpack and accomplished multiple ways:
    * Using the new `import(...)` syntax or by using the [common chunks plugin](https://webpack.js.org/plugins/commons-chunk-plugin/), which allows you to split source code into multiple files.  Caching FTW!
* [Inline Manifest Plugin](https://github.com/szrenwei/inline-manifest-webpack-plugin)
  * Inlines your manifest.js to prevent an http call.
* [Html Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
  * Writes out your script tags with the correct [chunkhash] to support code splitting and long-term caching.
* ES6 Friendly Config
 * `webpack.config.babel.js` to run your webpack config through babel.
 * Debugging!  Yes, debug the webpack config by running one of the `debug` npm scripts.
* [Config Utils](https://github.com/kentcdodds/webpack-config-utils)
  * Provides intuitive helpers for your webpack config, e.g. `ifProd(...) or ifNotProd(...)`
* [Progress Bar Plugin](https://github.com/clessg/progress-bar-webpack-plugin)
  * Provides a nice progress bar for your webpack builds.
* [Offline Plugin](https://github.com/NekR/offline-plugin)
  * Enables offline access to your web app.

### Source Maps

* [Dev](https://webpack.js.org/configuration/devtool/#for-development) - `eval` for quick builds.
* [Prod](https://webpack.js.org/configuration/devtool/#for-production) - `source-map` to ensure source maps are not loaded with your source code.

## Scripts

### Setup

* `npm run setup`

### Development

* `npm run dev` - to kick off the webpack-dev-server with HMR
* `npm run watch:test` - For a TDD experience

### Building

* `npm run build` - Builds production bundle
* `npm run build:dev` - Builds dev bundle

### Serving

* `npm start` - To start up an `http-server` and serve from the `dist` directory.

### Debugging

Copy / paste the url from the console output into chrome and you are now debugging your webpack config!

* `npm start debug`
* `npm start debug:dev`
* `npm start debug:prod`

### Testing

Testing is setup to run using Karma and provides code coverage reporting.

* `npm run test` - Starts Karma
* `npm run watch:test` - Starts Karma with a watcher, to enable a TDD style development experience.

This project is setup to use [Karma](https://github.com/karma-runner/karma) for testing in a browser. 
[Mocha](https://github.com/mochajs/mocha) as the Javascript test framework and [chai](https://github.com/chaijs/chai) for the assertion library

### Linting

Linting is setup using the [eslint](https://github.com/eslint/eslint), you can customize the configuration in `.eslint`.

* `npm run lint` - To lint your code.
* `npm run validate` - Lints, builds and tests your code.

### Deployment

* `npm run deploy` - Deploys to [surge.sh](http://surge.sh/).

*Configuration* - To deploy you will need to update the `config/surge` file with your email, token and surge domain.

## Thanks

* [https://github.com/kentcdodds/es6-todomvc]((https://github.com/kentcdodds/es6-todomvc)) 🙏

<div style='text-align:center;padding:30px 0;'>
  <a style='padding-right: 10px;' href='https://github.com/sturdynut/react-starter/blob/master/LICENSE'>LICENSE</a> ∙
  <a style='padding: 0 10px;' href='https://github.com/sturdynut/react-starter/blob/master/CONTRIBUTING.md'>CONTRIBUTING</a> ∙
  <a style='padding-left: 10px;' href='https://github.com/sturdynut/react-starter/blob/master/CHANGELOG.md'>CHANGE LOG</a>
</div>