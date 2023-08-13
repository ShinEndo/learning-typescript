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
var missingRequired = {};
