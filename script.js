// Array of YouTube video IDs and corresponding song titles
const playlist = [
    { id: 'JxZ9RTjPNKs', title: 'Crossroad (PSYQUI Remix) (feat. Luschel)1' },
    { id: 'Tv5s9_UAmdU', title: 'PSYQUI Medley 2' },
    { id: '6Dh-RL__uN4', title: 'Lasagna 3' }
    ];

    let player; // Reference to the YouTube player instance
    let currentIndex = 0; // Index of the current video
    let shuffledIndices; // Shuffled indices of the playlist
    let isPlaying = false; // Flag to track the playback state

    // Function to shuffle the indices of the playlist
    function shuffleIndices() {
    shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
    for (let i = playlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }
    }

    // Load the YouTube IFrame Player API asynchronously
    function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Create and initialize the YouTube player
    function createYouTubePlayer(videoId, index) {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: playlist[shuffledIndices[index]].id,
        playerVars: {
        'controls': 0, // Hide YouTube player controls
        'disablekb': 1, // Disable keyboard control of the YouTube player
        'rel': 0, // Disable related videos at the end
        'modestbranding': 1 // Hide YouTube logo in the player
        },
        events: {
        onReady: function(event) {
            event.target.setVolume(50); // Set default volume to 50
            if (isPlaying) {
            event.target.playVideo();
            }
            updateCurrentSong(); // Update the currently playing song
        },
        onStateChange: function(event) {
            if (event.data === YT.PlayerState.ENDED) {
            // Play the next video
            if (currentIndex + 1 < playlist.length) {
                currentIndex++;
                player.loadVideoById(playlist[shuffledIndices[currentIndex]].id);
            } else {
                // Loop the playlist and reshuffle
                currentIndex = 0;
                shuffleIndices();
                player.loadVideoById(playlist[shuffledIndices[currentIndex]].id);
            }
            updateCurrentSong(); // Update the currently playing song
            }
        }
        }
    });
    }

    // Function to start or pause the playback
    function togglePlayback() {
    if (player) {
        if (isPlaying) {
        player.pauseVideo();
        isPlaying = false;
        } else {
        player.playVideo();
        isPlaying = true;
        }
        updateCurrentSong(); // Update the currently playing song
    }
    }

    // Function to skip to the next video
    function skipVideo() {
    if (player && currentIndex + 1 < playlist.length) {
        currentIndex++;
        player.loadVideoById(playlist[shuffledIndices[currentIndex]].id);
        if (!isPlaying) {
        player.pauseVideo();
        }
        updateCurrentSong(); // Update the currently playing song
    } else if (currentIndex + 1 === playlist.length) {
        currentIndex = 0;
        shuffleIndices();
        player.loadVideoById(playlist[shuffledIndices[currentIndex]].id);
        if (!isPlaying) {
        player.pauseVideo();
        }
        updateCurrentSong(); // Update the currently playing song
    }
    }
    
    // Function to change the volume
    function changeVolume(volume) {
    if (player) {
        player.setVolume(volume);
    }
    }

    // Function to update the currently playing song
    function updateCurrentSong() {
    const currentSongElement = document.getElementById('currentSong');
    currentSongElement.textContent = `Now Playing: ${playlist[shuffledIndices[currentIndex]].title}`;
    }

    // Function to handle YouTube API state changes
    function onYouTubePlayerAPIReady() {
    // Shuffle the indices of the playlist
    shuffleIndices();

    // Create and initialize the YouTube player
    createYouTubePlayer(playlist[0].id, 0);
    }

    // Load the YouTube API
    loadYouTubeAPI();
