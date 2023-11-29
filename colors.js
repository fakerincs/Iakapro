function picker(id, color){
  var mPicker = document.getElementById(id);
  var defaultColor= getComputedStyle(document.body).getPropertyValue('--main-color');
  mPicker.value = defaultColor;
  var saved = true;
  mPicker.addEventListener("input", change);
  mPicker.addEventListener("change", save);
  mPicker.addEventListener("close", close);
  function change(event) {
    document.documentElement.style.setProperty(color, event.target.value);
    saved = false;
  }
  function save(event) {
    saved = true;
    document.documentElement.style.setProperty(color, event.target.value);
  }
  function close(){
    if (saved){
      defaultColor= getComputedStyle(document.body).getPropertyValue('--main-color');
      return;
    }
    document.documentElement.style.setProperty(color, defaultColor);
  }
}
picker("mainColor", "--main-color");
picker("playedColor", "--played-color");
picker("backgroundColor", "--background-color");
picker("secondaryColor", "--secondary-color");
picker("thirdColor", "--third-color");
