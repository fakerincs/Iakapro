const playlist = [
  { id: '4n1Kh04GRww', title: 'Crossroad (PSYQUI Remix) (feat. Luschel)', type: 'youtube' },
  { id: 'Tv5s9_UAmdU', title: 'PSYQUI Medley', type: 'youtube' },
  { id: 'qkBB5LrcwZ4', title: 'icesawder Stardom', type: 'youtube' },
  { id: '3ad4NsEy1tg', title: 'テレキャスター･ストライプ', type: 'youtube' },
  { id: '2QIp-YGau7o', title: 'Allure', type: 'youtube' },
  //{ id: 'Recording.mp3', title: 'start', type: 'local' }
];
let svol = 50;
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;
document.getElementById("volumeSlider").max = playlist.length;

function shuffleIndices() {
  shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
  //[shuffledIndices[1], shuffledIndices[shuffledIndices.length - 1]] = [shuffledIndices[shuffledIndices.length - 1], shuffledIndices[1]];
}

function createPlayer() {
  const currentMedia = playlist[shuffledIndices[currentIndex]];
  if (currentIndex != 0){ 
    if (playlist[shuffledIndices[currentIndex - 1]].type === 'youtube'){
      if (!player.paused()) {
        player.pause();
      }
    } else if (!playerl.paused){
      playerl.pause();
    }
  }
  
  if (currentMedia.type === 'youtube') {
    player.src({
      src: `https://www.youtube.com/embed/${currentMedia.id}`,
      type: 'video/youtube',
      autoplay: 'any',//these dont actuall chagne anything
      preload: 'auto',
      audioOnlyMode: true
    });
    //player.load();
    //player.ready(player.play());
    player.volume(svol / 100);
    var myMiddleware = function(player) {//i CANNOT believe this worked
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    videojs.use('*', myMiddleware);
    
  } else if (currentMedia.type === 'local') {
    
    playerl = new Audio(currentMedia.id);
    playerl.muted = true;
    playerl.play();
    playerl.muted = false;
    playerl.volume = (svol / 300);

    playerl.addEventListener('ended', playNextSong());

  }

  // Display the current song title
  const currentSongElement = document.getElementById('currentSong');
  currentSongElement.textContent = `Now Playing: ${currentMedia.title}`;

  // Play/Pause button functionality
  const playPauseButton = document.getElementById('playPauseButton');
  playPauseButton.addEventListener('click', togglePlayback);

  // Skip button functionality
  const skipButton = document.getElementById('skipButton');
  skipButton.addEventListener('click', skipMedia);

  // Volume slider functionality
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    changeVolume(volumeSlider.value);
  });

  // Playlist slider functionality
  const indexSlider = document.getElementById('indexSlider');
  indexSlider.addEventListener('input', () => {
    setTimeout(playNextSong(), 7000, indexSlider.value);
  });
}



function togglePlayback() {
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  } else if (playerl.paused){
      playerl.play();
  } else {
    playerl.pause();
  }
}


function playNextSong(index = -1) {
  if (index !== -1) {
    currentIndex = index;
    if (currentIndex >= playlist.length) {
      currentIndex = playlist.length - 1;
    }
    createPlayer();
    return;
  }
  else {
    currentIndex++;
    if (currentIndex >= playlist.length) {
      currentIndex = 0;
    }
    createPlayer();
  }
}

function skipMedia() {

  if (playlist[shuffledIndices[currentIndex]].type === 'local'){
    if (playerl.currentTime !== undefined) {
      playerl.currentTime = playerl.duration - 1;
    }
  }
  else{
    if (player.currentTime() !== undefined) {
      player.currentTime(player.duration() - 1);
    }
  }
}

function changeVolume(volume) {
  svol = volume
  player.volume(volume / 100);
  if (playerl){
    playerl.volume = (volume / 300);
  }
}

shuffleIndices();
player = videojs('player', {
  techOrder: ['youtube'],
  autoplay: 'any',
  preload: 'auto',
  inactivityTimeout: 0,
  audioOnlyMode: true,
  //width: 130,
  //height: 100,
});


function ender(){
  if(playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    playNextSong();
  }
}
player.on('ended', ender);
createPlayer();
