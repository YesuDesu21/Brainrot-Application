const video = document.querySelector('.content video')
const volumeButton = document.getElementById('volume-button')
const leftButton = document.getElementById('left-button')
const rightButton = document.getElementById('right-button')
const pauseButton = document.getElementById('pause-button')
const powerButton = document.getElementById('power-button')

const bootUpVideo = "assets/videos/gameboyBootUp.mp4"

const videos = [
  { path: 'assets/videos/video1.mp4', title: 'Video 1' },
  { path: 'assets/videos/video2.mp4', title: 'Video 2' },
  { path: 'assets/videos/video3.mp4', title: 'Video 3' }
]

//Boot up video first
disableButtons()
bootUp()

let currentVideoIndex = 0


function bootUp(){
  video.innerHTML = `<source src="${bootUpVideo}" type="video/mp4">`
  video.load()
  video.loop = false
  // loadVideo(currentVideoIndex)
  setTimeout(() => loadVideo(currentVideoIndex), 6000);
}

function loadVideo(currentVideoIndex) {
  enableButtons()
  video.innerHTML = `<source src="${videos[currentVideoIndex].path}" type="video/mp4">`;
  video.load();
  video.loop = true;
}

volumeButton.addEventListener('click', function () {
  video.muted = !video.muted; 

  if (video.muted) {
    volumeButton.classList.add('muted')
  } else {
    volumeButton.classList.remove('muted')
  }
})

leftButton.addEventListener('click', function () {
  currentVideoIndex--;
  if (currentVideoIndex < 0) {
    currentVideoIndex = videos.length - 1;  // Wrap to end
  }
  loadVideo(currentVideoIndex);
})

rightButton.addEventListener('click', function () {
   currentVideoIndex++;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0;  // Wrap to beginning
  }
  loadVideo(currentVideoIndex);
})

pauseButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    pauseButton.classList.remove('paused')
  } else {
    video.pause();
    pauseButton.classList.add('paused')
  }
})

powerButton.addEventListener('click', function () {
  window.electronAPI.quitApp()
})

function disableButtons() {
  leftButton.disabled = true;
  rightButton.disabled = true;
  pauseButton.disabled = true;
}
function enableButtons() {
  leftButton.disabled = false;
  rightButton.disabled = false;
  pauseButton.disabled = false;
}