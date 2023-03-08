const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


const playPause = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

const updateIcon = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
}

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  //get Minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60)
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`
}

const setProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
}


video.addEventListener('click', playPause)
video.addEventListener('play', updateIcon)
video.addEventListener('pause', updateIcon)
video.addEventListener('timeupdate', updateProgress)
play.addEventListener('click', playPause)
stop.addEventListener('click', stopVideo)
progress.addEventListener('click', setProgress)