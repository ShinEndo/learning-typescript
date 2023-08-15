// 9　型修飾子
// *************************************************
// 9.1　トップ型
// *************************************************
// 9.1.1　再び any
// *************************************************
let anyValue: any;
anyValue = "lucille Ball";
anyValue = 123;
console.log(anyValue);

function greetComedian(name: any) {
    console.log(`Announcing ${name.toUpperCase()}!`);
}

greetComedian('Bea Arthur');

// TypeScriptで型エラーにならないが、JavaScriptで実行するとクラッシュする
// greetComedian({name: "Bea Arthur"});

// 9.1.2　unknown
// *************************************************
// unknown型のため、型エラーを報告してくれる
// function greetComedian2(name: unknown) {
//     console.log(`Announcing ${name.toUpperCase()}!`);
// }

function greetComedian2(name: unknown) {
    if(typeof name === "string") {
        console.log(`Announcing ${name.toUpperCase()}!`);
    } else {
        console.log("Well, I'm off.")
    }
}
greetComedian2('Bea Arthur');

// TypeScriptで型エラーにならず、JavaScriptでもクラッシュしない（elseでクラッシュを事前に防いでいる）
greetComedian2({name: "Bea Arthur"});

// 9.2　型述語
// *************************************************
function isNumberOrString(value: unknown) {
    return ['number','string'].includes(typeof value);
}

function logValueIfExists(value: number|string|null|undefined){
    if(isNumberOrString(value)) {
        // valueの型が絞られていないため、エラーになる
        // value.toString();
    } else {
        console.log("Value does not exist", value);
    }
}

function isNumberOrString2(value: unknown): value is number | string {
    return ['number','string'].includes(typeof value);
}

function logValueIfExists2(value: number|string|null|undefined){
    if(isNumberOrString2(value)) {
        value.toString();
    } else {
        console.log("Value does not exist", value);
    }
}

interface Comedian {
    funny: boolean;
}

interface StandupComedian extends Comedian {
    routine: string;
}

function isStandupComedian(value: Comedian) : value is StandupComedian {
    return 'routine' in value;
}

function workWithComedian(value: Comedian) {
    if(isStandupComedian(value)) {
        console.log(value.routine);
    }

    // 絞り込みができていないので、エラーになる
    // console.log(value.routine);
}

function isLongString(input: string | undefined): input is string {
    return !!(input && input.length > 7);
}
function workWithText(text:string | undefined) {
    if(isLongString(text)) {
        console.log("Long text:", text.length);
    } else {
        // 複雑な型述語のため、予期せぬundefined型によるエラーになる
        // console.log("Short text:", text?.length);
    }
}
workWithText("test test test");
workWithText("test");

// 9.3　型演算子
// *************************************************
// 9.3.1　keyof
// *************************************************
interface Ratings {
    audience: number;
    critics: number;
}

function getRating(ratings: Ratings, key: string): number{
    // TypeScriptの設定が厳格な場合、エラーになる
    return ratings[key];
}

const ratings: Ratings = {audience: 77, critics:84};
console.log(getRating(ratings, 'audience'));
console.log(getRating(ratings, 'not valid')); // コンパイルは通るけど、不正な値

function getRating2(ratings: Ratings, key: 'audience' | 'critics'):number{
    return ratings[key];
}
const ratings2: Ratings = {audience: 77, critics:84};
console.log(getRating2(ratings2, 'audience'));
// console.log(getRating2(ratings2, 'not valid')); <- エラーになる

// 「keyof」によって、すべてのキーの合併型が簡潔に表現できる！
function getRatingKeyof(ratings: Ratings, key: keyof Ratings):number{
    return ratings[key];
}

const ratings3: Ratings = {audience: 77, critics:84};
console.log(getRatingKeyof(ratings2, 'audience'));
// console.log(getRatingKeyof(ratings2, 'not valid')); <- エラーになる