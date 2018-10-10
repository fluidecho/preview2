"use strict";
//
// Preview2: Console logging, inspecting and debugging tool.
//
// Version: 0.2.5
// Author: Mark W. B. Ashcroft (mark [at] fluidecho [dot] com)
// License: MIT or Apache 2.0.
//
// Copyright (c) 2014-2018 Mark W. B. Ashcroft.
// Copyright (c) 2014-2018 Fluidecho.
//


import {inspect} from 'util';
const argv: any = require('minimist')(process.argv.slice(2));

export interface Log {
  (arg1: any, arg2?: undefined|any, print?: boolean): void;
}

export function preview(caller: string): Log {
  const log: Log = function(arg1: any, arg2?: undefined|any, print?: boolean): void {
    if ( !argv.preview && print != true  ) return;
    if ( arg2 != undefined ) {
      console.log(`> (${caller}:${process.pid}) >> ` + arg1 + ' >>> ' + '\n' + inspect(arg2, true, 99, true) + ' ¬');
    } else {
      console.log(`> (${caller}:${process.pid}) >> ` + inspect(arg1, true, 99, true) + ' ¬');
    }
  };
  return log;
}