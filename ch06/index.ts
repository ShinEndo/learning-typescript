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

// 6.2　配列のメンバー　
// *************************************************
const defenders = ["Clarenza", "Dina"];

const defender = defenders[0];

const soldiersOrDates = ["Deborah Sampson", new Date(1782,6,3)];

const soldierOrDate = soldiersOrDates[0];

// 6.2.1　注意事項：不安定なメンバー　
// *************************************************
// function withElements(elements: string[]){
//     console.log(elements[9001].length);
// }
// withElements(["It's","over"]);

const chomiryo = ["砂糖","塩","酢","醤油","味噌"];
console.log(chomiryo[0]);
console.log(chomiryo.at(0));

console.log(chomiryo[chomiryo.length -1]);
console.log(chomiryo.at(-1));

// 6.3　スプレッド演算子とレストパラメーター　
// *************************************************
// 6.3.1　スプレッド演算子
// *************************************************
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];
const soldiersAge = [90,19,45];
const conjoined = [...soldiers,...soldiersAge];

// 6.3.2　レストパラメーターへの展開
// *************************************************
function logWorriors(greeting: string, ...names:string[]){
    for(const name of names) {
        console.log(`${greeting},${name}`);
    }
}

const warriors2 = ["Cathay Williams","Lozen", "Nzinga"];

logWorriors("Hello",...warriors2);

const birthYears = [1844,1840,1583];

logWorriors("Born in", ...birthYears);