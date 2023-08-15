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
