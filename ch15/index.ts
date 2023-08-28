// 15　型演算
// *************************************************
// 15.1　マップ型
// *************************************************
type Animals = "alligator" | "baboon" | "cat";

type AnimalCounts = {
  [K in Animals]: number;
};

// AnimalCountsの挙動を確認する
const animalCounts: AnimalCounts = {
  alligator: 0,
  baboon: 1,
  cat: 2,
};

// 15.1.1　別の型に基づくマップ型
// *************************************************
interface AnimalVariants {
  alligator: boolean;
  baboon: number;
  cat: string;
}

type AnimalCounts2 = {
  [K in keyof AnimalVariants]: number;
};

// AnimalCounts2の挙動を確認する
const animalCounts2: AnimalCounts2 = {
  alligator: 0,
  baboon: 1,
  cat: 2,
};

interface BirdVariants {
  dove: string;
  eagle: boolean;
}

type NullableBirdVariants = {
  [K in keyof BirdVariants]: BirdVariants[K] | null;
};

// NullableBirdVariantsの挙動を確認する
const nullableBirdVariants: NullableBirdVariants = {
  dove: null,
  eagle: null,
};

// 15.1.1.1　マップ型とシグネチャ
// *************************************************
interface Researcher {
  researchMethod(): void;
  researchProperty: () => string;
}

type JustProperties<T> = {
  [K in keyof T]: T[K];
};

type ResearcherProperties = JustProperties<Researcher>;

// 15.1.2　修飾子の変更
// *************************************************
interface Environmentalist {
  area: string;
  name: string;
}

type ReadonlyEnvironmentalist = {
  readonly [K in keyof Environmentalist]: Environmentalist[K];
};

type OptionalReadonlyEnvironmentalist = {
  [K in keyof ReadonlyEnvironmentalist]?: ReadonlyEnvironmentalist[K];
};

// ReadonlyEnvironmentalistの挙動を確認する
const readonlyEnvironmentalist: ReadonlyEnvironmentalist = {
  area: "string",
  name: "strring",
};

// OptionalReadonlyEnvironmentalistの挙動を確認する
const optionalReadonlyEnvironmentalistt: OptionalReadonlyEnvironmentalist = {};

interface Conservationist {
  name: string;
  catchphrase?: string;
  readonly born: number;
  readonly died?: number;
}

type WritableConservationist = {
  -readonly [K in keyof Conservationist]: Conservationist[K];
};

type RequiredWritableConservationist = {
  [K in keyof WritableConservationist]-?: WritableConservationist[K];
};

// Conservationistの挙動を確認する
const conservationist: Conservationist = {
  name: "string",
  catchphrase: "string",
  born: 0,
};

// WritableConservationistの挙動を確認する
const writableConservationist: WritableConservationist = {
  name: "string",
  born: 0,
};

// RequiredWritableConservationistの挙動を確認する
const requiredWritableConservationist: RequiredWritableConservationist = {
  name: "string",
  catchphrase: "string",
  born: 0,
  died: 0,
};

// 15.1.3　ジェネリックマップ型
// *************************************************
type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Species {
  genus: string;
  name: string;
}

type ReadonlySpecies = MakeReadonly<Species>;

interface GenusData {
  family: string;
  name: string;
}

type MakeOptinal<T> = {
  [K in keyof T]?: T[K];
};

type OptionalGenusData = MakeOptinal<GenusData>;

function createGenusData(overrides?: MakeOptinal<GenusData>): GenusData {
  return {
    family: "unknown",
    name: "unknown",
    ...overrides,
  };
}

// 15.2　条件型
// *************************************************
type CheckStringAgainstNumber = string extends number ? true: false;
const checkStringAgainstNumber : CheckStringAgainstNumber = false;
// const checkStringAgainstNumber2 : CheckStringAgainstNumber = true;

// 15.2.1　ジェネリック条件型
// *************************************************
type CheckAgainstNumber<T> = T extends number ? true : false;

// 型：false
type CheckString = CheckAgainstNumber<'parakeet'>;

// 型：true
type CheckString2 = CheckAgainstNumber<1891>;

// 型：true
type CheckString3 = CheckAgainstNumber<number>;

type CallableSetting<T> = T extends () => any ? T : () => T;

//型：() => number[]
type GetNumbersSetting = CallableSetting<()=>number[]>;

//型：() => string
type StringSetting = CallableSetting<string>;

interface QueryOptions {
  throwIfNotFound: boolean;
}

type QueryResult<Options extends QueryOptions> = Options["throwIfNotFound"] extends true ? string: string|undefined;

declare function retrieve<Options extends QueryOptions>(
  key: string,options?: Options,
): Promise<QueryResult<Options>>;

const retrieve2 = retrieve("Birute Galdikas");
const retrieve3 = retrieve("Jane Goodall", {throwIfNotFound: Math.random() > 0.5});
const retrieve4 = retrieve("Dian Fossey",{ throwIfNotFound: true});

// 15.2.2　型の分配
// *************************************************
type ArrayifyUnlessString<T> = T extends string ? T : T[];

type HaldArrayified = ArrayifyUnlessString<string | number>;

// 15.2.3　inferによる型情報の取得
// *************************************************
type ArrayItems<T> = T extends (infer Item)[] ? Item : T;

// 型：string
type StringItem = ArrayItems<string>;

// 型：string
type StringArrayItem = ArrayItems<string[]>;

// 型：string[]
type String2DItem = ArrayItems<string[][]>

type ArrayItemsRecursive<T> = T extends (infer Item)[] ? ArrayItemsRecursive<Item> : T;

// 型：string
type StringItem2 = ArrayItemsRecursive<string>;

// 型：string
type StringArrayItem2 = ArrayItemsRecursive<string[]>;

// 型：string
type String2DItem2 = ArrayItemsRecursive<string[][]>

// 15.2.4　マップ条件
// *************************************************
type MakeAllMembersFunctions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : () => T[K]
};

type MemberFunctions = MakeAllMembersFunctions<{
  alreadyFunction: () => string,
  notYetFunction: number,
}>;

