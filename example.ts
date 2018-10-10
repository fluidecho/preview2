/// <reference types="@types/node" />
//
// ts-node example.ts --preview
//

import { preview, Log } from './';

const log: Log = preview(__filename);

log('will always print', undefined, true);

let foo: any = {bar: 8211, hello: 'world', list: [1,2,3]};   // some object to inspect.
 
log('foo');
log('foo object', foo);
log(foo);