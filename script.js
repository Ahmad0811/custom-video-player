const video = document.getElementById('video');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');
const stop = document.getElementById('stop');
const play = document.getElementById('play');

// Play & Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause();
    }
}

// update play/pause
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// set Video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}
// update progress & timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    // get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // get secs
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

// Stop Video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)