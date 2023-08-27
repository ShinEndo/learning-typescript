// 14　構文の拡張
// *************************************************
// 14.1　クラスのパラメータープロパティ
// *************************************************
class Engineer {
    readonly area: string;

    constructor(area:string) {
        this.area = area;
        console.log(`I work in the ${area} area`);
    }
}

const engineer = new Engineer("mechanical").area;

class Engineer2 {
    constructor(readonly area: string) {
        console.log(`I work in the ${area} area`);
    }
}

const engineer2 = new Engineer2("mechanical").area;

class NamedEngineer {
    fullName: string;

    constructor(name: string, public area: string) {
        this.fullName = `${name}, ${area} engineer`;
    }
}

// 14.2　実験的なデコレーター
// *************************************************
// 14.3　enum（列挙型）
// *************************************************
enum StatusCode {
    InternalServerError = 500,
    NotFound = 404,
    Ok = 200,
}

// 14.3.1　自動的な数値
// *************************************************
enum VisualTheme {
    Dark,
    Light,
    System
}

enum Direction {
    Top = 1,
    Right,
    Bottom,
    Left,
}

// 14.3.2　文字列値のenum
// *************************************************
enum LoadStyle {
    AsNeeded = "as-needed",
    Eager = "eager",
}

// 14.3.3　const enum（定数列挙型）
// *************************************************
const enum DisplayHint {
    Opaque = 0,
    Semitransparent,
    Transparent
}

let displayHint = DisplayHint.Transparent;

enum DisplayHint2 {
    Opaque = 0,
    Semitransparent,
    Transparent
}

let displayHint2 = DisplayHint2.Transparent;



