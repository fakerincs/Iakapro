
const playlist = [
  { id: '9waOYWMw_6A', title: 'Geoxor @ Amethyst 2023 MIX', type: 'youtube' },
  { id: 'wYaIH0JZ4dc', title: 'Best of Kawaii Pop 2020 Mix (J-Pop, Future Core,...) by Appu', type: 'youtube' },
  { id: 'pV1GoNi5mFs', title: 'Yunomix vol. 4', type: 'youtube' },
  { id: 'msnNDZW0R-w', title: 'Cytochrome C - Future Core Mix #8', type: 'youtube' },
  { id: 'UNaL8tbZotM', title: '1 Hour Most Popular Tracks by Geoxor「NON-STOP PLAYLIST」HQ Audio', type: 'youtube' },
  { id: '3cSY73RzWhE', title: '1 Hour Most Popular Songs by PSYQUI (NON-STOP Collection Vol. 1 + BONUS TRACK)', type: 'youtube' },
  { id: '2QIp-SoBAQgl0zbo', title: 'Smooth Future Bass Collection For Yall Vol. 1', type: 'youtube' },
  { id: 'g1bePvkIXtQ', title: 'Nightcore Gaming Mix 2021  ', type: 'youtube' },
];
let svol = 50;
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;
let videoOff = true;

if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("playCount")==null){
    localStorage.setItem("playCount", 0);
  }
  document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
}

function shuffleIndices() {
  shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
}

function toggleVideo(){
  if (videoOff){
    videoOff = false;
    videoButton.textContent = "Video On";
    player.audioOnlyMode(videoOff);
    document.getElementById("videoSlider").style.width ="calc(100% - 350px)"; 
    
  }
  else{
    videoOff = true;
    videoButton.textContent = "No Video";
    player.audioOnlyMode(videoOff);
    document.getElementById("videoSlider").style.width ="calc(100% - 50px)"; 
    document.getElementById("playerContainer").style.inset =""; 
    document.getElementById("player").style.width ="10px"; 
    document.getElementById("player").style.height ="10px"; 
  }
}
// Display the current song title
const currentSongElement = document.getElementById('currentSong');
//Toggle Video
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
slider.addEventListener('input', videoSeek);


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
    if (!player){
      player = videojs('player', {
        techOrder: ['youtube'],
        autoplay: 'any',
        preload: 'auto',
        inactivityTimeout: 0,
        audioOnlyMode: videoOff,
        controls: false,
        sources: [{
          type: 'video/youtube',
          src: `https://www.youtube.com/embed/${currentMedia.id}`
        }]
        //width: 130,
        //height: 100,
      }, function onPlayerReady() {
        videojs.log('Your player is ready!');
        this.play();
        this.on('ended', ender);
      });
    }
    else{
      player.src({
        src: `https://www.youtube.com/embed/${currentMedia.id}`,
        type: 'video/youtube',
      });
    }
    document.getElementById("player").style.display = "inline-block";
    player.volume(svol / 100);
    var myMiddleware = function(player) {//i CANNOT believe this worked
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    videojs.use('*', myMiddleware);
    player.on('timeupdate', videoUpdate);


  } else if (currentMedia.type === 'local') {
    document.getElementById("player").style.display = "none";
    playerl = new Audio(currentMedia.id);
    playerl.muted = true;
    playerl.play();
    playerl.muted = false;
    playerl.volume = (svol / 300);
    playerl.addEventListener('ended', function(){
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))+1);
      document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
      playNextSong();
    });

    playerl.addEventListener('timeupdate', audioUpdate);
  }
  
  currentSongElement.textContent = `${currentMedia.title}`;
  document.getElementById(`${currentIndex}`).style.color = 'rgba(252, 252, 252, 1)';
}
function videoSeek(){
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(slider.value);
  }
  else{
    playerl.currentTime = slider.value;
  }
}
function audioUpdate(){//honestly at this point i just dont care that much plus idk how to fix without weird logic thing thats just stupid
  slider.value = playerl.currentTime;
  slider.max = playerl.duration - 1.5;
}
function videoUpdate(){
  slider.max = player.duration() - 1.5;
  slider.value = player.currentTime();
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
  document.getElementById(`${currentIndex}`).style.color = "var(--played-color)";
  if (index != -1) {
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
      playerl.currentTime = playerl.duration - 0.1;
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))-1);

    }
  }
  else{
    if (player.currentTime() !== undefined) {
      player.currentTime(player.duration() - 0.1);
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))-1);

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

playerl = new Audio('Recording.mp3');
playerl.pause();
playerl.addEventListener('ended', function(){
  playNextSong();
});

function generateUpcoming(){
  let upcoming = document.getElementById("upcoming");
  for (i=0; i < Math.floor(playlist.length); i++){
    upcoming.insertAdjacentHTML("beforeend", `<li><span id=\"${i}\">` + `${playlist[shuffledIndices[i]].title}(${playlist[shuffledIndices[i]].type})` + "</span></li>");
    document.getElementById(`${i}`).addEventListener('click', handleChoose);
  }
}
generateUpcoming();
function handleChoose(event){
  var itemId = event.target.id;
  playNextSong(itemId);
}

function ender(){
  if(playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))+1);
    document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
    playNextSong();
  }
}

createPlayer();
