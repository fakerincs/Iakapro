const playlist = [
  { id: '9waOYWMw_6A', title: 'Geoxor @ Amethyst 2023 MIX', type: 'youtube' },
  { id: 'wYaIH0JZ4dc', title: 'Best of Kawaii Pop 2020 Mix (J-Pop, Future Core,...) by Appu', type: 'youtube' },
  { id: 'pV1GoNi5mFs', title: 'Yunomix vol. 4', type: 'youtube' },
  { id: 'msnNDZW0R-w', title: 'Cytochrome C - Future Core Mix #8', type: 'youtube' },
  { id: 'UNaL8tbZotM', title: '1 Hour Most Popular Tracks by Geoxor「NON-STOP PLAYLIST」HQ Audio', type: 'youtube' },
  { id: '3cSY73RzWhE', title: '1 Hour Most Popular Songs by PSYQUI (NON-STOP Collection Vol. 1 + BONUS TRACK)', type: 'youtube' },
  { id: '2QIp-SoBAQgl0zbo', title: 'Smooth Future Bass Collection For Yall Vol. 1', type: 'youtube' },
  { id: 'g1bePvkIXtQ', title: 'Nightcore Gaming Mix 2021  ', type: 'youtube' },
  //{ id: 'Recording.mp3', title: 'start', type: 'local' }
];
let svol = 50;
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;
let start = true;
let videoOff = true;


function shuffleIndices() {
  shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
  //[shuffledIndices[1], shuffledIndices[shuffledIndices.length - 1]] = [shuffledIndices[shuffledIndices.length - 1], shuffledIndices[1]];
}

function toggleVideo(){
  if (videoOff){
    videoOff = false;
    videoButton.textContent = "Video Off";
    player.audioOnlyMode = false;
    
  }
  else{
    videoOff = true;
    videoButton.textContent = "Video On";
    player.audioOnlyMode = true;
  }

}
// Display the current song title
const currentSongElement = document.getElementById('currentSong');

const videoButton = document.getElementById('videoButton');
videoButton.addEventListener('click', toggleVideo);

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

var slider = document.getElementById('videoSlider');
  // Add an event listener to the slider to control video time
  slider.addEventListener('input', function() {
    var time = player.duration() * (slider.value / 100);
    player.currentTime(time);
});

// Update the slider as the video plays


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
      audioOnlyMode: videoOff
    });
    //player.load();
    //player.ready(player.play());
    player.volume(svol / 100);
    
    videojs.use('*', myMiddleware);
    
  } else if (currentMedia.type === 'local') {
    
    playerl = new Audio(currentMedia.id);
    playerl.muted = true;
    playerl.play();
    playerl.muted = false;
    playerl.volume = (svol / 300);

    playerl.addEventListener('ended', playNextSong());

  }
  currentSongElement.textContent = `${currentMedia.title}`;
  document.getElementById(`${currentIndex}`).style.color = 'rgba(252, 252, 252, 1)';
  slider.max = player.length;
  player.on('timeupdate', function() {
    var currentTime = player.currentTime();
    var duration = player.duration();
    slider.value = (currentTime / duration) * 100;
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
  document.getElementById(`${currentIndex}`).style.color = '#78fcca';
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
function generateUpcoming(){
  let upcoming = document.getElementById("upcoming");
  for (i=0; i < Math.floor(playlist.length); i++){
    upcoming.insertAdjacentHTML("beforeend", `<li id=\"${i}\"><span>` + `${playlist[shuffledIndices[i]].title}(${playlist[shuffledIndices[i]].type})` + "</span></li>");
    document.getElementById(`${i}`).addEventListener('click', handleChoose);
  }
}
generateUpcoming();
function handleChoose(event){
  var itemId = event.target.id;
  playNextSong(itemId);
}


var myMiddleware = function(player) {//i CANNOT believe this worked
  return {
    setMuted: function(muted) {
      return false;
    }
  };
};
function ender(){
  if(playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    playNextSong();
  }
}
player.on('ended', ender);
createPlayer();
