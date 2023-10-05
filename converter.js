document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const convertButton = document.getElementById('convert');
    const resultDiv = document.getElementById('result');
    const API_KEY = 'AIzaSyCVsev1c5xVaF0gZZKZ60WsNl-PCQ95ZEo';

    convertButton.addEventListener('click', () => {
        const file = fileInput.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const csvData = e.target.result;
                const rows = csvData.split('\n');

                const videoIds = [];

                // Initialize the Google API client
                gapi.load('client', () => {
                    console.log('Google API client loaded.');
                    gapi.client.init({
                        apiKey: API_KEY,
                        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
                    }).then(() => {
                        const youtube = gapi.client.youtube;

                        for (const row of rows) {
                            const [artist, title] = row.split(',');
                            youtube.search.list(
                                {
                                    key: API_KEY,
                                    part: 'id',
                                    q: `${artist} ${title}`,
                                    type: 'video',
                                    maxResults: 1,
                                },
                                (err, response) => {
                                    if (err) {
                                        console.error('Error searching for video:', err);
                                    } else {
                                        if (response.data.items.length > 0) {
                                            const videoId = response.data.items[0].id.videoId;
                                            videoIds.push({
                                                id: videoId,
                                                title: `${artist} ${title}`,
                                                type: 'youtube',
                                            });
                                        } else {
                                            console.warn(`No video found for: ${artist} ${title}`);
                                        }

                                        // Display results when all requests are completed
                                        if (videoIds.length === rows.length) {
                                            resultDiv.innerText = JSON.stringify(videoIds, null, 2);
                                        }
                                    }
                                }
                            );
                        }
                    });
                });
            };

            reader.readAsText(file);
        } else {
            alert('Please select a CSV file.');
        }
    });
});
