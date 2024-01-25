var currentname = "default(c)";//and i thought i could escape
var shuffle = false;
let svol = 50;
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;
let videoOff = true;
const playerContainer = document.getElementById("playerContainer");
const currentSongElement = document.getElementById('currentSong');
const videoButton = document.getElementById('videoButton');
videoButton.addEventListener('click', toggleVideo);
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', togglePlayback);
const skipButton = document.getElementById('skipButton');
skipButton.addEventListener('click', skipMedia);
const volumeSlider = document.getElementById('volumeSlider');
const videoSlider = document.getElementById('videoSlider');
const durationtext = document.getElementById('durationtext');
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});
function parseLinks() {
  var inputText = document.getElementById('fileInput').value;
  if (inputText == "RESET"){
    localStorage.removeItem("playlists");
    location.reload();
    return;
  }
  document.getElementById('fileInput').value="";
  if (inputText==""){
    return;
  }
  var lines = inputText.split('\n');
  var resultArray = [];

  var regex = /(?:VM\d+:?\d*\s*)?(.*?);(https:\/\/www\.youtube\.com\/watch\?v=.*$)/;
  resultArray.push({ id: 'Recording.mp3', title: 'start', type: 'local' });
  lines.forEach(function (line) {
    var match = line.match(regex);
    if (match) {
      var title = match[1].trim();
      var url = match[2].trim();
      var id = url.split('v=')[1];
      resultArray.push({ id: id, title: title, type: 'youtube' });
    }
  });
  playlists.push({list: resultArray, name: 'newlist'});
  localStorage.setItem("playlists", JSON.stringify(playlists));
  addplaylistelement("newlist");
}
function selectplaylist(name){
  for (let i = 0; i<playlists.length; i++){
    if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
      document.getElementById(playlists[i].name + 's').style= "color: var(--main-color); border-color: var(--background-color)";
    }
  }
  for (let i = 0; i<playlists.length; i++){//man i am so braindead
    if (playlists[i].name == name){
      playlist = playlists[i].list;
      currentname = playlists[i].name;
      generateUpcoming();
      document.getElementById(playlists[i].name + 's').style= "color: white; border-color: var(--main-color)";
    }
  }
}
function renameplaylist(name){
  var newName = prompt('Enter a new name for the button:', 'New Button Name');
  // Check if the user entered a name and update the button text
  if (newName == "" || newName==null) {
    return;
  }
  for (let i = 0; i<playlists.length; i++){
    if (playlists[i].name == newName){
      alert("already exists");
      return;
    }
  }
  document.getElementById(name + "s").innerText = `${newName}`;
  document.getElementById(name + "s").id = newName + "s";
  document.getElementById(name + "r").id = newName + "r";
  document.getElementById(name + "c").id = newName + "c";
  document.getElementById(name).id = newName;
  document.getElementById(newName + "s").setAttribute('onclick', "selectplaylist('"+ newName +"')");
  document.getElementById(newName + "r").setAttribute('onclick', "renameplaylist('" + newName+ "')");
  document.getElementById(newName + "c").setAttribute('onclick', "closer('"+ newName + "')");
  for (let i = 0; i<playlists.length; i++){
    if (playlists[i].name == name){
      playlists[i].name = newName;
      currentname = newName;
      localStorage.setItem("playlists", JSON.stringify(playlists));
      return;
    }
  }
}
function closer(name){
  if (playlists.length <= 1){
    return;
  }
  for (let i = 0; i<playlists.length; i++){
    if (playlists[i].name == name){
      document.getElementById(playlists[i].name + 's').style= "color: var(--main-color); border-color: var(--background-color)";
      playlists.splice(i, 1);
      playlist = playlists[0].list;
      currentname = playlists[0].name;
      document.getElementById(playlists[0].name + 's').style= "color: white; border-color: var(--main-color)";
      generateUpcoming();
      document.getElementById(name).remove();
      localStorage.setItem("playlists", JSON.stringify(playlists));
      return;
    }
  }
}
function addplaylistelement(title){
  document.getElementById('playlistmenu').insertAdjacentHTML("beforeend", `<div class="pcont" id=\'${title}\'><button class="pbutt" id=\'${title}s\' style="color:var(--songs-color);" onclick="selectplaylist(\'${title}\')">${title}</button><button class="pbutt" id=\'${title}r\' onclick="renameplaylist(\'${title}\')">R</button><button class="pbutt" id=\'${title}c\' onclick="closer('${title}')">X</button></div>`);//why do i have to code js in html in js....
}
function exportp(){
  if (document.getElementById("result").innerHTML != ""){
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("result").style.display = "none";
    return;
  }
  else{
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").style.display = "flex";
  }
  let message = ``
  for (let i = 0; i<playlist.length; i++){
    if (playlist[i].type == "youtube"){
      message += playlist[i].title + ";" + "https://www.youtube.com/watch?v=" + playlist[i].id + "\n";// we gonna skip local for now(a long time)
    }
  }
  document.getElementById("result").innerHTML= message;
}
function copy() {
  var container = document.getElementById("result");
  var range = document.createRange();
  range.selectNode(container);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
}
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("shuffle")==null){
    localStorage.setItem("shuffle", shuffle);
  }
  else{
    shuffle = JSON.parse(localStorage.getItem("shuffle"));
  }
  if (localStorage.getItem("volume")==null){
    localStorage.setItem("volume", svol);
  }
  else{
    svol = JSON.parse(localStorage.getItem("volume"));
    volumeSlider.value = svol;
  }
  if (localStorage.getItem("playCount")==null){
    localStorage.setItem("playCount", 0);
  }
  document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
  
  playlists = JSON.parse(localStorage.getItem("playlists"));
  playlist = playlists[0].list;
  currentname = playlists[0].name;
  for (let i = 0; i<playlists.length; i++){
    addplaylistelement(playlists[i].name);
    if (i==0){
      document.getElementById(playlists[i].name + 's').style= "color: white; border-color: var(--main-color)";
    }
  }
}
else{
  alert("localstorage not supported, aka everything is prob broken");
  console.log("idk why i even added this check, website doesnt do anything if it doesnt work");
}
function pull(){
  console.log(currentname)
  if (currentname != "default(c)"){
    alert("Pulling from cloud is to pull from github owner, for the playlist default(c). It will replace the default playlist. If you want to have my playlist, rename your playlist to default(c)");
    return;
  }
  localStorage.setItem("pull", JSON.stringify(playlists));
  localStorage.removeItem("playlists");
  location.reload();
}
function shuffleIndices() {
  shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
  for (let i = shuffledIndices.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * (i)) + 1;
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }
}

function toggleVideo(){
  if (playlist[shuffledIndices[currentIndex]].type == 'local'){return;}
  const playerElement = document.getElementById("player");
  if (videoOff){
    videoOff = false;
    videoButton.textContent = "Video On";
    player.audioOnlyMode(videoOff);
    playerElement.style.width ="160px"; 
    playerElement.style.height ="100px"; 
  }
  else{
    videoOff = true;
    videoButton.textContent = "No Video";
    player.audioOnlyMode(videoOff);
    playerContainer.style.inset =""; 
    playerElement.style.width ="1px"; 
    playerElement.style.height ="1px"; 
  }
}


function createPlayer() {
  const currentMedia = playlist[shuffledIndices[currentIndex]];
  if (currentIndex != 0){ 
    try{
      if (!player.paused()) {
        player.pause();
      }
    }
    catch{}
    try{
      if (!playerl.paused){
        playerl.pause();
      }
    } 
    catch{}
    if (silence.paused){
      silence.play();
    }
  }
  currentSongElement.textContent = `${currentMedia.title}`;
  document.getElementById(`${currentIndex}`).style.color = 'var(--main-color)';
  if (currentMedia.type === 'youtube') {
    player.muted(true);
    player.src({
      src: `https://www.youtube.com/embed/${currentMedia.id}`,
      type: 'video/youtube',
    });
    var myMiddleware = function(player) {
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    player.ready(function() {
      if (currentMedia.type === 'youtube') {
        player.currentTime(0);
        player.play();
        player.muted(false);
        videojs.use('*', myMiddleware);
        player.volume(svol / 100); // Set volume to half
      }
    });
    // player.oncanplay = function(){
    //   if (currentMedia.type === 'youtube') {
    //     player.currentTime(0);
    //     player.play();
    //     player.muted(false);
    //     videojs.use('*', myMiddleware);
    //     player.volume(svol / 100);
    //     document.getElementById('videoSlider').max = player.duration();
    //     console.log(document.getElementById('videoSlider').max);
    //     durationtext.innerText = formatTime(player.duration());
    //     durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
    //     durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
        
    //   }
    // }
    player.on('timeupdate', videoUpdate);
    player.on('play', function(){
      if (player.currentTime() < 0.2){
        player.volume(svol / 100);
        player.play();
        player.currentTime(0.21);
        document.getElementById('videoSlider').max = player.duration();
        durationtext.innerText = formatTime(player.duration());
        durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
        durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
      }
    });

  } else if (currentMedia.type === 'local') {
    if (!videoOff){
      const playerElement = document.getElementById("player");
      playerContainer.style.inset =""; 
      playerElement.style.width ="1px"; 
      playerElement.style.height ="1px"; 
    }
    
    playerl.src=("songs/" + currentMedia.id);
    playerl.muted = true;
    playerl.oncanplay = (event) => {
      document.getElementById('videoSlider').max = playerl.duration;
      durationtext.innerText = formatTime(playerl.duration);
      durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
      durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
      playerl.muted = true;
      if (!firstplay){
        playerl.play();
      }
      playerl.muted = false;
      playerl.volume = (svol / 300);
      silence.pause();
    };
    playerl.oncanplaythrough = (event) => {//so these are needed?
      playerl.muted = true;
      if (!firstplay){
        playerl.play();
      }
      playerl.muted = false;
      playerl.volume = (svol / 300);
    };
    playerl.onloadstart = (event) => {
      playerl.muted = true;
      if (!firstplay){
        playerl.play();
      }
      playerl.muted = false;
      playerl.volume = (svol / 300);
    };
  }
}
function videoSeek(){
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(document.getElementById('videoSlider').value);
  }
  else{
    playerl.currentTime = document.getElementById('videoSlider').value;
  }
}
const seekmenu = document.getElementById('seekmenu');
function audioUpdate(){//reason for fix forgotten!
  if (playlist[shuffledIndices[currentIndex]].type == 'youtube'){
    return;
  }
  document.getElementById('videoSlider').value = playerl.currentTime;
  if (inseekrange){
    seekmenu.innerText = formatTime(playerl.currentTime);
    const sliderrect = videoSlider.getBoundingClientRect();
    seekmenu.style.left = (sliderrect.left + (videoSlider.offsetWidth * (videoSlider.value / videoSlider.max)) - seekmenu.offsetWidth/2) + "px";
  }
}
function videoUpdate(){
  if (playlist[shuffledIndices[currentIndex]].type == 'local'){
    return;
  }
  document.getElementById('videoSlider').value = player.currentTime();
  if (inseekrange){
    seekmenu.innerText = formatTime(player.currentTime());
    const sliderrect = videoSlider.getBoundingClientRect();
    seekmenu.style.left = (sliderrect.left + (videoSlider.offsetWidth * (videoSlider.value / videoSlider.max)) - seekmenu.offsetWidth/2) + "px";// `${cursorX}px`;
  }
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  return formattedTime;
}
document.addEventListener("mousemove", handleMouseMove);
let clicked = false;
document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    clicked = true;
  }
});
document.addEventListener('mouseup', function(event) {
  if (event.button === 0) {
    clicked = false;
  }
});
function handleMouseMove(ev) {
  const rect = playerContainer.getBoundingClientRect();
  const isWithinArea = ev.clientX > rect.left + rect.width -20 && ev.clientY > rect.top + rect.height -20;
  const sliderrect = videoSlider.getBoundingClientRect();
  const cursorY = ev.clientY;
  if (!clicked){
    const playerElement = document.getElementById("player");
    playerElement.style.pointerEvents = isWithinArea ? "auto" : "none";
    if (cursorY < sliderrect.top - 10 || cursorY > sliderrect.bottom + 20){
      inseekrange = false;
      seekmenu.style.display = 'none'; 
    }
  }
}
var inseekrange = false;
function seeksmenu(event) {
  const sliderrect = videoSlider.getBoundingClientRect();
  seekmenu.style.top = sliderrect.top -20  + "px";
  seekmenu.style.display = 'flex';
  inseekrange = true;//initial is offset bc no width
  seekmenu.style.left = (sliderrect.left + (videoSlider.offsetWidth * (videoSlider.value / videoSlider.max)) - seekmenu.offsetWidth/2) + "px";
}

var firstplay = true;
function playHandler() {
  
  if (playlist[shuffledIndices[currentIndex]].type === 'local'){
    playerl.play();
    player.pause();
  }
  firstplay = false;
  player.off('play', playHandler);
}
function togglePlayback() {
  if (firstplay){
    player.play();
    player.on('play', playHandler);
  }
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    if (player.paused()) {
      document.getElementById("playPauseButton").innerHTML = "▶";
      player.play().then(document.getElementById("playPauseButton").innerHTML = "||", function(){console.log("failed to play")});
    } else {
      document.getElementById("playPauseButton").innerHTML = "||";
      player.pause().then(document.getElementById("playPauseButton").innerHTML = "▶", function(){console.log("failed to pause")});
    }
  } else {
    if (playerl.paused){
      document.getElementById("playPauseButton").innerHTML = "▶";
      
      playerl.play().then(document.getElementById("playPauseButton").innerHTML = "||", function(){console.log("failed to play")});
    } 
    else {
      document.getElementById("playPauseButton").innerHTML = "||";
      playerl.pause().then(document.getElementById("playPauseButton").innerHTML = "▶", function(){console.log("failed to pause")});
    }
  }
  if (silence.paused){
    silence.play();
  }
}

function playNextSong(index = -1) {
  document.getElementById((currentIndex).toString()).style.color = "var(--played-color)";
  if (index != -1) {
    currentIndex = index;
    if (currentIndex >= playlist.length) {
      currentIndex = playlist.length - 1;
    }
    createPlayer();
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
      playerl.currentTime = playerl.duration;
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))-1);

    }
  }
  else{
    if (player.currentTime() !== undefined) {
      player.currentTime(player.duration());
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))-1);

    }
  }
}

function changeVolume(volume) {
  svol = volume;
  localStorage.setItem("volume", svol);
  if (player!= null){
    player.volume(volume / 100);
  }
  if (playerl){
    playerl.volume = (volume / 300);
  }
}
function toggleshuffle(){
  if (shuffle){
    shuffle = false;
    generateUpcoming();
  }
  else{
    shuffle = true;
    generateUpcoming();
  }
  localStorage.setItem("shuffle", shuffle);
}
function addSong(){
  var inputName = document.getElementById('songinputN').value;
  var inputLink = document.getElementById('songinputL').value;
  if (inputName == "" || inputLink == ""){
    return;
  }
  var regex = /(https:\/\/www\.youtube\.com\/watch\?v=.*$)/;
  var match = inputLink.match(regex);
  var id;
  var title;

  if (match) {
    title = inputName.trim();
    var url = match[1].trim();
    id = url.split('v=')[1];
  }
  else{
    document.getElementById('songinputL').value = "bad link!!";
    return;
  }
  for (let i=0; i<playlists.length; i++){
    if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
      playlist.push({ id: id, title: title, type: 'youtube' });
      playlists[i].list = playlist;
      localStorage.setItem("playlists", JSON.stringify(playlists));
      generateUpcoming();
    }
  }
}
function editname(){
  if (!editselection){
    return;
  }
  const newName = document.getElementById('editName').value;
  const newLink = document.getElementById('editLink').value;
  if (newLink=="" || newName==""){
    return;
  }
  var regex = /(https:\/\/www\.youtube\.com\/watch\?v=.*$)/;
  var match = newLink.match(regex);
  var id;
  if (match) {
    var url = match[1].trim();
    id = url.split('v=')[1];
  }
  else{
    document.getElementById('newLink').value = "bad link!!";
    return;
  }
  for (let i=0; i<playlists.length; i++){
    if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
      playlist[editselection].title = newName;
      playlist[editselection].id = id;
      playlists[i].list[editselection].title = newName;
      playlists[i].list[editselection].id = id;
      localStorage.setItem("playlists", JSON.stringify(playlists));
      document.getElementById(shuffledIndices.indexOf(editselection)).innerHTML = `${playlist[editselection].title}(${playlist[editselection].type})`;
    }
  }
}
var mode = "select";
function generateUpcoming(){
  currentIndex = 0;
  if (shuffle){shuffleIndices();}
  else{
    shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);}
  let upcoming = document.getElementById("upcoming");
  upcoming.innerHTML = '';
  for (let i=playlist.length - 1; i >= 0; i--){
    upcoming.insertAdjacentHTML("afterbegin", `<li><span id=\"${i}\">` + `${playlist[shuffledIndices[i]].title}(${playlist[shuffledIndices[i]].type})` + "</span></li>");
    document.getElementById(`${i}`).addEventListener('click', handleChoose);
  }
}
function searchsong(input) {
  let searchresult = document.getElementById("searchresult");
  document.getElementById("songsearch").style.width = document.getElementById("songsearch").value.length + 'ch';
  searchresult.innerHTML = "";
  const escapedInput = input.replace(/[\W]/g, '');
  const regex = new RegExp(escapedInput.toLowerCase(), 'i');
  for (let i = 0; i < shuffledIndices.length; i++) {
    let searchel = document.getElementById(i);
    if (regex.test(searchel.innerText.toLowerCase().replace(/[\W]/g, ''))) {
      var clonedElement = searchel.cloneNode(true);
      clonedElement.id = clonedElement.id + "s";
      clonedElement.addEventListener('click', handleChoose);
      if (clonedElement.style.color == 'var(--main-color)') {
        clonedElement.style.color = 'var(--songs-color)';
      }
      var liElement = document.createElement('li');
      liElement.appendChild(clonedElement);
      searchresult.appendChild(liElement);
    }
  }
}
function deletes(){
  if (mode == "delete"){
    document.getElementById("deletebutton").style.color = "var(--main-color)";
    document.getElementById("deletebutton").style.background = "var(--secondary-color)";
    mode = "select";
    return;
  }
  document.getElementById("deletebutton").style.background = "var(--main-color)";
  document.getElementById("deletebutton").style.color = "var(--secondary-color)";
  mode = "delete";
}
var editselection = null;
function handleChoose(event){
  var itemId = event.target.id;
  if (itemId.includes('s')){
    itemId = itemId.slice(0, -1)
  }
  editselection = shuffledIndices[itemId];
  if (mode == "select"){
    playNextSong(itemId);
  }
  else if (mode == "edit"){
    document.getElementById("editName").value = playlist[editselection].title;
    document.getElementById("editLink").value = "https://www.youtube.com/watch?v=" + playlist[editselection].id;
  }
  else if (mode == "delete"){
    for (let i=0; i<playlists.length; i++){
      if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
        if (currentIndex >= itemId){
          if (currentIndex == itemId){
            playNextSong(Number(currentIndex) + 1);
          }
          currentIndex--;
        }
        playlist.splice(editselection,1);
        shuffledIndices.splice(itemId,1);
        document.getElementById(itemId).remove();//KEEPS LI
        for (let i=0; i<shuffledIndices.length; i++){
          if (i > itemId){
            document.getElementById(i).id = Number(i) - 1;
          }
          if (shuffledIndices[i] >= editselection){
            shuffledIndices[i] = shuffledIndices[i] - 1;
          }
        }
        document.getElementById(shuffledIndices.length).id = shuffledIndices.length - 1;
        // playlists[i].list.splice(editselection, 1);
        localStorage.setItem("playlists", JSON.stringify(playlists));
        
      }
    }
  }
}
var prevwidth = upcoming.offsetWidth;
function fixheight() {
  const upcoming = document.getElementById('upcoming');
  var initalh = upcoming.offsetHeight;
  upcoming.style.maxHeight = "calc(100% - 140px - " + document.getElementById('currentSong').offsetHeight + "px"+ ")";
  if (prevwidth != upcoming.offsetWidth){
    for (let i = 0; i < playlist.length; i++) {
      var el = document.getElementById(`${i}`);
      if (el.style.fontSize != "16px"){
        el.style.fontSize = "16px";
      }
      var w = 16;
      while (el.offsetWidth + 20 > upcoming.offsetWidth) {
        w -= 1;
        el.style.fontSize = w + "px";
      }
    }
    prevwidth = upcoming.offsetWidth;
  }
  if (upcoming.offsetHeight - initalh < 0){
    upcoming.scrollTop = upcoming.scrollTop - ((upcoming.offsetHeight - initalh));
  }
}
function jumptocurrent(){
  upcoming.scrollTop = ((document.getElementById(`${currentIndex}`).offsetTop -10));
}
var resizeObserver = new ResizeObserver(fixheight);
resizeObserver.observe(document.getElementById('currentSong'));
window.addEventListener('resize', function(event){
  durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
  durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
});
function ender(){
  if(playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))+1);
    document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
    playNextSong();
  }
}
var wasdispsearch = false;
function toggleMenu(id){
  const menu = document.getElementById(id); 
  if (!menu.className.includes("hidden")){
    menu.classList.add('hidden');
    if (id == "editnamediv"){
      document.getElementById("editsongbutton").style.color = "var(--main-color)";
      document.getElementById("editsongbutton").style.background = "var(--secondary-color)";
    }else if (id == "addsongdiv"){
      document.getElementById("addsongbutton").style.color = "var(--main-color)";
      document.getElementById("addsongbutton").style.background = "var(--secondary-color)";
    }
    if (id == "editnamediv" || id == "editor"){
      document.getElementById("deletebutton").style.color = "var(--main-color)";
      document.getElementById("deletebutton").style.background = "var(--secondary-color)";
      mode = "select";
      if (id == "editor" && !document.getElementById('searchdiv').className.includes("hidden")){
        toggleMenu("searchdiv");
        wasdispsearch = true;
      }
    }
  }
  else{
    menu.classList.remove('hidden');
    if (!isNaN(menu.style.zIndex) || parseInt(menu.style.zIndex) < 2){
      menu.style.zIndex="2";//slower but less data
    }
    if (wasdispsearch && id == "editor"){
      toggleMenu("searchdiv");
    }
    if (id == "editnamediv"){
      mode = "edit";
      document.getElementById("editsongbutton").style.color = "var(--secondary-color)";
      document.getElementById("editsongbutton").style.background = "var(--main-color)";
    }else if (id == "addsongdiv"){
      document.getElementById("addsongbutton").style.color = "var(--secondary-color)";
      document.getElementById("addsongbutton").style.background = "var(--main-color)";
    }
  }
}

generateUpcoming();
dragElement(playerContainer);
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    const playerElement = document.getElementById("player");
    if (playerElement.style.pointerEvents == "auto"){return;}
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
playerl = new Audio('songs/Keshin.mp3');//not sure if this is needed
playerl.pause();
playerl.addEventListener('ended', function(){
  localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))+1);
  document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
  playNextSong();
});
playerl.addEventListener('play', function(){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: playlist[shuffledIndices[currentIndex]].title,
    // artist: 'faker',
    album: playlist[shuffledIndices[currentIndex]].type,
  });
});
playerl.addEventListener('timeupdate', audioUpdate);

silence = new Audio('songs/45silence.mp3');
silence.muted = true;
silence.play();

silence.addEventListener('timeupdate', function(){
  if (silence.currentTime> 40){
    silence.currentTime = 0;
  }
  //silence.pause();
});

var link = document.createElement('link');
link.href = "https://vjs.zencdn.net/8.3.0/video-js.min.css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
var script = document.createElement('script');
script.src = "https://vjs.zencdn.net/8.3.0/video.min.js";
script.onload = function () {
  var scriptyt = document.createElement('script');
  scriptyt.src = "https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/3.0.1/Youtube.min.js";
  scriptyt.onload = function () {
    player = videojs('player', {
      techOrder: ['youtube'],
      autoplay: 'any',
      preload: 'auto',
      inactivityTimeout: 0,
      audioOnlyMode: videoOff,
      poster: "poster.png",
      muted:true,
      sources: [{
        type: 'video/youtube',
        src: "https://www.youtube.com/watch?v=wu2djWZzmz0"
      }]
    }, function onPlayerReady() {
      this.play();
      this.on('ended', ender);
    });
    var myMiddleware = function(player) {
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    player.ready(function() {
      player.currentTime(0);
      player.play();
      player.muted(false);
      videojs.use('*', myMiddleware);
      player.volume(svol / 100); // Set volume to half
    });
    createPlayer();
  };
  scriptyt.setAttribute("crossorigin", "anonymous");
  scriptyt.setAttribute("referrerpolicy", "no-referrer");
  scriptyt.integrity = "sha512-W11MwS4c4ZsiIeMchCx7OtlWx7yQccsPpw2dE94AEsZOa3pmSMbrcFjJ2J7qBSHjnYKe6yRuROHCUHsx8mGmhA==";
  
  document.body.appendChild(scriptyt);
  

};

document.body.appendChild(script);



navigator.mediaSession.setActionHandler('play', function() {togglePlayback();});
navigator.mediaSession.setActionHandler('pause', function() {togglePlayback();});
navigator.mediaSession.setActionHandler('seekbackward', function() {
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(player.currentTime() - 10);
  }
  else{
    playerl.currentTime = playerl.currentTime - 10;
  }});
navigator.mediaSession.setActionHandler('seekforward', function() {
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(player.currentTime() + 10);
  }
  else{
    playerl.currentTime = playerl.currentTime + 10;
  }});
navigator.mediaSession.setActionHandler('previoustrack', function() {playNextSong(currentIndex - 1);});
navigator.mediaSession.setActionHandler('nexttrack', function() {skipMedia();});
