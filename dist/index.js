"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const util_1 = require("util");
const argv = require('minimist')(process.argv.slice(2));
function preview(caller) {
    const log = function (arg1, arg2, print) {
        if (!argv.preview && print != true)
            return;
        if (arg2 != undefined) {
            console.log(`> (${caller}:${process.pid}) >> ` + arg1 + ' >>> ' + '\n' + util_1.inspect(arg2, true, 99, true) + ' ¬');
        }
        else {
            console.log(`> (${caller}:${process.pid}) >> ` + util_1.inspect(arg1, true, 99, true) + ' ¬');
        }
    };
    return log;
}
exports.preview = preview;
//# sourceMappingURL=index.js.map