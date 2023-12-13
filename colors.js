function resetColor(){
  document.documentElement.style.setProperty("--main-color", "#a30000");
  document.documentElement.style.setProperty("--played-color", "#c60035");
  document.documentElement.style.setProperty("--background-color", "#ffffff");
  document.documentElement.style.setProperty("--secondary-color", "#fec8cd");
  document.documentElement.style.setProperty("--third-color", "#fec8cd");
}
function change(event) {
  document.documentElement.style.setProperty(event.currentTarget.color, event.target.value);
  saved = false;
}
function save(event) {
  saved = true;
  document.documentElement.style.setProperty(event.currentTarget.color, event.target.value);
  localStorage.setItem(event.currentTarget.id, event.target.value);
}
function close(){
  if (saved){
    defaultColor= getComputedStyle(document.body).getPropertyValue(event.currentTarget.color);
    return;
  }
  document.documentElement.style.setProperty(event.currentTarget.color, defaultColor);
}

function picker(id, color){
  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem(id)==null){
      localStorage.setItem(id, getComputedStyle(document.body).getPropertyValue(color));
    }
    else{  
      document.documentElement.style.setProperty(color, localStorage.getItem(id));
    }
  }
  var mPicker = document.getElementById(id);
  var defaultColor= getComputedStyle(document.body).getPropertyValue(color);
  
  mPicker.value = defaultColor;
  mPicker.id = id;
  mPicker.color = color;
  var saved = true;
  mPicker.addEventListener("input", change);
  mPicker.addEventListener("change", color, save);
  mPicker.addEventListener("close", close);
}
picker("mainColor", "--main-color");
picker("playedColor", "--played-color");
picker("backgroundColor", "--background-color");
picker("secondaryColor", "--secondary-color");
picker("thirdColor", "--third-color");
