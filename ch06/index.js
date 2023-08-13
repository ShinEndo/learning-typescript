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
