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




