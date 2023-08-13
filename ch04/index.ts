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

//const missingRequired: Writers = {}; <- エラーになる

// 4.3　オブジェクト型の合併
// *************************************************
// 4.3.1　オブジェクト型の合併型の型推論
// *************************************************
const poem4 = Math.random() > 0.5 ? {name: "The Double Image", pages: 7 } : {name: "Her Kind", rhymes: true};
poem4.name;
poem4.pages;
poem4.rhymes;

// 4.3.2　オブジェクト型の合併型の明示的型付け
// *************************************************
type PoemWithPages = {
    name: string;
    pages: number;
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
};

type Poem5 = PoemWithPages | PoemWithRhymes;

const poem5: Poem5 = Math.random() > 0.5 ? {name: "The Double Image", pages: 7 } : {name: "Her Kind", rhymes: true};
poem5.name;
// poem5.pages; <- エラーになる
// poem5.rhymes; <- エラーになる

// 4.3.3　オブジェクト型の絞り込み
// *************************************************
if("pages" in poem5) {
    poem5.pages;
} else {
    poem5.rhymes;
}

// 4.3.4　タグ付き合併型
// *************************************************
type PoemWithPages6 = {
    name: string;
    pages: number;
    type: 'pages';
};

type PoemWithRhymes6 = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
};

type Poem6 = PoemWithPages6 | PoemWithRhymes6;

const poem6: Poem6 = Math.random() > 0.5 ? {name: "The Double Image", pages: 7, type: 'pages'} : {name: "Her Kind", rhymes: true, type: 'rhymes'};
poem6.name;

if(poem6.type === "pages") {
    console.log(`It's got pages: ${poem6.pages}`);
} else {
    console.log(`It rhymes: ${poem6.rhymes}`);
}

// 4.4　交差型
// *************************************************
type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;

type ShortPoem = {author: string} & (
    {kigo: string; type:"haiku"} | {meter: number; type: "villanelle"}
);

const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};

// const oneArt: ShortPoem = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
// } <- エラーになる

// 4.4.1　交差型の危険性
// *************************************************
// 4.4.1.1　長い割り当て可能性エラーのメッセージ
// *************************************************
type ShortPoemBase = {author: string};
type Haiku = ShortPoemBase & {kigo: string; type: "haiku"};
type Villanelle = ShortPoemBase & {meter: number; type: "villanelle"};
type ShortPoem2 = Haiku | Villanelle;

// const oneArt2: ShortPoem2 = {
//     author: "Elizabeth Bishop",
//     type: "villanelle",
// } <- エラーになる

// 4.4.1.2　never
// *************************************************
type NotPossible = string & number;

// const notNumber: NotPossible = 0; <- エラーになる

// const notString: NotPossible = ''; <- エラーになる
