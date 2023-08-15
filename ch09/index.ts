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
