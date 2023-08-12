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
// poetLater2 = "Emily Dickinson"; <- エラーになる
