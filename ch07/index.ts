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

