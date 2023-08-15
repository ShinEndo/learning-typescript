// 9　型修飾子
// *************************************************
// 9.1　トップ型
// *************************************************
// 9.1.1　再び any
// *************************************************
var anyValue;
anyValue = "lucille Ball";
anyValue = 123;
console.log(anyValue);
function greetComedian(name) {
    console.log("Announcing ".concat(name.toUpperCase(), "!"));
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
function greetComedian2(name) {
    if (typeof name === "string") {
        console.log("Announcing ".concat(name.toUpperCase(), "!"));
    }
    else {
        console.log("Well, I'm off.");
    }
}
greetComedian2('Bea Arthur');
// TypeScriptで型エラーにならないが、JavaScriptで実行するとクラッシュする
greetComedian2({ name: "Bea Arthur" });
