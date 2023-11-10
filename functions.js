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
  }
}
