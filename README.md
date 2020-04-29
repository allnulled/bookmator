# bookmator

Generate markdown from filesystem recursion. Useful to maintain big markdown documents.

[![NPM](https://nodei.co/npm/bookmator.png?stars&downloads)](https://www.npmjs.com/package/bookmator)

## Installation

```sh
$ npm i -g bookmator
```

## Get started

### Instructions

  - Any `markdown` (`*.md`) **file** passed (or found in the process) is replaced by **its correspondant folder** if **its folder** is found: otherwise, it keeps the code.

  - The '**correspondant folder**' is a folder with the same name of the (`*.md`) file, but without the extension `.md`.

*Note: so, consider that the file that you pass to `bookmator` could be overriden, if its folder is found.*

### Demo

This could perfectly be a senseful tree for `bookmator`:

```
/book-1/
/book-1/index.md (this is overriden)
/book-1/index/
/book-1/index/001.introduction.md
/book-1/index/002.installation.md
/book-1/index/003.get-started.md
/book-1/index/004.usage.md
/book-1/index/005.examples.md (this is overriden)
/book-1/index/005.examples/001.simple.md
/book-1/index/005.examples/002.common.md
/book-1/index/005.examples/003.advanced.md
/book-1/index/006.reference.md (this is overriden)
/book-1/index/006.reference/
/book-1/index/007.license.md
/book-1/index/008.versioning.md
/book-1/index/009.issues.md
```

## Usage

### From CLI

```sh
$ bookmator compile docs/README.md
```

### From api

```js
require("bookmator").compile("docs/README.md");
```

## License

This project is licensed under [WTFPL](https://es.wikipedia.org/wiki/WTFPL), which stands for *Do What The Fuck You Want To Public License*.

## Versioning

This project adheres to [semantic versioning 2.0](https://semver.org/).

## Issues

To communicate issues [here](https://github.com/allnulled/bookmator/issues/new).
