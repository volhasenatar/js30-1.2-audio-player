// variables

const btnPlayPause = document.querySelector('.play-pause');
const btnNextSong = document.querySelector('#next-song');
const btnPreviousSong = document.querySelector('#previous-song');
const img = document.querySelector('.img');
const backImage = document.querySelector('img');
const songArtist = document.querySelector('#song-artist');
const songTitle = document.querySelector('#song-title');

// arrays

const images = ['img/lemonade.png', 'img/dontstartnow.png'];
const artist = ['Beyonce', 'Dua Lipa'];
const title = ['Don`t Hurt Yourself', 'Don`t Start Now'];

const audio = new Audio();
const playlist = new Array(
  'audio/beyonce.mp3',
  'audio/assets_audio_dontstartnow.mp3'
);

let i = 0;

// function playMusic

function playSongs() {
  if (audio.paused === true) {
    btnPlayPause.classList.add('pause');
    audio.play();
  } else {
    btnPlayPause.classList.remove('pause');
    audio.pause();
  }
}

// changeIndex

function changeIndex(i) {
  audio.src = playlist[i];
  img.src = images[i];
  backImage.src = images[i];
  songArtist.innerText = artist[i];
  songTitle.innerText = title[i];
}

// btnPlayPause

btnPlayPause.addEventListener('click', playSongs);

// btnNextSong

btnNextSong.addEventListener('click', () => {
  i++;
  if (i > playlist.length - 1) {
    i = 0;
  }
  changeIndex(i);
  playSongs();
});

// btnPreviousSong

btnPreviousSong.addEventListener('click', () => {
  i--;
  if (i < 0) {
    i = playlist.length - 1;
  }
  changeIndex(i);
  playSongs();
});
