"use strict";

// out/server.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
function activate(context) {
  console.log("vue-helper activate", context.extension.id);
}
exports.activate = activate;
