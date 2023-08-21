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