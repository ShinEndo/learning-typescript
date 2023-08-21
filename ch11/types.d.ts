
// 11　宣言ファイル
// *************************************************
// 11.1　宣言ファイル（.d.ts）
// *************************************************
export interface Character {
    catchphrase?: string;
    name: string;
}

// 11.2　ランタイム値の宣言
// *************************************************
declare let declared: string;

// コンパイル時にエラーになる
// declare let initializer: string = "Wanda";

declare function canGrantWish(wish: string): boolean;

// コンパイル時にエラーになる
// declare function grantWish(wish: string){return true};

interface Writer{}
declare interface Write{}

declare const fullName: string;
declare const firstName: "Liz";

// コンパイル時にエラーになる
// const lastName = "Lemon";

