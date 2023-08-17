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

// 10.2　明示的なジェネリック呼び出しの型
// *************************************************
function logWrapper<Input>(callback: (input:Input)=>void) {
    return (input:Input) => {
        console.log("Input:",input);
        callback(input);
    }
}

// 型：（input: string) => void
logWrapper((input:string) => console.log(input.length));

// 型：（input: unknown) => void
// logWrapper((input) => console.log(input.length)); // エラーになる

// 型：（input: string) => void
logWrapper<string>((input:string) => console.log(input.length));

// logWrapper<string>((input:boolean) => {}); // エラーになる

// 型：（input: string) => void
logWrapper<string>((input:string) => {});