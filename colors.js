
function change(event) {
  document.documentElement.style.setProperty(event.target.color, event.target.value);
  event.target.saved = false;
}
function save(event) {
  event.target.saved = true;
  document.documentElement.style.setProperty(event.target.color, event.target.value);
  localStorage.setItem(event.target.id, event.target.value);
}
function close(){
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
}
