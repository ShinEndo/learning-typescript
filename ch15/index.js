var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// AnimalCountsの挙動を確認する
var animalCounts = {
    alligator: 0,
    baboon: 1,
    cat: 2,
};
// AnimalCounts2の挙動を確認する
var animalCounts2 = {
    alligator: 0,
    baboon: 1,
    cat: 2,
};
// NullableBirdVariantsの挙動を確認する
var nullableBirdVariants = {
    dove: null,
    eagle: null,
};
// ReadonlyEnvironmentalistの挙動を確認する
var readonlyEnvironmentalist = {
    area: "string",
    name: "strring",
};
// OptionalReadonlyEnvironmentalistの挙動を確認する
var optionalReadonlyEnvironmentalistt = {};
// Conservationistの挙動を確認する
var conservationist = {
    name: "string",
    catchphrase: "string",
    born: 0,
};
// WritableConservationistの挙動を確認する
var writableConservationist = {
    name: "string",
    born: 0,
};
// RequiredWritableConservationistの挙動を確認する
var requiredWritableConservationist = {
    name: "string",
    catchphrase: "string",
    born: 0,
    died: 0,
};
function createGenusData(overrides) {
    return __assign({ family: "unknown", name: "unknown" }, overrides);
}
var checkStringAgainstNumber = false;
var retrieve2 = retrieve("Birute Galdikas");
var retrieve3 = retrieve("Jane Goodall", { throwIfNotFound: Math.random() > 0.5 });
var retrieve4 = retrieve("Dian Fossey", { throwIfNotFound: true });
var matches = "Hello, world!";
var lightBlue = 'light-blue';
function extol(extolee) { }
;
extol('much 0 wow');
extol('much 123 wow');
extol('much 1.23 wow');
function checkExistence(checks) {
    checks.checkLocation();
    checks.checkName();
    checks.checkYear();
    // checks.checkWrong();
}
var config = {
    location: "unknown",
    name: "anonymous",
    year: 0,
};
function withlazyValues(configGetter) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, configGetter.locationLazy()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// type TurnIntoGettersDirect<T> = {
//   [K in keyof T as `get${K}`]: () => T[K];
// }
var someSymbol = Symbol("");
// 15.5　型演算と複雑さ
// *************************************************
