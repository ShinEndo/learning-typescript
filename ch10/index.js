// 10　ジェネリック
// *************************************************
function identity(input) {
    return input;
}
var value = identity("abc");
var value2 = identity(123);
var value3 = identity({ quote: "I think your self emerges more clearly over time." });
// 10.1　ジェネリック関数
// *************************************************
function identity2(input) {
    return input;
}
var stringy = identity2("me");
var numeric = identity2(123);
var identity3 = function (input) { return input; };
var value4 = identity3(123);
