// 5　関数
// *************************************************
// 5.1　関数のパラメーター
// *************************************************
// function sing(song) {
//     console.log(`Singing: ${song}`);
// }
function sing(song: string) {
    console.log(`Singing: ${song}`);
}

// 5.1.1　必須パラメーター
// *************************************************
function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`);
}

// singTwo("Ball and Chain"); <- エラーになる
singTwo("I will Survice", "Higher Love");
// singTwo("Go Your Own Way", "The Chain", "Dreams"); <- エラーになる

// 5.1.2　オプションパラメーター
// *************************************************
function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if(singer) {
        console.log(`Singer: ${singer}`);
    }
};

announceSong("Grrensleeves");
announceSong("Grrensleeves",undefined);
announceSong("Grrensleeves","Sia");

function announceSongBy(song: string, singer: string | undefined){
    console.log(`Song: ${song}`);

    if(singer) {
        console.log(`Singer: ${singer}`);
    }
}

// announceSongBy("Grrensleeves"); <- エラーになる
announceSongBy("Grrensleeves",undefined);
announceSongBy("Grrensleeves","Sia");

// 5.1.3　デフォルトパラメーター
// *************************************************
function rateSong(song: string, rating= 0){
    console.log(`${song} gets ${rating} / 5 stars!`);
}
rateSong("Photograph");
rateSong("Set Fire to the Rain", 5);
rateSong("Set Fire to the Rain", undefined);
// rateSong("At Last!", "100"); <- エラーになる

// 5.1.4　レストパラメーター
// *************************************************
function singAllTheSongs(singer: string, ...songs: string[]) {
    for ( const song of songs) {
        console.log(`${song}, by ${singer}`);
    } 
};

singAllTheSongs("Alicia Keys");
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
// singAllTheSongs("Ella Fitzgerald", 2000); <- エラーになる

// 5.2　戻り値の型
// *************************************************
function singSongs(songs: string[]) {
    for (const song of songs) {
        console.log(`${song}`);
    }
    return songs.length;
};

function getSongAt(songs: string[], index: number){
    return index < songs.length ? songs[index] : undefined;
};

// 5.2.1　明示的な戻り値の型
// *************************************************
function singSongRecursive(songs: string[], count=0):number {
    return songs.length ? singSongRecursive(songs.slice(1), count + 1) : count;
}

const singSongRecursive2 = (songs: string[], count=0) : number => songs.length ? singSongRecursive2(songs.slice(1), count + 1) : count;

function getSongRecordingDate(song:string) : Date | undefined {
    switch(song) {
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
let nothingInGivesString: () => string;

let inputAndOutput: (songs: string[], count?: number) => number;

const songs = ["Juice", "Shake It Off", "What's Up"];

function runOnSongs(getSongAt2: (index:number) => string){
    for(let i = 0; i < songs.length; i += 1) {
        console.log(getSongAt2(i));
    }
}
function getSongAt2(index:number){
    return `${songs[index]}`
}

runOnSongs(getSongAt2);

function logSong(song: string) {
    return `${song}`;
}

// runOnSongs(logSong); <- エラーになる

// 5.3.1　関数の型と括弧
// *************************************************
let returnsStringOrUndefined: () => string | undefined;
let maybeReturnString: (()=>string) | undefined;

// 5.3.2　パラメーターの型推論
// *************************************************
let singer: (song: string) => string;

singer = function(song) {
    return `Singing: ${song.toUpperCase()}`;
};

const songs2 = ["Juice", "Shake It Off", "What's Up"];
songs2.forEach((song,index) => {
    console.log(`${song} is at index ${index}`);
});

// 5.3.3　関数型エイリアス
// *************************************************
type StringToNumber = (input: string) => number;
let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length;

// stringToNumber = (input) => input.toUpperCase(); <- エラーになる

type NumberToString = (input:number) => string;
function usesNumberToString(numberToString: NumberToString){
    console.log(`The string is: ${numberToString(1234)}`);
}
usesNumberToString(input => `${input}! Hooray`);
// usesNumberToString(input => input * 2); <- エラーになる

// 5.4　その他の戻り値の型
// *************************************************
// 5.4.1　void
// *************************************************
function logSong2(song: string | undefined):void{
    if(!song) return;
    console.log(`${song}`);

    // return true; <- エラーになる
}

let songLogger: (song:string) => void;

songLogger = (song) => {
    console.log(`${song}`);
};
songLogger("Heart of Glass");

function returnsVoid() {
    return;
}

let lazyValue: string | undefined;

// lazyValue = returnsVoid(); <- エラーになる

const records: string[] = [];

function saveRecords(newRecords: string[]) {
    newRecords.forEach(record => records.push(record));
    console.log(records);
}

saveRecords(['21', 'Come On Over','The Bodyguard']);

// 5.4.2　never
// *************************************************
function fail(message: string): never {
    throw new Error(`Invariant failure: ${message}.`);
}

function workWithUnsafeParam(param: unknown){
    if(typeof param !== "string") {
        fail(`param should be a string, not ${typeof param}`);
    }
    param.toUpperCase();
}




