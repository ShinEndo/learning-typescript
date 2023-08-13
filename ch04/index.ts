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


// 4.2 構造的型付け
// *************************************************
type WithFirstName = {
    firstName: string;
}

type WithLastName = {
    lastName: string;
}

const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};

let withFirstName: WithFirstName = hasBoth;
let withLastName: WithLastName = hasBoth;

type FirstAndLastNames = {
    first: string;
    last: string;
};

const hasBoth2: FirstAndLastNames = {
    first: "Sarojini",
    last: "Naidu",
};

// const hasOnlyOne: FirstAndLastNames = {
//     first: "Sappho"
// } <- エラーになる

type TimeRange = {
    start: Date;
};

// const hasStartString: TimeRange = {
//     start: "1879-02-13";
// } <- エラーになる

// 4.2.2 過剰なプロパティチェック
// *************************************************
type Poet3 = {
    born: number;
    name: string;
};

const poetMatch: Poet3 = {
    born: 1928,
    name: "Maya Angelou",
};

// const extraProperty: Poet3 = {
//     activity:"walking",
//     born: 1935,
//     name: "Mary Oliver",
// }; <- エラーになる

const poetMatch2 = {
    born: 1928,
    name: "Maya Angelou",
} satisfies Poet3;

// const extraProperty2 = {
//     activity:"walking",
//     born: 1935,
//     name: "Mary Oliver",
// } satisfies Poet3; <- エラーになる

type Ingredient = {
    name: string;
    amount: string | undefined;
};

const soySoauce = {
    name: "醤油",
    amount: "大さじ１",
};

const soySauceWithSatisfies = {
    name: "醤油",
    amount: "大さじ１",
} satisfies Ingredient;

const soySauceWithTypeAnnotation: Ingredient = {
    name: "醤油",
    amount: "大さじ１",
};

soySoauce.amount.length;
soySauceWithSatisfies.amount.length;
// soySauceWithTypeAnnotation.amount.length; <- エラーになる

const existingObject = {
    activity: "walking",
    born: 1935,
    name: "Mary Oliver",
};

const extraPropertyButOK: Poet3 = existingObject;

// 4.2.3 ネストされたオブジェクト型
// *************************************************
type Poem = {
    author: {
        firstName: string;
        lastName: string;
    };
    name: string;
};

const PoemMatch: Poem = {
    author: {
        firstName: "Sylvia",
        lastName: "Plash",
    },
    name: "Lady Lazarus",
};

// const PoemMisMatch: Poem = {
//     author: {
//         name: "Sylvia Plash",
//     }
// } <- エラーになる

type Author = {
    firstName: string;
    lastName: string;
};

type Poem2 = {
    author: Author;
    name: string;
};

// const poemMismatch2: Poem2 = {
//     author: {
//         name: "Sylvia Plash",
//     }
// }; <- エラーになる

// 4.2.4 オプションプロパティ
// *************************************************
type Book = {
    author?: string;
    pages: number;
};

const ok: Book = {
    author: "Rita Dove",
    pages: 80,
};

// const missing: Book = {
//     author: "Rita Dove",
// } <- エラーになる

type Writers = {
    author: string | undefined;
    editor?: string;
};

const hasRequired: Writers = {
    author: undefined,
};

const missingRequired: Writers = {};