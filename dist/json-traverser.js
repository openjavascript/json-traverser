'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jsonTraverser;
function jsonTraverser(json, cb) {
    var datapath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    var keys = Object.keys(json);
    keys.map(function (key) {
        var nextPath = datapath.slice();
        nextPath.push(key);
        var item = json[key];
        switch (Object.prototype.toString.call(item)) {
            case '[object Array]':
            case '[object Object]':
                {
                    jsonTraverser(item, cb, nextPath.slice());
                    break;
                }
        }
        cb && cb(item, key, json, nextPath);
    });
}