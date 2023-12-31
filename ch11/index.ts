// 11　宣言ファイル
// *************************************************
// 11.1　宣言ファイル（.d.ts）
// *************************************************
import { Character } from "./types";

export const character: Character = {
  catchphrase: "Yee-haw!",
  name: "Sandy Cheeks",
};

// 11.2　ランタイム値の宣言
// *************************************************
declare const myGlobalValue: string;
console.log(myGlobalValue);

// 11.2.2　グローバルなインターフェースのマージ
// *************************************************
export function logWindowVersion() {
  console.log(`Window version is: ${window.myVersion}`);
  window.alert("Built-in window types still work! Hooray!");
}

// 11.2.3　グローバルな拡張
// *************************************************
import { Data } from "./types/data";
import { locallyDeclared } from "./types/globals";

function logData(data: Data) {
  console.log(`Data version is ${data.version}`);
}

// 型引数がData型じゃないのでエラーになる
//logData("aaa");

logData(globallyDeclared);
logData(locallyDeclared);

// 11.3　組み込み宣言
// *************************************************
// 11.3.1　ライブラリー宣言
// *************************************************
export function logLines(lines: string[]) {
  lines.forEach(() => {});
}

// 11.4 モジュール宣言
// *************************************************
import { value } from "my-example-lib";
console.log(value);

// 11.5 パッケージの型
// *************************************************
// 11.5.1 declaration
// *************************************************
export const greet = (text: string) => {
  console.log(`Hello, ${text}`);
};

// 11.5.2 依存パッケージの型
// *************************************************
// 11.5.3 パッケージの型を公開する
// *************************************************

// 11.6 Definitely Typed
// *************************************************
// 11.6.1 型の入手可能性
// *************************************************
