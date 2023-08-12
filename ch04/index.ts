// 4.1 オブジェクト型
// *************************************************
const poet = {
    born: 1935,
    name: "Mary Oliver",
};

poet['born'];
poet.name;

// poet.end; <- エラーになる

// 4.1.1　オブジェクト型の宣言
// *************************************************
let poetLater: {
    born: number;
    name: string;
};

poetLater = {
    born: 1935,
    name: "Mary Oliver",
};

// poetLater = "Sappho"; <- エラーになる

// 4.1.2　オブジェクト型のエイリアス
// *************************************************
type Poet = {
    born: number;
    name: string;
};

let poetLater2: Poet;

poetLater2 = {
    born: 1935,
    name: "Mary Oliver",
};

// poetLater2 = "Emily Dickinson"; <- エラーになる