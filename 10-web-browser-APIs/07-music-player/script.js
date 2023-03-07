const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('plev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey', 'summer', 'ukulele'];

let songIndex = 1;


//Initially load song
loadSong(songs[songIndex]);

const loadSong = (song) => {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `image/${song}.jpg`;
}
