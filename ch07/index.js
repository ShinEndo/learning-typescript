"use strict";
// 7　インターフェース
// *************************************************
let valueLater;
valueLater = {
    born: 1935,
    name: "Sara Teasdale"
};
const ok7 = {
    author: "Rita Dove",
    pages: 80,
};
// function read(page: Page){
//     console.log(page.text);
//     page.text += "!";
// } <- エラーになる
const pageIsh = {
    text: "Hello, world!",
};
pageIsh.text += "!";
const hasBoth7 = {
    property: () => "",
    method() {
        return "";
    },
};
hasBoth7.property();
hasBoth7.method();
const typedFunctionAlias = input => input.length;
const typedCallSignature = input => input.length;
let hasCallCount;
function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls;
function doesNotHaveCount() {
    console.log("No idea!");
}
const counts = {};
counts.apple = 0;
counts.banana = 1;
const publishDates = {
    Frankenstein: new Date("1 Januarry 1818"),
};
publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());
const novels = {
    Outlander: 1991,
    Oroonoko: 1688,
};
const correctPreface = {
    preface: 0,
    night: 1,
    shopping: 5,
};
const mixesNumbersAndStrings = {
    0: "",
    key1: "",
    key2: undefined,
};
let myNovel;
myNovel = {
    author: {
        name: 'Jane Austen',
    },
    setting: {
        place: 'England',
        year: 1812,
    }
};
;
let myNobella = {
    title: 'Ethan Frome',
    pages: 195,
};
function useGiveBoth(instance) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
}
