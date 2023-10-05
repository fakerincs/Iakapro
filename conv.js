function getPlaylistTracks() {
    var refreshToken = 'AQDODUTunuhBs2hFZUnIJd0ApJzTkxFkjq3ZHvTVfpUqSg4Tk2RsCAlCWxwbfvuoHkml-SzNUW9FXeQL505MeNF7MF10Dq4TWOGqCLDS8FxrwA8nFxRGKtxw8j-xGya7Lfg';
    var playlistId = playlistUrl.split('playlist/')[1].split('?')[0];
    var accessToken = getAccessToken(refreshToken);
    var options = {
    headers: {
        'Authorization': 'Bearer ' + accessToken
    }
    };
    
    var response = UrlFetchApp.fetch('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks', options);
    
    var data = JSON.parse(response.getContentText());
    
    for (var i = 0; i < data.items.length; i++) {
    var track = data.items[i].track;
    sheet.appendRow([track.name, track.artists[0].name, track.album.name, track.external_urls.spotify]);
    }
}

function getAccessToken(refreshToken) {
    var clientId = '4d0346c9a21041d29fcfd6bb04e0d075';
    var clientSecret = '796bf0e9e8ce4712b816654f2370525c';
    
    var options = {
    method: 'post',
    headers: {
        'Authorization': 'Basic ' + Utilities.base64Encode(clientId + ':' + clientSecret)
    },
    payload: {
        'grant_type': 'refresh_token',
        'refresh_token': refreshToken
    }
    };
    
    var response = UrlFetchApp.fetch('https://accounts.spotify.com/api/token', options);
    
    var data = JSON.parse(response.getContentText());
    
    return data.access_token;
}
function convertSpotifyToYoutube() {
    var spotifyUrls = sheet.getRange(startRow, column, sheet.getLastRow() - startRow + 1).getValues();
    
    for (var i = 0; i < spotifyUrls.length; i++) {
    if (spotifyUrls[i][0]) {
        var youtubeUrl = getYouTubeUrl(spotifyUrls[i][0]);
        sheet.getRange(startRow + i, column + 1).setValue(youtubeUrl);
    }
    }
}

function getYouTubeUrl(spotifyUrl) {
    var response = UrlFetchApp.fetch('https://api.song.link/v1-alpha.1/links?url=' + spotifyUrl);
    var data = JSON.parse(response.getContentText());
    return data.linksByPlatform.youtube.url;
}
/**
 * Custom function to generate a YouTube playlist URL with video IDs from URLs in Column G
 * and insert it into cell (c,1).
 */
function generatePlaylistURLAndInsert() {
    var videoIds = [];

    // Extract YouTube video IDs from the sheet.
    for (var i = startRow - 1; i < data.length; i++) {
    var url = data[i][youtubeURLColumnIndex - 1]; // Subtract 1 to convert to 0-based index
    if (url && url.startsWith('https://www.youtube.com/watch?v=')) {
        var videoId = url.substring(url.indexOf('=') + 1);
        videoIds.push(videoId);
    }
    }

    // Generate the playlist URL with video IDs.
    var playlistURL = 'https://www.youtube.com/watch_videos?video_ids=' + videoIds.join(',');

    // Insert the playlist URL into cell (B,2).
    sheet.getRange(1, 3).setValue(playlistURL);

    // Display a message indicating that the URL has been inserted.
    Browser.msgBox('Playlist URL inserted in cell (c,1): ' + playlistURL);
}
function tohtml(){
    let songsl = document.getElementById("songsl");
    for (i=0; i < Math.floor(playlist.length); i++){
        songsl.insertAdjacentHTML("beforeend", "<li>" + `${playlist[shuffledIndices[i]].title}(${playlist[shuffledIndices[i]].type})` + "</li>");
    }
  }



document.getElementById('convert').onclick = startc;

function startc() {
    const playlistUrl = document.getElementById('userInput').value;
    if (playlistUrl.trim() !== '') {
        alert('You entered: ' + playlistUrl);
        // You can add your custom JavaScript code here using userInput
    } else {
        alert('Please enter some text.');
    }
    getPlaylistTracks();
}

