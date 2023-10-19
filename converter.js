document.getElementById("import").addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');
    
    console.log('good.');
    const videoId = response.data.items[0].id.videoId;
    videoIds.push({
        id: videoId,
        title: `${artist} ${title}`,
        type: 'youtube',
    });
// Display results when all requests are completed
    resultDiv.innerText = JSON.stringify(videoIds, null, 2);
});
