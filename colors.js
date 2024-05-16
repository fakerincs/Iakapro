
function change(event) {
  document.documentElement.style.setProperty(event.target.color, event.target.value);
  event.target.saved = false;
}
function save(event) {
  event.target.saved = true;
  document.documentElement.style.setProperty(event.target.color, event.target.value);
  localStorage.setItem(event.target.id, event.target.value);
}
function close(event){
  if (event.target.saved){
    event.target.defaultColor= getComputedStyle(document.body).getPropertyValue(event.target.color);
    return;
  }
  document.documentElement.style.setProperty(event.target.color, event.target.defaultColor);
}

function picker(id, color){
  if (localStorage.getItem(id)==null){
    localStorage.setItem(id, getComputedStyle(document.body).getPropertyValue(color));
  }
  else{  
    document.documentElement.style.setProperty(color, localStorage.getItem(id));
  }
  var mPicker = document.getElementById(id);
  mPicker.defaultColor= getComputedStyle(document.body).getPropertyValue(color);
  
  mPicker.value = mPicker.defaultColor;
  mPicker.id = id;
  mPicker.color = color;
  mPicker.saved = true;
  mPicker.addEventListener("input", change);
  mPicker.addEventListener("change", save);
  mPicker.addEventListener("close", close);
}
if (typeof(Storage) !== "undefined") {
  picker("mainColor", "--main-color");
  picker("playedColor", "--played-color");
  picker("backgroundColor", "--background-color");
  picker("secondaryColor", "--secondary-color");
  picker("thirdColor", "--third-color");
  picker("upcomingColor", "--upcoming-color");
  picker("songsColor", "--songs-color");
  picker("borderColor", "--border-color");
  if (localStorage.getItem("borderw")==null){
    localStorage.setItem("borderw", getComputedStyle(document.body).getPropertyValue("--borderw"));
  }  
  document.documentElement.style.setProperty("--borderw", localStorage.getItem("borderw") + "px");
  document.getElementById("borderw").value = localStorage.getItem("borderw");
function resetcolors(){
  localStorage.removeItem("mainColor");
  localStorage.removeItem("playedColor");
  localStorage.removeItem("backgroundColor");
  localStorage.removeItem("secondaryColor");
  localStorage.removeItem("thirdColor");
  localStorage.removeItem("upcomingColor");
  localStorage.removeItem("songsColor");
  localStorage.removeItem("borderColor");
  localStorage.removeItem("borderw");
  location.reload();
}
