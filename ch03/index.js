// 3.1 合併型
// *************************************************
var mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
var thinker = null;
if (Math.random() > 0.5) {
    thinker = "Susanne Langer";
}
// 3.1.2 合併型のプロパティ
// *************************************************
var physicist = Math.random() > 0.5 ? "Marie Curie" : 84;
physicist.toString();
// physicist.toUpperCase(); <- エラーになる
// physicist.toFixed(); <- エラーになる
// 3.2 型の絞り込み
// *************************************************
// 3.2.1　割り当てによる絞り込み
// *************************************************
var admiral;
admiral = "Gracec Hopper";
admiral.toUpperCase();
// admiral.toFixed(); <- エラーになる
// 3.2.2　条件のチェック
// *************************************************
var scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (scientist === "Rosalind Franklin") {
    scientist.toUpperCase();
}
// scientist.toUpperCase();  <- エラーになる
// 3.2.2　typeofチェック
// *************************************************
var researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof researcher === "string") {
    researcher.toUpperCase();
}
if (!(typeof researcher === "string")) {
    // researcher.toUpperCase();  <- エラーになる
    researcher.toFixed();
}
else {
    researcher.toUpperCase();
}
typeof researcher === "string" ? researcher.toUpperCase() : researcher.toFixed();
// 3.3　リテラル型
// *************************************************
// 3.4　厳密なnullチェック
// *************************************************
var nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;
//nameMaybe.toLowerCase(); <- エラーになる
// 3.4.2　真偽性による絞り込み
// *************************************************
var geneticist = Math.random() > 0.5 ? "Barbara Mcclintock" : undefined;
if (geneticist) {
    geneticist.toUpperCase();
}
// geneticist.toUpperCase(); <- エラーになる
var biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
    biologist;
}
else {
    biologist;
}
// 3.4.3　初期値を持たない変数
// *************************************************
var mathmatician;
mathematician === null || mathematician === void 0 ? void 0 : mathematician.length;
mathematician = "Mark Goldberg";
mathematician.length;
var rawDataFirst;
var RawDataSecond;
var RawDataThird;
