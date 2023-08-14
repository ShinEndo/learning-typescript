// 7　インターフェース
// *************************************************

// 7.1　型エイリアス vs インターフェース
// *************************************************
// type Poet7 = {
//     born: number;
//     name: string;
// };

interface Poet7 {
    born: number;
    name: string;
}

let valueLater: Poet7;

valueLater = {
    born: 1935,
    name: "Sara Teasdale"
};

// valueLater = "Emily Dickinson"; <- エラーになる

// valueLater = {
//     born: true,
//     name: "Sappho",
// }; <- エラーになる

// 7.2　プロパティの種類
// *************************************************
interface Book7 {
    author?: string;
    pages: number;
}

const ok7: Book7 = {
    author: "Rita Dove",
    pages: 80,
};

// const missing: Book7 = {
//     author: "Rita Dove",
// }; <- エラーになる

// 7.2.2　読み取り専用プロパティ
// *************************************************
interface Page {
    readonly text: string;
}

// function read(page: Page){
//     console.log(page.text);

//     page.text += "!";
// } <- エラーになる

const pageIsh = {
    text: "Hello, world!",
};

pageIsh.text += "!";

// 7.2.3　関数とメソッド
// *************************************************
interface HasBothFunctionsTypes {
    property: () => string;
    method(): string;
}

const hasBoth7: HasBothFunctionsTypes = {
    property: () => "",
    method() {
        return "";
    },
}

hasBoth7.property();
hasBoth7.method();

interface OptionalReadonlyFunctions {
    optionalProperty?: () => string;
    optionalMethod?(): string;
}

// 7.2.4　呼び出しシグネチャ
// *************************************************
type FunctionAlias = (input: string) => number;

interface CallSignature {
    (input: string) : number;
}

const typedFunctionAlias: FunctionAlias = input => input.length;
const typedCallSignature: CallSignature = input => input.length;

interface FunctionWithCount {
    count: number,
    (): void,
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls(){
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
    console.log("No idea!");
}

// hasCallCount = doesNotHaveCount; <- エラーになる

// 7.2.5　インデックスシグネチャ
// *************************************************
interface WordCounts {
    [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0;
counts.banana = 1;
// counts.cherry = false; <- エラーになる

interface DatesbyName {
    [i: string]: Date;
}

const publishDates: DatesbyName = {
    Frankenstein: new Date("1 Januarry 1818"),
};

publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());

// publishDates.Beloved;
// console.log(publishDates.Beloved.toString()); <- Runtime Errorになる

// 7.2.5.1　プロパティとインデックスシグネチャの混同
// *************************************************
interface HistoricalNovels {
    Oroonoko: number;
    [i:string]: number;
}

const novels:HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1688,
};

// const missingOroonoko: HistoricalNovels = {
//     Outlander: 1991,
// } <- エラーになる

interface ChapterStarts {
    preface: 0;
    [i:string]: number;
}

const correctPreface: ChapterStarts = {
    preface: 0,
    night: 1,
    shopping: 5,
};

// const wrongPreface: ChapterStarts = {
//     preface: 1,
// } <- エラーになる

// 7.2.5.2　数値インデックスシグネチャ
// *************************************************
interface MoreNarrowNumbers {
    [i:number]: string;
    [i:string]: string | undefined;
}

const mixesNumbersAndStrings: MoreNarrowNumbers = {
    0: "",
    key1: "",
    key2: undefined,
};

// interface MoreNarrowStrings {
//     [i:number] : string | undefined;
//     [i:string]: string;
// } <- エラーになる

// 7.2.6　ネストされたインターフェース
// *************************************************
interface Novel {
    author: {
        name: string;
    };
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let myNovel: Novel;

myNovel = {
    author: {
        name: 'Jane Austen',
    },
    setting: {
        place: 'England',
        year: 1812,
    }
};

// myNovel = {
//     author: {
//         name: 'Emily Bronte',
//     },
//     setting: {
//         place: 'West Yorkshire',
//     },
// }; <- エラーになる

// 7.3　インターフェースの拡張
// *************************************************
interface Writing7 {
    title: string;
};

interface Novella extends Writing7 {
    pages: number;
}

let myNobella: Novella = {
    title: 'Ethan Frome',
    pages: 195,
};

// let missingPages: Novella = {
//     title: 'The Awakening',
// }; <- エラーになる

// let extraProperty: Novella = {
//     title: 'Naturalism',
//     pages: 300,
//     strategy: 'baseline',
// } <- エラーになる

// 7.3.1　オーバーライドされたプロパティ
// *************************************************
interface WithNullableName {
    name: string | null;
}

interface WithNonNullableName extends WithNullableName {
    name: string;
}

// interface WithNumericName extends WithNullableName {
//     name: number | string;
// } <- エラーになる

// 7.3.2　複数インターフェースの拡張
// *************************************************
interface GivesNumber {
    giveNumber(): number;
}

interface GivesString {
    giveString(): string;
}

interface GivesBothAndEither extends GivesNumber,GivesString {
    giveEither(): number | string;
}

function useGiveBoth(instance: GivesBothAndEither) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
}