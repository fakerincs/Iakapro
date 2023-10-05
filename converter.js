// Function to get playlist tracks from Spotify
async function getPlaylistTracks(spotifyPlaylistUrl) {
    try {
        // Extract the playlist ID from the Spotify URL
        var playlistId = spotifyPlaylistUrl.split('playlist/')[1].split('?')[0];
        var refreshToken = 'AQDODUTunuhBs2hFZUnIJd0ApJzTkxFkjq3ZHvTVfpUqSg4Tk2RsCAlCWxwbfvuoHkml-SzNUW9FXeQL505MeNF7MF10Dq4TWOGqCLDS8FxrwA8nFxRGKtxw8j-xGya7Lfg';
        var playlistId = spotifyPlaylistUrl.split('playlist/')[1].split('?')[0]; // Replace with your Spotify refresh token
        var accessToken = await getAccessToken(refreshToken);

        // Configure the request headers with the access token
        var options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        };

        // Fetch the playlist tracks from Spotify
        var response = await fetch('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks', options);
        var data = await response.json();

        var youtubeDataArray = [];

        // Process the Spotify tracks to get YouTube video IDs
        for (var i = 0; i < data.items.length; i++) {
            var track = data.items[i].track;
            var trackName = track.name;
            var artistName = track.artists[0].name;
            var spotifyUrl = track.external_urls.spotify;

            // Call your existing function to get the YouTube URL
            var youtubeUrl = await getYouTubeUrl(spotifyUrl);

            if (youtubeUrl) {
                var videoId = youtubeUrl.split('v=')[1];
                youtubeDataArray.push({
                    videoId: videoId,
                    artist: artistName
                });
            }
        }

        // Now, youtubeDataArray contains YouTube video IDs and corresponding artists
        console.log(youtubeDataArray);
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
    }
}

// Function to get the Spotify access token
async function getAccessToken(refreshToken) {
    try {
        var clientId = 'b24aca16e6674c54b90cd298e5f81ba3'; // Replace with your Spotify client ID
        var clientSecret = '1bf86aa365c34a64ab1cc3a7fc48013b'; // Replace with your Spotify client secret

        // Configure the request headers with client ID and secret
        var headers = new Headers({
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        });

        // Configure the request payload
        var body = new URLSearchParams();
        body.append('grant_type', 'refresh_token');
        body.append('refresh_token', refreshToken);

        // Fetch the access token from Spotify
        var response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: headers,
            body: body
        });

        var data = await response.json();

        return data.access_token;
    } catch (error) {
        console.error('Error fetching Spotify access token:', error);
    }
}

// Function to get the YouTube URL from a Spotify URL
async function getYouTubeUrl(spotifyUrl) {
    try {
        // Fetch the song.link data
        var response = await fetch('https://api.song.link/v1-alpha.1/links?url=' + spotifyUrl);
        var data = await response.json();

        return data.linksByPlatform.youtube.url;
    } catch (error) {
        console.error('Error fetching YouTube URL:', error);
    }
}

// Function to start the conversion process when the button is clicked
document.getElementById('convert').onclick = function () {
    const spotifyPlaylistUrl = document.getElementById('userInput').value;
    if (spotifyPlaylistUrl.trim() !== '') {
        alert('You entered: ' + spotifyPlaylistUrl);
        getPlaylistTracks(spotifyPlaylistUrl);
    } else {
        alert('Please enter a Spotify playlist URL.');
    }
};


