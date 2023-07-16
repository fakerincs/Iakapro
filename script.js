const playlist = [
    { id: 'JxZ9RTjPNKs', title: 'Crossroad (PSYQUI Remix) (feat. Luschel)1', type: 'youtube' },
    { id: 'Tv5s9_UAmdU', title: 'PSYQUI Medley 2', type: 'youtube' },
    { id: '6Dh-RL__uN4', title: 'Lasagna 3', type: 'youtube' },
    { id: 'start-up-feat.such-psyqui.mp3', title: 'start up 4', type: 'local' },
    { id: 'your-voice-so.feat.such-psyqui.mp3', title: 'your voice so 5', type: 'local' }
  ];
  
  let player;
  let currentIndex = 0;
  let shuffledIndices;
  let isPlaying = false;
  let vol = 50;
  
  function shuffleIndices() {
    shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
    for (let i = playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }
  }
  
  function createPlayer() {
    if (playlist[shuffledIndices[currentIndex]].type === 'youtube') {
      createYouTubePlayer();
    } else if (playlist[shuffledIndices[currentIndex]].type === 'local') {
      createLocalPlayer();
    }
    updateCurrentSong();
  }
  
  function createYouTubePlayer() {
    player = new YT.Player('player', {
      height: '0',
      width: '0',
      videoId: playlist[shuffledIndices[currentIndex]].id,
      playerVars: {
        'controls': 0,
        'disablekb': 1,
        'rel': 0,
        'modestbranding': 1
      },
      events: {
        onReady: function (event) {
          event.target.setVolume(vol);
          if (isPlaying) {
            event.target.playVideo();
          }
        },
        onStateChange: function (event) {
          if (event.data === YT.PlayerState.ENDED) {
            playNextSong();
          }
        }
      }
    });
  }
  
  function createLocalPlayer() {
    const audioPlayer = new Audio(playlist[shuffledIndices[currentIndex]].id);
    audioPlayer.addEventListener('ended', function () {
      playNextSong();
    });
    player = audioPlayer;
    player.volume = vol / 300;
    player.play();
  }
  
  function togglePlayback() {
    updateCurrentSong();
    if (player) {
      if (isPlaying) {
        if (player.pauseVideo && typeof player.pauseVideo === 'function') {
          player.pauseVideo(); // Pause YouTube video
        } else if (player.pause && typeof player.pause === 'function') {
          player.pause(); // Pause local audio
        }
        isPlaying = false;
      } else {
        if (player.playVideo && typeof player.playVideo === 'function') {
          player.playVideo(); // Play YouTube video
        } else if (player.play && typeof player.play === 'function') {
          player.play(); // Play local audio
        }
        isPlaying = true;
      }
    }
  }
  
  function playNextSong() {
    if (player) {
      if (player.pauseVideo && typeof player.pauseVideo === 'function') {
        player.pauseVideo(); // Pause YouTube video
        player.destroy(); // Destroy YouTube player
      } else if (player.pause && typeof player.pause === 'function') {
        player.pause(); // Pause local audio
      }
    }
    if (currentIndex + 1 < playlist.length) {
      currentIndex++;
    } else {
      shuffleIndices();
      currentIndex = 0;
    }
    player = null;
    createPlayer();
  }
  
  function skipVideo() {
    if (player) {
      if (player.pauseVideo && typeof player.pauseVideo === 'function') {
        player.pauseVideo(); // Pause YouTube video

      } else if (player.pause && typeof player.pause === 'function') {
        player.pause(); // Pause local audio
      }
    }
    playNextSong();
  }
  
  function changeVolume(volume) {
    vol = volume;
    if (player) {
      if (player.setVolume) {
        player.setVolume(volume); // Set YouTube video volume
      } else {
        player.volume = volume / 300; // Set local audio volume
      }
    }
  }
  
  function updateCurrentSong() {
    const currentSongElement = document.getElementById('currentSong');
    currentSongElement.textContent = `Now Playing: ${playlist[shuffledIndices[currentIndex]].title}`;
  }
  
  function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  function onYouTubePlayerAPIReady() {
    shuffleIndices();
    createPlayer();
  }
  
  loadYouTubeAPI();
  