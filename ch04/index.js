// 4.1 オブジェクト型
// *************************************************
var poet = {
    born: 1935,
    name: "Mary Oliver",
};
poet['born'];
poet.name;
// poet.end; <- エラーになる
// 4.1.1　オブジェクト型の宣言
// *************************************************
var poetLater;
poetLater = {
    born: 1935,
    name: "Mary Oliver",
};
var poetLater2;
poetLater2 = {
    born: 1935,
    name: "Mary Oliver",
};
var hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};
var withFirstName = hasBoth;
var withLastName = hasBoth;
var hasBoth2 = {
    first: "Sarojini",
    last: "Naidu",
};
var poetMatch = {
    born: 1928,
    name: "Maya Angelou",
};
// const extraProperty: Poet3 = {
//     activity:"walking",
//     born: 1935,
//     name: "Mary Oliver",
// }; <- エラーになる
var poetMatch2 = {
    born: 1928,
    name: "Maya Angelou",
};
var soySoauce = {
    name: "醤油",
    amount: "大さじ１",
};
var soySauceWithSatisfies = {
    name: "醤油",
    amount: "大さじ１",
};
var soySauceWithTypeAnnotation = {
    name: "醤油",
    amount: "大さじ１",
};
soySoauce.amount.length;
soySauceWithSatisfies.amount.length;
// soySauceWithTypeAnnotation.amount.length; <- エラーになる
var existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};
var extraPropertyButOK = existingObject;
var PoemMatch = {
    author: {
        firstName: "Sylvia",
        lastName: "Plash",
    },
    name: "Lady Lazarus",
};
var ok = {
    author: "Rita Dove",
    pages: 80,
};
var hasRequired = {
    author: undefined,
};
//const missingRequired: Writers = {}; <- エラーになる
// 4.3　オブジェクト型の合併
// *************************************************
// 4.3.1　オブジェクト型の合併型の型推論
// *************************************************
var poem4 = Math.random() > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true };
poem4.name;
poem4.pages;
poem4.rhymes;
var poem5 = Math.random() > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true };
poem5.name;
// poem5.pages; <- エラーになる
// poem5.rhymes; <- エラーになる
// 4.3.3　オブジェクト型の絞り込み
// *************************************************
if ("pages" in poem5) {
    poem5.pages;
}
else {
    poem5.rhymes;
}
var poem6 = Math.random() > 0.5 ? { name: "The Double Image", pages: 7, type: 'pages' } : { name: "Her Kind", rhymes: true, type: 'rhymes' };
poem6.name;
if (poem6.type === "pages") {
    console.log("It's got pages: ".concat(poem6.pages));
}
else {
    console.log("It rhymes: ".concat(poem6.rhymes));
}
var morningGlory = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};
// const notNumber: NotPossible = 0; <- エラーになる
// const notString: NotPossible = ''; <- エラーになる
