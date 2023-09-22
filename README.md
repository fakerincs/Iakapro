# Iakapro
A simple audio playing website that can use both youtube and locally uploaded files to stream music. The music is automaticlly shuffled and autoplayed.

The goal of this website was to automaticly play music in the background of a mobile device(ios, though it can of course be used on any other device). This was because (for free version) spotify has too many ads and does not include every song, and other music apps like youtube music does not play in the background. Therefore, the following guide is on how to autoplay in the background for ios(mobile).


Usage(mobile, ios):
As a warning the method to autoplay is very finicky and can change based on browser or device. I personally use firefox on my phone(solely to play music from this website). If it autoplays fine in the background, you don't need to do the following process.

(After first use/website refreshed) Open the website press play so audio starts playing(refresh if needed), and then press play twice so it stops and starts playing again(this is to have the video show up as playing on the system, i.e. it shows up on lock screen). You can then either go to the home screen, or turn off the phone(if you aren't going to use the phone). I would recommend always going to home first in case you want to use other apps. From there, the audio should pause. You can simply start it again by pressing the play button anywhere(not the website) like on your headphones, lock screen, or the two other screens when you swipe up or down(idk what it is called). After the first song ends, you should need to press the play button again (to activate the filler media)(I found using this filler is the most consistent in using autoplay). After this, you shouldn't need to press anything else, and it should autoplay. However, if a local song(non yt) comes up, you may need to press the play button again(NOT THE BUTTON ON WEBSITE, if you go back on the website, it may stop automaticly playing and you may need to redo the process). 

I could probably find a fix to the website stopping on local songs, but I don't have that many local songs (you are streaming them anyways so its almost the same as with yt), so it doesn't really bother me.



Development:
I'm currently working to actually have a ui, and then there is a slight possibility that I can figure out how to implement adding and removing songs (this would prob need to be acc based), but this would mean the website is no longer static, which means I can't use github pages?

Anyways the only way for people other than me to use my website is if you fork it and change the playlist so yea.
