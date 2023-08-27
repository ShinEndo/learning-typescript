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

// 15.2　修飾子の変更
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
