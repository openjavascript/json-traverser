'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jsonTraverser;
function jsonTraverser(json, cb) {
    var keys = Object.keys(json);
    keys.map(function (key) {
        var item = json[key];
        switch (Object.prototype.toString.call(item)) {
            case '[object Array]':
            case '[object Object]':
                {
                    jsonTraverser(item, cb);
                    break;
                }
        }
        cb && cb(item, key, json);
    });
}