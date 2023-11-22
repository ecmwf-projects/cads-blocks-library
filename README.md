# cads-blocks-library

> CADS Blocks library for webportal

## Usage

Install the library with Yarn:

```shell
yarn add @ecmwf-projects/cads-blocks-library
```

or with NPM:

```shell
npm install @ecmwf-projects/cads-blocks-library
```

Then, import the desired component into your project:

```js
import { GenerateBlocks } from '@ecmwf-projects/cads-blocks-library'
```

## Publishing a new version

Increment the desired Semver version where the version can be one of `--major`, `--minor`, `--patch`. Run `yarn version -h` for a full list of flags:

```shell
yarn version --minor
```

This will also publish a release tag via `postversion` script.

The tag will trigger the related Github actions for publishing to the desired package registry.

To publish a pre-release, add `--pre` to the flag:

```shell
yarn version --preminor

# or

yarn version --premajor
```

## Publishing a new version

Local package development:

In order to install this package locally (while developing) in the same way as publishing,
we can package it and install in webportal:

```
npm run build
npm pack
```

This will create a ecmwf-projects-cads-blocks-...-.tgz. Add to the dependencies of cads-webportal:

Something like this:

```
"dependencies": {
      "@ecmwf-projects/cads-blocks-library": "file:/path/to/cads-blocks-library/ecmwf-projects-cads-blocks-library-3.0.5.tgz",
}
```

Issue yarn install.
