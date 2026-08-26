interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2020
    }
}

const { song: anotherSong, songDuration: duration, details } = audioPlayer;

const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Song Duration: ', duration);
// console.log('Author: ', author);

const [personaje1, personaje2, personaje3]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 1: ', personaje1 || "Personaje no encontrado");
console.log('Personaje 2: ', personaje2 || "Personaje no encontrado");
console.log('Personaje 3: ', personaje3 || "Personaje no encontrado");

console.error('Personaje 4: ', dbz[3] || "Personaje no encontrado");

console.table(dbz);

export { };