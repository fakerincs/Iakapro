to import your yt playlist:
1. open the actual playlist page(not playing a song, url is youtube.com/playlist...)
2. open inspector, usually ctrl-shift-i 
3. go to console and enter:
let goToBottom = setInterval(() => window.scrollBy(0, 400), 1000);

wait for it to reach the bottom of the page

4.paste the following, the copy:
clearInterval(goToBottom);
console.log('\n'.repeat(50));
const links = document.querySelectorAll('a');
for (const link of links) {
    if (link.id === "video-title") {
        link.href = link.href.split('&list=')[0];
        console.log(link.title + ';' + link.href);
    }
}

you should get something like:
PSYQUI - ヨノナカ Piano Cover;https://www.youtube.com/watch?v=UVDjM7fcUiI
VM490:7 SWANNAH - by my side (feat. Eileen);https://www.youtube.com/watch?v=IBrsSu-5apY
VM490:7 Word Of Old;https://www.youtube.com/watch?v=SYFAseykCFw
VM490:7 N3XTAGE;https://www.youtube.com/watch?v=vkkHEEOj5rc
VM490:7 blue roar (feat. Purukichi);https://www.youtube.com/watch?v=WJIWINuwBgM
VM490:7 PERSONA;https://www.youtube.com/watch?v=O6Ose2oLfMU
VM490:7 Andora - Moonrise (feat. WaMi) MV 『ムーンライズ』;https://www.youtube.com/watch?v=3NUbx0WVRIw
VM490:7 CASE;https://www.youtube.com/watch?v=f9Zt5OqIzIk
VM490:7 ZONE;https://www.youtube.com/watch?v=ikWjlRyRGb8

5. paste into import field, press import, then you can select the playlist by pressing the p button top left, you can also rename/delete it


You cannot sync playlists changes across devices unless you own the github and change the default playlist.
