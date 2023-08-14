var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 6　配列
// *************************************************
var warriors = ["Artemisia", "Boudica"];
warriors.push("Zenobia");
// warriors.push(true); <- エラーになる
// 6.1　配列型
// *************************************************
var arrayOfNumbers;
// 6.1.1　配列型と関数型
// *************************************************
// 関数
var createStrings;
// 配列
var stringCreators;
// 6.1.2　合併型の配列
// *************************************************
var stringOrArrayOfNumbers;
var arrayOfStringOrNumbers;
var namesMaybe = [
    "Aqualtune",
    "Blenda",
    undefined
];
// 6.1.3　進化するany型の配列
// *************************************************
var values = [];
values.push("");
values[0] = 0;
// 6.1.4　多次元配列
// *************************************************
var arrayOfArraysOfNumbers;
arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var arrayOfArraysOfNumbers2;
// 6.2　配列のメンバー　
// *************************************************
var defenders = ["Clarenza", "Dina"];
var defender = defenders[0];
var soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];
var soldierOrDate = soldiersOrDates[0];
// 6.2.1　注意事項：不安定なメンバー　
// *************************************************
// function withElements(elements: string[]){
//     console.log(elements[9001].length);
// }
// withElements(["It's","over"]);
var chomiryo = ["砂糖", "塩", "酢", "醤油", "味噌"];
console.log(chomiryo[0]);
console.log(chomiryo.at(0));
console.log(chomiryo[chomiryo.length - 1]);
console.log(chomiryo.at(-1));
// 6.3　スプレッド演算子とレストパラメーター　
// *************************************************
// 6.3.1　スプレッド演算子
// *************************************************
var soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
var soldiersAge = [90, 19, 45];
var conjoined = __spreadArray(__spreadArray([], soldiers, true), soldiersAge, true);
// 6.3.2　レストパラメーターへの展開
// *************************************************
function logWorriors(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("".concat(greeting, ",").concat(name_1));
    }
}
var warriors2 = ["Cathay Williams", "Lozen", "Nzinga"];
logWorriors.apply(void 0, __spreadArray(["Hello"], warriors2, false));
var birthYears = [1844, 1840, 1583];
// logWorriors("Born in", ...birthYears); <- エラーになる
// 6.4　タプル
// *************************************************
var yearAndWarrior;
yearAndWarrior = [530, "Tomyris"];
// yearAndWarrior = [false,"Tomyris"]; <- エラーになる
// yearAndWarrior = [530]; <- エラーになる
var _a = Math.random() > 0.5 ? [340, "Archidamia"] : [1828, "Rani of Jhansi"], year = _a[0], warrior = _a[1];
// 6.4.1　タプルの割り当て可能性
// *************************************************
var pariLoose = [false, 123];
// const pariTupleLoose: [boolean,number] = pariLoose; <- エラーになる
var tupleThree = [false, 1583, "Nzinga"];
var tupleTwoExtra = [tupleThree[0], tupleThree[1]];
// const tupleTwoExtra2:[boolean,number] = tupleThree; <- エラーになる
// 6.4.1.1　スプレッド引数としてのタプル
// *************************************************
function logPair(name, value) {
    console.log("".concat(name, " has ").concat(value));
}
var pairArray = ["Amage", 1];
// logPair(...pairArray); <- エラーになる
var pairTupleIncorrect = [1, "Amage"];
// logPair(...pairTupleIncorrect); <- エラーになる
var pairTupleCorrect = ["Amage", 1];
logPair.apply(void 0, pairTupleCorrect);
function logTorio(name, value) {
    console.log("".concat(name, " has ").concat(value[0], " ").concat(value[1]));
}
var torios = [
    ["Amanitore", [1, true]],
    ["Dummy", [2, false]],
    ["Ann E. Dunwoody", [3, false]]
];
torios.forEach(function (trio) { return logTorio.apply(void 0, trio); });
// torios.forEach(logTorio); <- エラーになる
// 6.4.2　タプルの型推論
// *************************************************
function firstChartAndSize(input) {
    return [input[0], input.length];
}
var _b = firstChartAndSize("Gudit"), firstChar = _b[0], size = _b[1];
console.log(firstChar);
console.log(size);
// 6.4.2.1　明示的なタプル型
// *************************************************
function firstCharAndSizeExplicit(input) {
    return [input[0], input.length];
}
var _c = firstCharAndSizeExplicit("Cathay Williams"), firstChar2 = _c[0], size2 = _c[1];
// 6.4.2.2　constアサーションが指定されたタプル
// *************************************************
var unionArray = [1157, "Tomoe"];
var readonlyTuple = [1157, "Tomoe"];
var pairMutable = [1157, "Tomoe"];
pairMutable[0] = 1247;
console.log(pairMutable[0]);
// const pairAlsoMutable:[number,string] = [1157,"Tomoe"] as const; <- エラーになる
var pairConst = [1157, "Tomoe"];
// pairConst[0] = 1247; <- エラーになる
function firstCharAndSizeConst(input) {
    return [input[0], input.length];
}
var _d = firstCharAndSizeConst("Ching Shih"), firstChar3 = _d[0], size3 = _d[1];
