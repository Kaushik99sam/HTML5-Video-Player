const video = document.getElementById('video')
const play = document.getElementById('play')
const progress = document.getElementById('progress')
const Stop = document.getElementById('stop')
const timestamp = document.getElementById('timestamp')


// play & pause function

function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = '0' + String(mins)
  }
  let secs = Math.floor(video.currentTime % 60)
  if (secs < 10) {
    secs = '0' + String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

// Set timestamp mapping to video progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100
}

// Stop video
function stopVideo() {
  video.currentTime = 0
  video.pause()
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)
play.addEventListener('click', toggleVideoStatus)
Stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)
