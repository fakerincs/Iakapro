const playlist = [
  { id: 'start-up-feat.such-psyqui.mp3', title: 'Start Up', type: 'local' },
  { id: 'your-voice-so.feat.such-psyqui.mp3', title: 'Your Voice So', type: 'local' },
  { id: 'no-one-psyqui.mp3', title: 'No One', type: 'local' },
  { id: 'luv-u-4ll-over-psyqui.mp3', title: 'Luv U 4ll ♡ver', type: 'local' },
  { id: 'answerer-psyqui.mp3', title: 'Answerer', type: 'local' },
  { id: 'nervousness-psyqui.mp3', title: 'Nervousness', type: 'local' },
  { id: 'heartbeat-psyqui.mp3', title: 'Heartbeat', type: 'local' },
  { id: 'concentration-psyqui.mp3', title: 'Concentration', type: 'local' },
  { id: 'tears-psyqui.mp3', title: 'Tears', type: 'local' },
  { id: 'inside-of-me-psyqui.mp3', title: 'Inside of Me', type: 'local' },
  { id: '-awakening-psyqui.mp3', title: 'ヒ​カ​リ​の​方​へ (Awakening)', type: 'local' },
  { id: 'JxZ9RTjPNKs', title: 'Crossroad (PSYQUI Remix) (feat. Luschel)', type: 'youtube' },
  { id: 'Tv5s9_UAmdU', title: 'PSYQUI Medley', type: 'youtube' },
  { id: '6Dh-RL__uN4', title: 'Lasagna', type: 'youtube' },
  { id: '3ad4NsEy1tg', title: 'テレキャスター･ストライプ', type: 'youtube' },
  { id: 'JETM.mp3', title: 'JET', type: 'local' },
  { id: '2QIp-YGau7o', title: 'Allure', type: 'youtube' },
  { id: 'HheTl6I28jw', title: 'Style', type: 'youtube' },
  { id: 'Keshin.mp3', title: 'Keshin', type: 'local' },
  { id: 'BE-rpIWS7cQ', title: 'twilight', type: 'youtube' },
  { id: 'VAQpxmxSwoE', title: 'Alone With U', type: 'youtube' },//r
  { id: '65xliANyPf0', title: 'Twist', type: 'youtube' },
  { id: 'cqxkQkq9oic', title: 'ミカヅキBIGWAVE - I Wanna Be With You', type: 'youtube' },
  { id: 'pH7-g9X6PwQ', title: 'GHOST VS. GHOUL MASHUP', type: 'youtube' },
  { id: 'KeuylVL92Ys', title: 'RuLu - サルベージ feat.Such', type: 'youtube' },
  { id: 'XIaNSrhRRmo', title: 'Tenkitsune - Little Fox Wonderland', type: 'youtube' }, //r
  { id: '8Wr98RC6SNU', title: 'Cortado', type: 'youtube' },//r
  { id: 'jtlOpoqKZb4', title: 'Give You My World (Extended Mix)', type: 'youtube' },//r
  { id: 'W6FVH3dwb_Q', title: 'w / WWW (feat. 星宮とと)', type: 'youtube' },
  { id: '_crezDzuriM', title: 'Eat Sleep Dance (feat. Moe Shop)', type: 'youtube' },
  { id: 'k3bV0UHBLGk', title: 'KOTONOHOUSE - Lets go boogie', type: 'youtube' },
  { id: 'RzTwehkbHkM', title: 'Shining Lights', type: 'youtube' },
  { id: 'p-7Dz2LAQGA', title: 'Shining Lights | Masayoshi Iimori Remix', type: 'youtube' },
  { id: 'AJExOnZEbOM', title: 't+pazolite, Nanahira, Cranky & Pico - PICO-Pico-TRANSLATION!', type: 'youtube' },
  { id: 'nbv84ixqiio', title: 'Compute It With Some Devilish Alcoholic Steampunk Engines', type: 'youtube' },
  { id: '1_PfqbIaSJs', title: 'f(x) - 4 Walls (Zekk Remix)', type: 'youtube' },
  { id: 'JtFpa3LWA_U', title: 'Ethyria - God sees all', type: 'youtube' },
  { id: 'wW0AFn5dWDk', title: 'aran - Sunny After Rain (feat. Kanata N.)', type: 'youtube' },
  { id: '5xfNTyy-Xhk', title: 'TUYU - Even tears withered', type: 'youtube' },
  { id: 'gFhdZJ2NXF0', title: 'PSYQUI - Stepper', type: 'youtube' },
  { id: '1cGQotpn8r4', title: 'TUYU - Goodbye to Rock you', type: 'youtube' },
  { id: 'lGFEqEFJ410', title: 'TUYU - Trapped in the Past', type: 'youtube' },
  { id: 'M7FH1dL51oU', title: 'Being low as dirt, taking whats important from me', type: 'youtube' },//test
  { id: 'Y4Y3zKDoUZo', title: 'Cloud Finding (feat. Kanata.N)', type: 'youtube' },//
  { id: '6I_tof5opzM', title: 'EmoCosine - This Club is Not 4 U', type: 'youtube' },
  { id: 'Wk1Kdiprhsg', title: 'Internet Pajamas Party', type: 'youtube' },
  { id: 'MxdfW0FJ48U', title: 'C-Show feat. 藍月なくる - AImee', type: 'youtube' },
  { id: 'FrIyl6XYo8I', title: 'PSYQUI & Blacklolita - fascinated feat. DJ勝也', type: 'youtube' },
  { id: '09DnapnNPSQ', title: 'We are the Lights (feat. DJ勝也)', type: 'youtube' },
  { id: 'jpyrjaxjCa4', title: 'Ray', type: 'youtube' },
  { id: '4tT0j_-42Ac', title: 'TUYU - What If This Isnt A Slave?', type: 'youtube' },
  { id: 'qFEOmSr54eU', title: 't+pazolite - YABBLE-KABBLE', type: 'youtube' },
  { id: '30R9b1fRe-Q', title: 'Tr.05 *********76', type: 'youtube' },
  { id: '1YGOjyMJbTI', title: 'Mischievous Princess', type: 'youtube' },
  { id: 'EBwh9QMSCtg', title: 'リンクロット (TORIENA Remix) (feat. 星宮とと)', type: 'youtube' },
  { id: 'gK-O1NxbOJw', title: 'Ghosting Image', type: 'youtube' },
  { id: '9ypDN0tCAnM', title: 'Momentum (feat. Renko)', type: 'youtube' },
  { id: 'pA3ckzAO4OU', title: 'Take Me Back (feat. DJ勝也)', type: 'youtube' },
  { id: 'lCY92xb5CuY', title: 'Secret Dance Hall (feat. PSYQUI)', type: 'youtube' },
  { id: 'tu59q57SGx4', title: 'Feels So Right (feat. Renko)', type: 'youtube' },//
  { id: 'SDMVDHdwYdc', title: 'Twilight', type: 'youtube' },
  { id: 'QNzLwKKXe5I', title: 'android52 - Fall In Love', type: 'youtube' },
  { id: 'hhnYYMgnPGQ', title: 'rejection - 曖昧アティチュード feat.中村さんそ', type: 'youtube' },
  { id: 'fs6IikbafoM', title: 'EmoCosine - Thinkin About U', type: 'youtube' },
  { id: 'FCWoBAm7PRQ', title: 'PSYQUI - センチメンタルハートボーイ(ft. Such)', type: 'youtube' },
  { id: 'dxK5R81k0Ow', title: 'Its gonna be alright (feat. shully)', type: 'youtube' },
  { id: 'yufJUbGnIBQ', title: 'alpha (LADYS ONLY Remix) (feat. 星宮とと)', type: 'youtube' },
  { id: 'zwpc0szX8gg', title: 'Cloud Diver (PSYQUI Remix)', type: 'youtube' },
  { id: '9vGJi6Mk-lw', title: '星宮とと+TEMPLIME - 水槽 (EmoCosine Remix)', type: 'youtube' },
  { id: 'CFyYffB3b3U', title: 'FunFunFun - GROWN UP ( PSYQUI Remix )', type: 'youtube' },
  { id: 'q6pGsAphEII', title: '[PSYQUI] Too Late', type: 'youtube' },
  { id: 'IAgTv8b20Dg', title: 'PSYQUI - Education', type: 'youtube' },
  { id: 'uSYTsSWaGrg', title: '0光年の孤独 (PSYQUI Remix)', type: 'youtube' },
  { id: 'jhaVY9CTIB8', title: 'PSYQUI - Chatroom', type: 'youtube' },
  { id: 'entorTv54tk', title: 'Spacelectro - EAT!EAT!EAT! feat. ももかみ (PSYQUI Remix)', type: 'youtube' },
  { id: '5qePUkd7ZEk', title: 'PSYQUI - Lightning', type: 'youtube' },
  { id: 'mEQZNRT6Pqk', title: '就寝御礼 (Original Mix)', type: 'youtube' },
  { id: 'Um5N4IOnCJM', title: 'ヒカリの方へ (Original Mix)', type: 'youtube' },
  { id: 'olWvy0PiLfA', title: 'TUYU - Compared Child', type: 'youtube' },
  { id: 'JprsKeAStcw', title: 'tofubeats - CAND¥¥¥LAND feat. LIZ (Pas Lam System Remix)', type: 'youtube' },
  { id: 'JXaaQU8aRt4', title: 'Recalled Collapse (feat. Such)', type: 'youtube' },
  { id: 'aKittTLhf_g', title: 'PSYQUI - Dont You Want Me (ft. Such) Mameyudoufu Remix', type: 'youtube' },
  { id: 'JIUr4PhqDlI', title: 'PSYQUI feat. Such - Hype (sky_delta Remix)', type: 'youtube' },
  { id: 'Uq5Rx1gl5G0', title: 'PSYQUI - Origin', type: 'youtube' },
  { id: '97yS1mTtNgM', title: 't+pazolite - Kowloon of the Kijoh', type: 'youtube' },
  { id: 'MwxgUVrj5m4', title: 'PSYQUI - ヒステリックナイトガール feat. Such (android52 Edit)', type: 'youtube' },
  { id: 'qu6rZwz2PgA', title: 'PSYQUI - ヒステリックナイトガール (Awakening) (ft. SUCH) | J-Pop', type: 'youtube' },
  { id: 'HV4iTnWg3Z0', title: 'ヒステリックナイトガール (Original Mix)', type: 'youtube' },
  { id: '6WmJ3jGBSN8', title: 'Mitomoro - Arcadia Bae', type: 'youtube' },
  { id: 'RBbi0FLKCeo', title: 'DJ Noriken feat. Kanae Asaba - Turn It Up', type: 'youtube' },
  { id: '0sNwatRwVJY', title: 'Srav3R - Future Raver (feat. PSYQUI)', type: 'youtube' },
  { id: 'hp2ql_mkp6k', title: 'VK (feat. DJ勝也)', type: 'youtube' },
  { id: 'vi12HVqzhQw', title: 'PSYQUI - Multitalents', type: 'youtube' },//Uig9poGUsrA
  { id: 'VQ6xRWxDfpM', title: 'Moony eyes (feat. Such)', type: 'youtube' },
  { id: 'mVSnyJtmAGU', title: 'Too Spicy', type: 'youtube' },
  { id: 'VTMeQcgOdK0', title: 'Night Club Junkie', type: 'youtube' },
  { id: 'uNM3cwhwYxU', title: 'USAO - Knight Rider', type: 'youtube' },
  { id: 'sRSJS4x_FhU', title: 'USAO - Chariot', type: 'youtube' },
  { id: 'OW8pMvedAtM', title: 'USAO - Cyaegha', type: 'youtube' },
  { id: 'gOKQV3H211I', title: 'honey trap bastardized', type: 'youtube' },
  { id: 'NE6mz7q-7y4', title: 'Milkoi ft. Serentium - Reflected //// Heartless Remix', type: 'youtube' },
  { id: '1I0ohTOKQcg', title: 'Reflected', type: 'youtube' },
  { id: 'y4EqHp05wN8', title: 'Lapix - What About Us (ft. Punipuni Denki) | J-Pop', type: 'youtube' },
  { id: 'zcVmHs_WzXU', title: 'PSYQUI - Be There', type: 'youtube' },
  { id: 'Wur-5UCQIa8', title: 'MUTEKI', type: 'youtube' },
  { id: 'E3AGsTtYIUI', title: 'PSYQUI - Fly to the moon feat. 中村さんそ', type: 'youtube' },
  { id: 'RVPKb4UDKu4', title: 'PSYQUI ft. Such - LOVE&ROLL', type: 'youtube' },
  { id: 'Z4OyvjUXZ3E', title: 'Moonheart (Mameyudoufu Remix)', type: 'youtube' },
  { id: 'mXUbv6wu-9w', title: 'Neko Hacker - Chocolate Adventure feat. Nanahira', type: 'youtube' },
  { id: 'uszWCvnWPP0', title: 'Changing the Future', type: 'youtube' },
  { id: 'kPUBMCJMKDg', title: 'Are you kidding me (feat. mami)', type: 'youtube' },
  { id: 'kJiigDCiJ50', title: 'Ayiko - Teichopsia (Drop 2 replaced with Drop 1)', type: 'youtube' },
  { id: 'OxiTrdB_x5k', title: 'Yunomi (ft. Happy Kuru Kuru)  はんぶんこ花火 (Jotori Remix)', type: 'youtube' },
  { id: 'l7reWEL1Zz4', title: 'tokiwa - Continue feat. 小鳥遊めぐみ ♪', type: 'youtube' },
  { id: 'rwxX90-KZOY', title: 'Still in my heart (feat. ぷにぷに電機)', type: 'youtube' },
  { id: '4A4ZiZwPejY', title: 'Mihka! X Kyoto Black  Kodokushi (孤独死)', type: 'youtube' },
  { id: 'aLXpjx2olPY', title: 'Mihka! x Kyoto Black - Kodokushi (VIP)', type: 'youtube' },
  { id: 'OfRLaX-62NY', title: 'Purukichi - Saturator ft. セトナツメ', type: 'youtube' },
  { id: 'jRWUoKBAhv4', title: 'PSYQUI - Mend Your Ways', type: 'youtube' },
  { id: 'R0AiVfOLwUU', title: 'NewJeans - Ditto (Zekk Remix)', type: 'youtube' },
  { id: 'p2vgeV57IcE', title: 'Falling Down (2019 Remaster) (feat. Renko & TRIANGLE)', type: 'youtube' },
  { id: 'Zw8AtOPA6SM', title: 'D4NCE (2019 Remaster)', type: 'youtube' },//
  { id: 'qDMKX6Azjyk', title: 'MAGENTA POTION - EmoCo.', type: 'youtube' },
  { id: 'dC0PlEAAHIc', title: 'Zekk - SUMMER (awfuless Remix)', type: 'youtube' },
  { id: 'D_GNoPylCDk', title: 'Raise Your Hands (feat. Such)', type: 'youtube' },//180
  { id: 'pj5gMan8yIM', title: 'Hype (feat. Such)', type: 'youtube' },
  { id: '7FFKjdd_eu8', title: 'Your Voice So... (M-Project Remix)', type: 'youtube' },
  { id: 'UvdkDDt4tAM', title: 'Rainbow Dream (feat. Mo∀)', type: 'youtube' },
  { id: 'o3F6-3cWjKU', title: 'OYASUMI in my dream (Original Mix)', type: 'youtube' },
  { id: 'c-6Qa1ykfWM', title: 'YES or NO (feat. DJ勝也)', type: 'youtube' },
  { id: 'Jw3GA6-WHQc', title: 'PSYQUI - Bye Or Not (ft. Mikanzil) | Future Core', type: 'youtube' },
  { id: 'xVnpaW6vB_g', title: '[Arcaea] Be There (HiTECH NINJA Remix) - PSYQUI【REMIX】', type: 'youtube' },
  { id: 'aMrIKN-yLKw', title: 'PSYQUI feat.Such - C & B', type: 'youtube' },
  { id: '0t0MO2s8qUk', title: 'PSYQUI - Up n Up', type: 'youtube' },
  




];


let svol = 50
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;


function shuffleIndices() {
  shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }
}

function createPlayer() {
  const currentMedia = playlist[shuffledIndices[currentIndex]];
  if (currentIndex != 0){ 
    if (playlist[shuffledIndices[currentIndex - 1]].type === 'youtube'){
      if (!player.paused()) {
        player.pause();
      }
    } else if (!playerl.paused){
      playerl.pause();
    }
  }


  if (currentMedia.type === 'youtube') {
    player.src({
      src: `https://www.youtube.com/watch?v=${currentMedia.id}`,
      type: 'video/youtube',
    });
    player.load();
    player.play();
    player.on('ended', playNextSong);
  } else if (currentMedia.type === 'local') {
    playerl = new Audio(currentMedia.id);
    playerl.volume = (svol / 300);
    playerl.autoplay = true;
    playerl.addEventListener('ended', playNextSong);

  }

  // Display the current song title
  const currentSongElement = document.getElementById('currentSong');
  currentSongElement.textContent = `Now Playing: ${currentMedia.title}`;

  // Play/Pause button functionality
  const playPauseButton = document.getElementById('playPauseButton');
  playPauseButton.addEventListener('click', togglePlayback);

  // Skip button functionality
  const skipButton = document.getElementById('skipButton');
  skipButton.addEventListener('click', skipMedia);

  // Volume slider functionality
  const volumeSlider = document.getElementById('volumeSlider');
  volumeSlider.addEventListener('input', () => {
    changeVolume(volumeSlider.value);
  });
}

function togglePlayback() {
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    if (player.paused()) {
      player.play();
    } else {
      player.pause();
    }
  } else if (playerl.paused){
      playerl.play();
  } else {
    playerl.pause();
  }
}

function playNextSong() {
  currentIndex++;
  if (currentIndex >= playlist.length) {
    shuffleIndices();
    currentIndex = 0;
  }
  createPlayer();
}

function skipMedia() {
  if (player.currentTime !== undefined) {
    player.currentTime = player.duration - 1; // Skip to the end of the media
  }
  playNextSong()
}

function changeVolume(volume) {
  svol = volume
  player.volume(volume / 100);
  if (playerl){
    playerl.volume = (volume / 300);
  }
}

shuffleIndices();
player = videojs('player', {
  techOrder: ['youtube'],
  autoplay: true,
  controls: true,
});

createPlayer();