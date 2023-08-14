// 7　インターフェース
// *************************************************
var valueLater;
valueLater = {
    born: 1935,
    name: "Sara Teasdale"
};
var ok7 = {
    author: "Rita Dove",
    pages: 80,
};
// function read(page: Page){
//     console.log(page.text);
//     page.text += "!";
// } <- エラーになる
var pageIsh = {
    text: "Hello, world!",
};
pageIsh.text += "!";
var hasBoth7 = {
    property: function () { return ""; },
    method: function () {
        return "";
    },
};
hasBoth7.property();
hasBoth7.method();
var typedFunctionAlias = function (input) { return input.length; };
var typedCallSignature = function (input) { return input.length; };
var hasCallCount;
function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log("I've been called ".concat(keepsTrackOfCalls.count, " times!"));
}
keepsTrackOfCalls.count = 0;
hasCallCount = keepsTrackOfCalls;
function doesNotHaveCount() {
    console.log("No idea!");
}
var counts = {};
counts.apple = 0;
counts.banana = 1;
var publishDates = {
    Frankenstein: new Date("1 Januarry 1818"),
};
publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());
var novels = {
    Outlander: 1991,
    Oroonoko: 1688,
};
var correctPreface = {
    preface: 0,
    night: 1,
    shopping: 5,
};
var mixesNumbersAndStrings = {
    0: "",
    key1: "",
    key2: undefined,
};
var myNovel;
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
var myNobella = {
    title: 'Ethan Frome',
    pages: 195,
};
function useGiveBoth(instance) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
}
