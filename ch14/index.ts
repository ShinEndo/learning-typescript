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