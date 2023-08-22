"use strict";
// 5　関数
// *************************************************
// 5.1　関数のパラメーター
// *************************************************
// function sing(song) {
//     console.log(`Singing: ${song}`);
// }
function sing(song) {
    console.log(`Singing: ${song}`);
}
// 5.1.1　必須パラメーター
// *************************************************
function singTwo(first, second) {
    console.log(`${first} / ${second}`);
}
// singTwo("Ball and Chain"); <- エラーになる
singTwo("I will Survice", "Higher Love");
// singTwo("Go Your Own Way", "The Chain", "Dreams"); <- エラーになる
// 5.1.2　オプションパラメーター
// *************************************************
function announceSong(song, singer) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}
;
announceSong("Grrensleeves");
announceSong("Grrensleeves", undefined);
announceSong("Grrensleeves", "Sia");
function announceSongBy(song, singer) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}
// announceSongBy("Grrensleeves"); <- エラーになる
announceSongBy("Grrensleeves", undefined);
announceSongBy("Grrensleeves", "Sia");
// 5.1.3　デフォルトパラメーター
// *************************************************
function rateSong(song, rating = 0) {
    console.log(`${song} gets ${rating} / 5 stars!`);
}
rateSong("Photograph");
rateSong("Set Fire to the Rain", 5);
rateSong("Set Fire to the Rain", undefined);
// rateSong("At Last!", "100"); <- エラーになる
// 5.1.4　レストパラメーター
// *************************************************
function singAllTheSongs(singer, ...songs) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`);
    }
}
;
singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
// singAllTheSongs("Ella Fitzgerald", 2000); <- エラーになる
// 5.2　戻り値の型
// *************************************************
function singSongs(songs) {
    for (const song of songs) {
        console.log(`${song}`);
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
function singSongRecursive(songs, count = 0) {
    return songs.length ? singSongRecursive(songs.slice(1), count + 1) : count;
}
const singSongRecursive2 = (songs, count = 0) => songs.length ? singSongRecursive2(songs.slice(1), count + 1) : count;
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
// 5.3　関数の型
// *************************************************
let nothingInGivesString;
let inputAndOutput;
const songs = ["Juice", "Shake It Off", "What's Up"];
function runOnSongs(getSongAt2) {
    for (let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt2(i));
    }
}
function getSongAt2(index) {
    return `${songs[index]}`;
}
runOnSongs(getSongAt2);
function logSong(song) {
    return `${song}`;
}
// runOnSongs(logSong); <- エラーになる
// 5.3.1　関数の型と括弧
// *************************************************
let returnsStringOrUndefined;
let maybeReturnString;
// 5.3.2　パラメーターの型推論
// *************************************************
let singer;
singer = function (song) {
    return `Singing: ${song.toUpperCase()}`;
};
const songs2 = ["Juice", "Shake It Off", "What's Up"];
songs2.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
});
let stringToNumber;
stringToNumber = (input) => input.length;
function usesNumberToString(numberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString(input => `${input}! Hooray`);
// usesNumberToString(input => input * 2); <- エラーになる
// 5.4　その他の戻り値の型
// *************************************************
// 5.4.1　void
// *************************************************
function logSong2(song) {
    if (!song)
        return;
    console.log(`${song}`);
    // return true; <- エラーになる
}
let songLogger;
songLogger = (song) => {
    console.log(`${song}`);
};
songLogger("Heart of Glass");
function returnsVoid() {
    return;
}
let lazyValue;
// lazyValue = returnsVoid(); <- エラーになる
const records = [];
function saveRecords(newRecords) {
    newRecords.forEach(record => records.push(record));
    console.log(records);
}
saveRecords(['21', 'Come On Over', 'The Bodyguard']);
// 5.4.2　never
// *************************************************
function fail(message) {
    throw new Error(`Invariant failure: ${message}.`);
}
function workWithUnsafeParam(param) {
    if (typeof param !== "string") {
        fail(`param should be a string, not ${typeof param}`);
    }
    param.toUpperCase();
}
function createDate(monthOrTimestamp, day, year) {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}
createDate(1);
createDate(1, 1, 2000);
// function format(getData: () => string): string; <- エラーになる
function format(data, needle, haystack) {
    return needle && haystack ? data.replace(needle, haystack) : data;
}
