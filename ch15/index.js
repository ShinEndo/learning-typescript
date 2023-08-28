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
// const checkStringAgainstNumber2 : CheckStringAgainstNumber = true;
