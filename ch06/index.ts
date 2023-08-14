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

// logWorriors("Born in", ...birthYears); <- エラーになる

// 6.4　タプル
// *************************************************
let yearAndWarrior: [number,string];

yearAndWarrior = [530,"Tomyris"];

// yearAndWarrior = [false,"Tomyris"]; <- エラーになる
// yearAndWarrior = [530]; <- エラーになる

const [year,warrior] = Math.random() > 0.5 ? [340,"Archidamia"] : [1828,"Rani of Jhansi"];

// 6.4.1　タプルの割り当て可能性
// *************************************************
const pariLoose = [false,123];
// const pariTupleLoose: [boolean,number] = pariLoose; <- エラーになる

const tupleThree: [boolean,number,string] = [false,1583,"Nzinga"];
const tupleTwoExtra:[boolean,number] = [tupleThree[0],tupleThree[1]];
// const tupleTwoExtra2:[boolean,number] = tupleThree; <- エラーになる

// 6.4.1.1　スプレッド引数としてのタプル
// *************************************************
function logPair(name:string,value:number){
    console.log(`${name} has ${value}`);
}

const pairArray = ["Amage",1];
// logPair(...pairArray); <- エラーになる

const pairTupleIncorrect: [number,string] = [1,"Amage"];
// logPair(...pairTupleIncorrect); <- エラーになる

const pairTupleCorrect: [string,number] = ["Amage",1];
logPair(...pairTupleCorrect);

function logTorio(name:string,value:[number,boolean]){
    console.log(`${name} has ${value[0]} ${value[1]}`)
}

const torios: [string,[number,boolean]][] = [
    ["Amanitore",[1,true]],
    ["Dummy",[2,false]],
    ["Ann E. Dunwoody",[3,false]]
];

torios.forEach(trio => logTorio(...trio));

// torios.forEach(logTorio); <- エラーになる


// 6.4.2　タプルの型推論
// *************************************************
function firstChartAndSize(input:string){
    return [input[0],input.length];
}

const [firstChar, size] = firstChartAndSize("Gudit");
console.log(firstChar);
console.log(size);


// 6.4.2.1　明示的なタプル型
// *************************************************
function firstCharAndSizeExplicit(input:string):[string,number]{
    return [input[0],input.length];
}

const [firstChar2,size2] = firstCharAndSizeExplicit("Cathay Williams");

// 6.4.2.2　constアサーションが指定されたタプル
// *************************************************
const unionArray = [1157,"Tomoe"];
const readonlyTuple = [1157,"Tomoe"] as const;

const pairMutable: [number,string] = [1157,"Tomoe"];
pairMutable[0] = 1247;
console.log(pairMutable[0]);

// const pairAlsoMutable:[number,string] = [1157,"Tomoe"] as const; <- エラーになる

const pairConst = [1157,"Tomoe"] as const;
// pairConst[0] = 1247; <- エラーになる

function firstCharAndSizeConst(input:string){
    return [input[0],input.length] as const;
}
const [firstChar3,size3] = firstCharAndSizeConst("Ching Shih");
