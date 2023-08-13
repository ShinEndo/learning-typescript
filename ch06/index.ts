// 6　配列
// *************************************************
const warriors = ["Artemisia", "Boudica"];
warriors.push("Zenobia");
// warriors.push(true); <- エラーになる

// 6.1　配列型
// *************************************************
let arrayOfNumbers: number[];

// 6.1.1　配列型と関数型
// *************************************************
// 関数
let createStrings: () => string[];
// 配列
let stringCreators: (() => string)[];

// 6.1.2　合併型の配列
// *************************************************
let stringOrArrayOfNumbers: string | number[];
let arrayOfStringOrNumbers: (string | number)[];

const namesMaybe = [
    "Aqualtune",
    "Blenda",
    undefined
];

// 6.1.3　進化するany型の配列
// *************************************************
let values = [];

values.push("");

values[0] = 0;

// 6.1.4　多次元配列
// *************************************************
let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let arrayOfArraysOfNumbers2: (number[])[];
