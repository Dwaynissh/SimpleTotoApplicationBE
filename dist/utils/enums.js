"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
var http;
(function (http) {
    http[http["Ok"] = 200] = "Ok";
    http[http["Created"] = 201] = "Created";
    http[http["Bad_Request"] = 404] = "Bad_Request";
})(http || (exports.http = http = {}));
