// 14　構文の拡張
// *************************************************
// 14.1　クラスのパラメータープロパティ
// *************************************************
var Engineer = /** @class */ (function () {
    function Engineer(area) {
        this.area = area;
        console.log("I work in the ".concat(area, " area"));
    }
    return Engineer;
}());
var engineer = new Engineer("mechanical").area;
var Engineer2 = /** @class */ (function () {
    function Engineer2(area) {
        this.area = area;
        console.log("I work in the ".concat(area, " area"));
    }
    return Engineer2;
}());
var engineer2 = new Engineer2("mechanical").area;
var NamedEngineer = /** @class */ (function () {
    function NamedEngineer(name, area) {
        this.area = area;
        this.fullName = "".concat(name, ", ").concat(area, " engineer");
    }
    return NamedEngineer;
}());
// 14.2　実験的なデコレーター
// *************************************************
// 14.3　enum（列挙型）
// *************************************************
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Ok"] = 200] = "Ok";
})(StatusCode || (StatusCode = {}));
// 14.3.1　自動的な数値
// *************************************************
var VisualTheme;
(function (VisualTheme) {
    VisualTheme[VisualTheme["Dark"] = 0] = "Dark";
    VisualTheme[VisualTheme["Light"] = 1] = "Light";
    VisualTheme[VisualTheme["System"] = 2] = "System";
})(VisualTheme || (VisualTheme = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Top"] = 1] = "Top";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Bottom"] = 3] = "Bottom";
    Direction[Direction["Left"] = 4] = "Left";
})(Direction || (Direction = {}));
// 14.3.2　文字列値のenum
// *************************************************
var LoadStyle;
(function (LoadStyle) {
    LoadStyle["AsNeeded"] = "as-needed";
    LoadStyle["Eager"] = "eager";
})(LoadStyle || (LoadStyle = {}));
var displayHint = 2 /* DisplayHint.Transparent */;
var DisplayHint2;
(function (DisplayHint2) {
    DisplayHint2[DisplayHint2["Opaque"] = 0] = "Opaque";
    DisplayHint2[DisplayHint2["Semitransparent"] = 1] = "Semitransparent";
    DisplayHint2[DisplayHint2["Transparent"] = 2] = "Transparent";
})(DisplayHint2 || (DisplayHint2 = {}));
var displayHint2 = DisplayHint2.Transparent;
// 14.4　名前空間
// *************************************************
var Randomized;
(function (Randomized) {
    var value = Math.random();
    console.log("My value is  ".concat(value));
})(Randomized || (Randomized = {}));
