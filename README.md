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
