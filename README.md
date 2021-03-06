# Preview2

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]

[travis-image]: https://api.travis-ci.org/fluidecho/preview2.png
[travis-url]: https://travis-ci.org/fluidecho/preview2
[npm-image]: https://img.shields.io/npm/v/preview2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/preview2
[node-image]: https://img.shields.io/badge/node.js-%3E=_8-blue.svg?style=flat-square
[node-url]: http://nodejs.org/download/

Console logging, inspecting and debugging tool.  

Instead of having console.log and util.inspect all over your code during development, use preview and can then turn object printing on or off using _--preview_ argument.

_Simpler than [Preview](https://www.npmjs.com/package/preview)._

## Installation

From your terminal, requires [node.js](http://nodejs.org/).

```
npm install preview2
```

## Example

In TypeScript.

```
/// <reference types="@types/node" />
//
// ts-node example.ts --preview
//

import { preview, Log } from 'preview2';

const log: Log = preview(__filename);

log('will always print', undefined, true);

let foo: any = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.
 
log('foo');
log('foo object', foo);
log(foo);
```
Run:
```
ts-node example.ts --preview
```

## License

Choose either: [MIT](http://opensource.org/licenses/MIT) or [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0).
