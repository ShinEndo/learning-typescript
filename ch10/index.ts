// 10　ジェネリック
// *************************************************
function identity(input) {
    return input;
}

const value = identity("abc");
const value2 = identity(123);
const value3 = identity({quote: "I think your self emerges more clearly over time."});


// 10.1　ジェネリック関数
// *************************************************
function identity2<T>(input:T) {
    return input;
}

const stringy = identity2("me");
const numeric = identity2(123);

const identity3 = <T>(input:T) => input;
const value4 = identity3(123);

