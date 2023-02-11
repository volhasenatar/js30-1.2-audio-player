// variables

const btnPlayPause = document.querySelector('.play-pause');
const btnNextSong = document.querySelector('#next-song');
const btnPreviousSong = document.querySelector('#previous-song');
const img = document.querySelector('.img');
const backImage = document.querySelector('img');
const songArtist = document.querySelector('#song-artist');
const songTitle = document.querySelector('#song-title');
const time = document.querySelector('.time');

const song = document.querySelector('#song');
const progress = document.querySelector('#progress-bar');
const current = document.querySelector('.current');

// arrays

const images = ['img/lemonade.png', 'img/dontstartnow.png'];
const artist = ['Beyonce', 'Dua Lipa'];
const title = ['Don`t Hurt Yourself', 'Don`t Start Now'];

const playlist = ['audio/beyonce.mp3', 'audio/assets_audio_dontstartnow.mp3'];

let i = 0;

// function playMusic

function playSongs() {
  if (song.paused === true) {
    btnPlayPause.classList.add('pause');
    img.classList.add('img-bigger');

    setInterval(() => {
      progress.value = song.currentTime;
    }, 500);

    song.play();
  } else {
    btnPlayPause.classList.remove('pause');
    img.classList.remove('img-bigger');
    song.pause();
  }

  setTimeout(() => {
    let s = parseInt(song.duration % 60);
    let m = parseInt((song.duration / 60) % 60);
    time.innerText = m + ':' + s;
    song.addEventListener(
      'timeupdate',
      () => {
        s = parseInt(song.currentTime % 60);
        m = parseInt((song.currentTime / 60) % 60);
        current.innerText = m + ':' + s;
      },
      false
    );
  }, 100);
}

// changeIndex

function changeIndex(i) {
  song.src = playlist[i];
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

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

progress.onchange = function () {
  song.currentTime = progress.value;
};
