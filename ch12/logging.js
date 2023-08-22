"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logData = void 0;
// 12.2.3.1　リネーム
// *************************************************
// F2キーでリネームのためのテキストボックスが表示される
// export function log(...data: unknown[]) {
//     console.log("[log", ...data);
//   }
function logData(...data) {
    console.log("[log", ...data);
}
exports.logData = logData;
