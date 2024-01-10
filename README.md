to import your yt playlist:
1. open the actual playlist page(not playing a song, url is youtube.com/playlist...)
2. open inspector, usually ctrl-shift-i 
3. go to console and enter:  
let goToBottom = setInterval(() => window.scrollBy(0, 500), 800);  

wait for it to reach the bottom of the page

4. paste the following, then copy:  

clearInterval(goToBottom);
console.log('\n'.repeat(10));
const links = document.querySelectorAll('a');
var ans = "";
for (const link of links) {
    if (link.id === "video-title") {
        var attrb = Array.from(link.attributes).map(attr => attr.name);
        if (attrb.indexOf("href") < attrb.indexOf("title")) {
            link.href = link.href.split('&list=')[0];
            ans += link.title + ';' + link.href + "\n";
        }
    }
}  
console.log(ans);

you should get something like:  
キライトネス;https://www.youtube.com/watch?v=ev3CXEpHBNU  
Fiction / HACHI × KMNZ LITA 【Official MV 】;https://www.youtube.com/watch?v=CXQN1eVmzMA  
ヨノナカ;https://www.youtube.com/watch?v=lnpBBOxGHCs  
icesawder Stardom [from LIBEREX002];https://www.youtube.com/watch?v=qkBB5LrcwZ4  
Mihka! x Kyoto Black - Kodokushi (VIP);https://www.youtube.com/watch?v=aLXpjx2olPY  
blue roar (feat. Purukichi);https://www.youtube.com/watch?v=WJIWINuwBgM  

Be careful not to include the "Recommended videos" that might show up at the bottom, just check over the output.  

5. paste into import field, press import, then you can select the playlist by pressing the p button top left, you can also rename/delete it


You cannot sync playlists changes across devices unless you own the github and change the default playlist then pull(c).
