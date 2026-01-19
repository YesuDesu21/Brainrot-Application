const video = document.querySelector('video')
const volumeButton = document.getElementById('volume-button')
const leftButton = document.getElementById('left-button')
const rightButton = document.getElementById('right-button')
const pauseButton = document.getElementById('pause-button')
const powerButton = document.getElementById('power-button')

const videos = [
  { path: 'video1.mp4', title: 'Video 1' },
  { path: 'video2.mp4', title: 'Video 2' },
  { path: 'video3.mp4', title: 'Video 3' }
]

volumeButton.addEventListener('click', function(){

})

leftButton.addEventListener('click', function(){
    
})

rightButton.addEventListener('click', function(){
    
})

pauseButton.addEventListener('click', function(){
    
})

powerButton.addEventListener('click', function(){
    window.electronAPI.quitApp()
})