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

// 15.1.1　マップ型とシグネチャ
// *************************************************
