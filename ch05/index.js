// 5　関数
// *************************************************
// 5.1　関数のパラメーター
// *************************************************
// function sing(song) {
//     console.log(`Singing: ${song}`);
// }
function sing(song) {
    console.log("Singing: ".concat(song));
}
// 5.1.1　必須パラメーター
// *************************************************
function singTwo(first, second) {
    console.log("".concat(first, " / ").concat(second));
}
// singTwo("Ball and Chain"); <- エラーになる
singTwo("I will Survice", "Higher Love");
// singTwo("Go Your Own Way", "The Chain", "Dreams"); <- エラーになる
// 5.1.2　オプションパラメーター
// *************************************************
function announceSong(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
;
announceSong("Grrensleeves");
announceSong("Grrensleeves", undefined);
announceSong("Grrensleeves", "Sia");
function announceSongBy(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
// announceSongBy("Grrensleeves"); <- エラーになる
announceSongBy("Grrensleeves", undefined);
announceSongBy("Grrensleeves", "Sia");
// 5.1.3　デフォルトパラメーター
// *************************************************
function rateSong(song, rating) {
    if (rating === void 0) { rating = 0; }
    console.log("".concat(song, " gets ").concat(rating, " / 5 stars!"));
}
rateSong("Photograph");
rateSong("Set Fire to the Rain", 5);
rateSong("Set Fire to the Rain", undefined);
// rateSong("At Last!", "100"); <- エラーになる
// 5.1.4　レストパラメーター
// *************************************************
function singAllTheSongs(singer) {
    var songs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        songs[_i - 1] = arguments[_i];
    }
    for (var _a = 0, songs_1 = songs; _a < songs_1.length; _a++) {
        var song = songs_1[_a];
        console.log("".concat(song, ", by ").concat(singer));
    }
}
;
singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
// singAllTheSongs("Ella Fitzgerald", 2000); <- エラーになる
// 5.2　戻り値の型
// *************************************************
function singSongs(songs) {
    for (var _i = 0, songs_2 = songs; _i < songs_2.length; _i++) {
        var song = songs_2[_i];
        console.log("".concat(song));
    }
    return songs.length;
}
;
function getSongAt(songs, index) {
    return index < songs.length ? songs[index] : undefined;
}
;
// 5.2.1　明示的な戻り値の型
// *************************************************
function singSongRecursive(songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? singSongRecursive(songs.slice(1), count + 1) : count;
}
var singSongRecursive2 = function (songs, count) {
    if (count === void 0) { count = 0; }
    return songs.length ? singSongRecursive2(songs.slice(1), count + 1) : count;
};
function getSongRecordingDate(song) {
    switch (song) {
        case "Strange Fruit":
            return new Date("April 20, 1939");
        // case "Greensleeves":
        //     return "unknown"; <- エラーになる
        default:
            return undefined;
    }
}
