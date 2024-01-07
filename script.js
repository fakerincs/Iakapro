let playlist = [
  { id: 'Recording.mp3', title: 'start', type: 'local' },
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
  { id: 'M7FH1dL51oU', title: 'Being low as dirt, taking whats important from me', type: 'youtube' },
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
  { id: 'Its Gonna Be All Right feat. shully.mp3', title: 'Its gonna be alright (feat. shully)', type: 'local' },
  { id: 'yufJUbGnIBQ', title: 'alpha (LADYS ONLY Remix) (feat. 星宮とと)', type: 'youtube' },
  { id: 'zwpc0szX8gg', title: 'Cloud Diver (PSYQUI Remix)', type: 'youtube' },
  { id: '9vGJi6Mk-lw', title: '星宮とと+TEMPLIME - 水槽 (EmoCosine Remix)', type: 'youtube' },
  { id: 'CFyYffB3b3U', title: 'FunFunFun - GROWN UP ( PSYQUI Remix )', type: 'youtube' },
  { id: 'q6pGsAphEII', title: '[PSYQUI] Too Late', type: 'youtube' },
  { id: 'Education.mp3', title: 'PSYQUI - Education', type: 'local' },//source
  { id: 'uSYTsSWaGrg', title: '0光年の孤独 (PSYQUI Remix)', type: 'youtube' },
  { id: 'jhaVY9CTIB8', title: 'PSYQUI - Chatroom', type: 'youtube' },
  { id: 'entorTv54tk', title: 'Spacelectro - EAT!EAT!EAT! feat. ももかみ (PSYQUI Remix)', type: 'youtube' },
  { id: '5qePUkd7ZEk', title: 'PSYQUI - Lightning', type: 'youtube' },
  { id: '-feat.psyqui-psyqui.mp3', title: '就寝御礼 (Original Mix)', type: 'local' },
  { id: 'Um5N4IOnCJM', title: 'ヒカリの方へ (Original Mix)', type: 'youtube' },
  { id: 'olWvy0PiLfA', title: 'TUYU - Compared Child', type: 'youtube' },
  { id: 'candyland.mp3', title: 'tofubeats - CAND¥¥¥LAND feat. LIZ (Pas Lam System Remix)', type: 'local' },
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
  { id: 'vi12HVqzhQw', title: 'PSYQUI - Multitalents', type: 'youtube' },
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
  { id: 'MUTEKI.mp3', title: 'MUTEKI', type: 'local' },
  { id: 'E3AGsTtYIUI', title: 'PSYQUI - Fly to the moon feat. 中村さんそ', type: 'youtube' },
  { id: 'RVPKb4UDKu4', title: 'PSYQUI ft. Such - LOVE&ROLL', type: 'youtube' },
  { id: 'Z4OyvjUXZ3E', title: 'Moonheart (Mameyudoufu Remix)', type: 'youtube' },
  { id: 'mXUbv6wu-9w', title: 'Neko Hacker - Chocolate Adventure feat. Nanahira', type: 'youtube' },
  { id: 'uszWCvnWPP0', title: 'Changing the Future', type: 'youtube' },
  { id: 'Are you kidding me feat. mami.mp3', title: 'Are you kidding me (feat. mami)', type: 'local' },
  { id: 'kJiigDCiJ50', title: 'Ayiko - Teichopsia (Drop 2 replaced with Drop 1)', type: 'youtube' },
  { id: 'OxiTrdB_x5k', title: 'Yunomi (ft. Happy Kuru Kuru)  はんぶんこ花火 (Jotori Remix)', type: 'youtube' },
  { id: 'l7reWEL1Zz4', title: 'tokiwa - Continue feat. 小鳥遊めぐみ ♪', type: 'youtube' },
  { id: 'rwxX90-KZOY', title: 'Still in my heart (feat. ぷにぷに電機)', type: 'youtube' },
  { id: 'xgxNp2pF3JQ', title: 'Mihka! X Kyoto Black  Kodokushi (孤独死)', type: 'youtube' },
  { id: 'aLXpjx2olPY', title: 'Mihka! x Kyoto Black - Kodokushi (VIP)', type: 'youtube' },
  { id: 'OfRLaX-62NY', title: 'Purukichi - Saturator ft. セトナツメ', type: 'youtube' },
  { id: 'jRWUoKBAhv4', title: 'PSYQUI - Mend Your Ways', type: 'youtube' },
  { id: 'R0AiVfOLwUU', title: 'NewJeans - Ditto (Zekk Remix)', type: 'youtube' },
  { id: 'p2vgeV57IcE', title: 'Falling Down (2019 Remaster) (feat. Renko & TRIANGLE)', type: 'youtube' },
  { id: 'Zw8AtOPA6SM', title: 'D4NCE (2019 Remaster)', type: 'youtube' },//
  { id: 'qDMKX6Azjyk', title: 'MAGENTA POTION - EmoCo.', type: 'youtube' },
  { id: 'dC0PlEAAHIc', title: 'Zekk - SUMMER (awfuless Remix)', type: 'youtube' },
  { id: 'D_GNoPylCDk', title: 'Raise Your Hands (feat. Such)', type: 'youtube' },
  { id: 'pj5gMan8yIM', title: 'Hype (feat. Such)', type: 'youtube' },
  { id: '7FFKjdd_eu8', title: 'Your Voice So... (M-Project Remix)', type: 'youtube' },
  { id: 'UvdkDDt4tAM', title: 'Rainbow Dream (feat. Mo∀)', type: 'youtube' },
  { id: 'o3F6-3cWjKU', title: 'OYASUMI in my dream (Original Mix)', type: 'youtube' },
  { id: 'c-6Qa1ykfWM', title: 'YES or NO (feat. DJ勝也)', type: 'youtube' },
  { id: 'Jw3GA6-WHQc', title: 'PSYQUI - Bye Or Not (ft. Mikanzil) | Future Core', type: 'youtube' },
  { id: 'xVnpaW6vB_g', title: '[Arcaea] Be There (HiTECH NINJA Remix) - PSYQUI【REMIX】', type: 'youtube' },
  { id: 'aMrIKN-yLKw', title: 'PSYQUI feat.Such - C & B', type: 'youtube' },
  { id: '0t0MO2s8qUk', title: 'PSYQUI - Up n Up', type: 'youtube' },
  { id: '20Sl9KYtqR8', title: '#1f1e33', type: 'youtube' },
  { id: 'mo38ueSSNhw', title: 'Goodbye Goodnight (feat. Shully)', type: 'youtube' },
  { id: 'J6d3_JEh5Aw', title: 'Srav3R - Extra No.3', type: 'youtube' },
  { id: 'y2IpG1kZbrs', title: 'fusq - Yeah!', type: 'youtube' },
  { id: 'AyR-AF9oJYQ', title: 'fusq - Perfume!', type: 'youtube' },//
  { id: 'i4w65eoL6PA', title: 'PSYQUI - Eyes on me feat. Such', type: 'youtube' },
  { id: '96mkdArkesA', title: 'Your voice so... (android52 Remix) (feat. Such)', type: 'youtube' },
  { id: 'kxVALRdEvH0', title: 'Daydream (feat. mega & Sithu Aye)', type: 'youtube' },
  { id: 'i7ouv9AyB_o', title: 'Dont you want me (feat. Such)', type: 'youtube' },
  { id: 'c-ia2aYKByw', title: 'REDALiCE vs USAO - SAIKYO STRONGER', type: 'youtube' },
  { id: 'FnAPrsJGFrU', title: 'Count', type: 'youtube' },
  { id: '_2XVuSaPxEE', title: 'Gloomy Flash (feat. mami)', type: 'youtube' },//
  { id: 'cXBzTnGUAf8', title: 'Signal (Mameyudoufu Remix) (feat. Such)', type: 'youtube' },
  { id: '7jmDL4y9fRg', title: 'Day by Day (feat. Nicole Curry)', type: 'youtube' },
  { id: '1hvTktgYORo', title: 'Midnight grow (feat. mami)', type: 'youtube' },
  { id: 'qwVMKUfs-eM', title: 'SUMMER (2019 Remaster)', type: 'youtube' },
  { id: 'LcjuEnSQLZ4', title: 'Crossing Delta', type: 'youtube' },
  { id: 'Ca2DohlQZ34', title: 'Zekk - MEJIRUSHI', type: 'youtube' },
  { id: 'od4QcDPpNVk', title: 'Camellia - Play With Fire / Hiasobi (feat. Hatsune Miku) 「Electroswing」', type: 'youtube' },
  { id: 'Just Love (feat. PSYQUI).mp3', title: 'Just Love (feat. PSYQUI)', type: 'local' },
  { id: 'iAcrubVEdAc', title: 'PSYQUI - A Walk', type: 'youtube' },
  { id: 'eMXZICpS3Lg', title: 'Psyqui - BloodyMary', type: 'youtube' },
  { id: 'ViW5T4GLXSo', title: 'ありがとう さようなら (feat. Such) (PSYQUI Remix)', type: 'youtube' },
  { id: 'x0vDDhinB9A', title: 'Your voice so... (feat. Such) (DJ Shimamura Remix)', type: 'youtube' },
  { id: 'BiIYNEWtdDw', title: 'PSYQUI - Dont you want me feat. Such (Guitar Cover)', type: 'youtube' },
  { id: 'So4xGJEyANc', title: 'PSYQUI - Start Up (feat. Such) Guitar Cover', type: 'youtube' },
  { id: 'AhFRG4cbwO0', title: 'Dream with Me', type: 'youtube' },
  { id: 'XIN0BMNgFf0', title: 'GYARI - アカリがやってきたぞっ (android52 Edit)', type: 'youtube' },
  { id: 'PzHg1Jzt1QQ', title: 'Zekk - Tomoyo', type: 'youtube' },
  { id: 'wC0wBXF_DYs', title: 'PSYQUI - Hype / Your voice so... feat. Such (Guitar Cover)', type: 'youtube' },
  { id: 'jlGF26v_y_M', title: 'PSYQUI - Raise Your Hands (feat. Such) Guitar Cover', type: 'youtube' },
  { id: 'dlraZy9f4Jk', title: 'PSYQUI - Pallet (feat. mikanzil) Guitar Cover', type: 'youtube' },//needs conformation
  { id: 'qU9l7thm848', title: 'PSYQUI - エンドロール (ft. Mikanzil) | J-Pop', type: 'youtube' },
  { id: '1Ss2H3Xt0D8', title: 'PSYQUI - Bye or not (feat. mikanzil) Guitar Cover', type: 'youtube' },
  { id: 'lEM-ChiVSyY', title: 'Mameyudoufu - Esperanza', type: 'youtube' },
  { id: 'DDtGQ9danyQ', title: 'ポルカドットスティングレイ', type: 'youtube' },
  { id: 'xnlJD8tKv4I', title: 'PSYQUI - Immortal', type: 'youtube' },
  { id: 'HEART BEAT.mp3', title: 'HEART BEAT', type: 'local' },
  { id: '8x09xhZ_H7Q', title: 'PSYQUI - Remorse', type: 'youtube' },
  { id: 'ug65BPPf2_M', title: 'No Time', type: 'youtube' },
  { id: 'PUog0Kdm40I', title: 'ヒステリックナイトガール - PSYQUI (Cover) / KMNZ LIZ', type: 'youtube' },//????
  { id: '_PVj_PSOU_I', title: 'ヒステリックナイトガール - PSYQUI [cover] / BOOGEY VOXX', type: 'youtube' },
  { id: 'uZIPat_lipM', title: 'ENERGY', type: 'youtube' },
  { id: 'PSD9yp8O6Yo', title: 'LASTING', type: 'youtube' },
  { id: 'bv7xMhvXJjc', title: 'Over Time', type: 'youtube' },
  { id: 'NvFHtR32-78', title: 'HYPER COLOR', type: 'youtube' },
  { id: 'uaoVckBoBVY', title: 'VOLTA - ACE', type: 'youtube' },
  { id: 'n1q-R6iNxRE', title: 'Camellia - Dokuhebi / Venomous Snake (feat. Hatsune Miku)', type: 'youtube' },
  { id: 'B2VL_CEIunI', title: 'PSYQUI - Are You Kidding Me (ft. Mami) Piano Cover', type: 'youtube' },
  { id: 'A3Xf4wd-0QQ', title: 'PSYQUI feat. Such - Hysteric Night Girl Piano Cover', type: 'youtube' },
  { id: 'himitsupolkadot.mp3', title: 'ポルカドットスティングレイ「ヒミツ」', type: 'local' },
  { id: 'r48R3iD3lqk', title: '幽霊', type: 'youtube' },
  { id: '_gWn38pnmqI', title: 'snooze / wotaku feat. SHIKI', type: 'youtube' },
  { id: 'Oshama Scramble! (uncut edition).mp3', title: 'Oshama Scramble! (uncut edition)', type: 'local' },
  { id: 'lqhqX1pd9_A', title: '秘密のメリーゴーランド (feat. somunia)', type: 'youtube' },
  { id: '63hvgikEJO0', title: 'White Canvas (feat. 藍月なくる)', type: 'youtube' },
  { id: 'tpp5TUsrBQI', title: 't+pazolite - Rush Away', type: 'youtube' },
  { id: 'XoUTW61ONwU', title: '魔女のダンス', type: 'youtube' },
  { id: 'vVEqqGhZfGQ', title: 'Lollipop!!', type: 'youtube' },
  { id: 'xkbWC6jlUqw', title: 'SHINYWAVE', type: 'youtube' },
  { id: 'Bh4smQtR7H4', title: 'awfuless - Redemption (Guitar Cover)', type: 'youtube' },
  { id: '3HvG634gTG0', title: 'Purukichi feat. nasaki - Gimme ya candy', type: 'youtube' },
  { id: 'jP1kz8aPywA', title: 'まさらP/masara - Love10 (ft. Juunana & Ran)', type: 'youtube' },
  { id: 's0-4rrHIdZI', title: '[lapix] Carry Me Away (Extended Mix)', type: 'youtube' },
  { id: 'QfNOZQZXHf4', title: 'Srav3R - More To This', type: 'youtube' },
  { id: 'j0G7OV2WS0Q', title: 't+pazolite - Marble', type: 'youtube' },
  { id: 'Nj7NcdlZG6Q', title: 'PSYQUI ft. Marpril - Girly Cupid (the sub account & bassmicrobe REBUILD)', type: 'youtube' },
  { id: 'Cmb71cy3x5w', title: 'Lone Alpha - Festival Rush (Blu Remix)', type: 'youtube' },
  { id: 'LLb5fdICQOU', title: 'サイレン feat. 奈良ひより', type: 'youtube' },
  { id: 'iWv7uSylAQc', title: 'Pink Sugar ピンクの砂糖', type: 'youtube' },
  { id: 'H4PZ7mju5QQ', title: 'Moe Shop - WONDER POP', type: 'youtube' },
  { id: 'dXh9x_3wo7U', title: 'Candle - Worry About Me', type: 'youtube' },
  { id: 'YhDG3ns3wx0', title: 'ESAI - Caffeine Kitty', type: 'youtube' },
  { id: 'Fujii Kaze - Matsuri Piano Cover.mp3', title: 'Fujii Kaze - Matsuri Piano Cover', type: 'local' },
  { id: 'qdMwV8cfzwI', title: 'Moe Shop - Baby Pink (w/ YUCe)', type: 'youtube' },
  { id: 'Fujii Kaze -  MatsuriOfficial Video.mp3', title: 'Fujii Kaze - Matsuri', type: 'local' },
  { id: 'aNAL8CmJHyA', title: 'honeymoonarcade - DIGICOMPLEX (w/ karmadylo)', type: 'youtube' },
  { id: 'ZH66SKmx2IY', title: 'EmoCosine - Step to Sky', type: 'youtube' },
  { id: 'lnpBBOxGHCs', title: 'ヨノナカ', type: 'youtube' },
  { id: 'ev3CXEpHBNU', title: 'キライトネス', type: 'youtube' },
  { id: 'CXQN1eVmzMA', title: 'Fiction / HACHI  KMNZ LITA ', type: 'youtube' },
  { id: '__mhemzWowg', title: 'PSYQUI - So Cute, So Cool', type: 'youtube' },
  { id: 'Agf6UIaqjMI', title: 'Succducc - me & u', type: 'youtube' },
  { id: 'ou8ac7l1y7Y', title: '『曖昧サイボーグ』feat.うごくちゃん & JungMato - Neko Hacker', type: 'youtube' },
  { id: 'Ch893cH4epM', title: 'cant take my eyes off you (Purukichi Remix)', type: 'youtube' },
  { id: 'nO-JWugqZxI', title: 'Darby - Feel The Rush', type: 'youtube' },
  { id: 'Q3G9ArxsO-U', title: 'PSYQUI - DJ Noriken - スターゲイザ (ft. YUCe) | PSYQUI Remix', type: 'youtube' },
  { id: 'nZapnXS0H5U', title: 'Paper Idol - Tightrope', type: 'youtube' },
  { id: 'Nph6Qlmh66c', title: 'Andora - Flashback (feat. RANASOL', type: 'youtube' },
  { id: 'KVZrDysVkIA', title: 'Andora - Utopia (feat. 水槽)', type: 'youtube' },
  { id: '0QLnRLuCQ0g', title: 'Andora - Pop It (feat. 梓川)', type: 'youtube' },
  { id: 'SD1g1L7i90A', title: 'Andora - Goodbye Yesterday (feat. 弱酸性)', type: 'youtube' },
  { id: 'j4hl-hz27QQ', title: 'Andora - Miracle (feat. よーい)', type: 'youtube' },
  { id: 'Xp4lcn7Ln6g', title: 'Andora - Flicker (feat. RANASOL)', type: 'youtube' },
  { id: 'WukAfW86zhE', title: 'Andora - Euphoria (feat. WaMi)', type: 'youtube' },
  { id: 'ZDUvxc6xdQM', title: 'Andora - Stranger (feat. RANASOL) ', type: 'youtube' },
  { id: 'EHXpQZpKrCY', title: 'Andora - Starlight', type: 'youtube' },
  { id: 'jVGyK_HRE5E', title: 'Andora - Dawn (feat. Such)', type: 'youtube' },
  { id: 'Paper Idol - James Bond.mp3', title: 'Paper Idol - James Bond', type: 'local' },
  { id: 'TpqGgg-ywyA', title: 'hours', type: 'youtube' },
  { id: 'qkBB5LrcwZ4', title: 'icesawder Stardom', type: 'youtube' },
  { id: 'b-q9xzrjV5E', title: 'tekalu - Letter feat. おんた', type: 'youtube' },
  { id: 'zRZZlVY8zSM', title: 'Virtual Riot - Everyday (feat. Yosie)', type: 'youtube' },
  { id: 'Why Not Me.mp3', title: 'Forrest.  Why Not Me (ft. Biskwiq)', type: 'local' },//tpaz geox
  { id: 'Py9IxJeTzyc', title: 'DOMINATOR', type: 'youtube' },
  { id: 'EPFUuJxidRM', title: 'GOLDEN BATS', type: 'youtube' },
  { id: 'm31TIMF3VZE', title: 'ロボットハート (feat. Kizuna AI)', type: 'youtube' },
  { id: '6yZNi4PGyfo', title: 'めんたいコズミック (feat. nicamoq)', type: 'youtube' },
  { id: 'I7-EWVVWFa8', title: '枕元にゴースト (feat. nicamoq)', type: 'youtube' },
  { id: '3k6cHJn3eLE', title: 'ロボティックガール - Yunomi', type: 'youtube' },
  { id: '114yuwqcQhM', title: 'インドア系ならトラックメイカー', type: 'youtube' },
  { id: '8H6FP6yCeTw', title: 'ゆのみっくにお茶して-Yunomi feat.nicamoq', type: 'youtube' },
  { id: 'llDbIGYMQgU', title: 'サンデーモーニングコーヒー (feat. nicamoq)', type: 'youtube' },
  { id: 'XV136qmsa1M', title: '星降る夜のアデニウム (feat. nicamoq)', type: 'youtube' },
  { id: '0MtE7GZM36Q', title: '東京シュノーケル (feat. nicamoq)', type: 'youtube' },
  { id: 'h5dbxZZ0m7w', title: '守護霊 (feat. nicamoq)', type: 'youtube' },
  { id: '-oeQf_o9dFA', title: 'ココロフロート (feat. nicamoq)', type: 'youtube' },
  { id: 'YHQCwcOShUw', title: 'ダンスフロアの果実 (feat. nicamoq)', type: 'youtube' },
  { id: 'EN9JkBu87Bg', title: '明けない夜、醒めない夢 (feat. nicamoq)', type: 'youtube' },
  { id: 'yj9YUKpC6A0', title: '神様の渦 (feat. nicamoq)', type: 'youtube' },
  { id: 'jfpEXx1zhoI', title: '銀河鉄道のペンギン (feat. nicamoq)', type: 'youtube' },
  { id: '9fNiP-QIFh0', title: 'サ・ク・ラ・サ・ク (feat. nicamoq)', type: 'youtube' },
  { id: 'cO5taTdgldY', title: '夢でまたあえたらなあ (feat. nicamoq)', type: 'youtube' },
  { id: '_P3Qr5j-ddk', title: 'ハッピーライフ (feat. nicamoq)', type: 'youtube' },
  { id: 'UKXzq37aybA', title: '大江戸コントローラー - Yunomi feat.TORIENA', type: 'youtube' },
  { id: 'NdAbKue_-Ss', title: '惑星ラビット (feat. TORIENA)', type: 'youtube' },
  { id: 'u3u3Ul3JkPI', title: 'バンブーディスコ (feat. TORIENA)', type: 'youtube' },
  { id: 'KbfdX58OH3M', title: 'さよならインベーダー (feat. TORIENA)', type: 'youtube' },
  { id: 'O60L_xcwS7M', title: '大江戸コントローラー (TORIENA Remix) (feat. TORIENA)', type: 'youtube' },
  { id: 'hy--4uT46dw', title: 'Just The Two Of Us', type: 'youtube' },
  { id: 'U_Ed7uCmFmo', title: 'PSYQUI feat. Such - dont you want me Piano Cover', type: 'youtube' },
  { id: '7JaElIMPFZw', title: 'PSYQUI feat. Marpril - Girly Cupid Piano Cover', type: 'youtube' },
  { id: 'etC50bzOjZI', title: 'PSYQUI (ft. mikanzil) - エンドロール (Endroll) Piano Cover', type: 'youtube' },
  { id: '-WrzAME9eps', title: 'YUCe - macaron moon Piano Cover', type: 'youtube' },
  { id: 'Uo9bdafhVFU', title: 'PSYQUI - Raise Your Hands (ft. Such) Piano Cover', type: 'youtube' },
  { id: 'sJpfHOKwNyI', title: 'PSYQUI - Bye or Not (ft. mikanzil) Piano Cover', type: 'youtube' },
  { id: '4wUMHP8Z5gs', title: 'Candle & Rick? - Toy Kingdom', type: 'youtube' },
  { id: 'W4DaKm-2E_U', title: 'Kunaru - Cheese', type: 'youtube' },
  { id: 'XrIC8wBXcZQ', title: 'NewJeans - Ditto (Guitar Cover)', type: 'youtube' },
  { id: '3mojgQjdlXU', title: 'Imitation Circus', type: 'youtube' },
  { id: '0xR3NYZyh_Y', title: 't+pazolite & P*Light - IZANA (Uncut Edition)', type: 'youtube' },
  { id: 'uSUpcKhfRGc', title: 't+pazolite VS 削除 - Silentphobia', type: 'youtube' },
  { id: '2hQyktmzl5A', title: 't+pazolite - Third Time UNLucky', type: 'youtube' },
  { id: '8oFnoqkhmz8', title: 't+pazolite & ぷにぷに電機 - déjà vu', type: 'youtube' },
  { id: 'wkv9rWB8Ek8', title: 't+pazolite & ななひら - Screamin Showcase', type: 'youtube' },
  { id: 'KeoZgXJhmQI', title: 't+pazolite & Nanahira - Theyre again&again', type: 'youtube' },
  { id: '7knlsjItLX8', title: 't+pazolite feat. ななひら - ONOMATO Pairing!!!', type: 'youtube' },
  { id: 'Gv31RpXv8Fk', title: 't+pazolite & ななひら - Otsukimi Party Hard (SSRemake)', type: 'youtube' },
  { id: 'rr8xmyumB6U', title: 't+pazolite - TROPICAL A GOGO', type: 'youtube' },
  { id: 'i3JgoJY12OY', title: 't+pazolite - Datamania', type: 'youtube' },
  { id: 'jrJXvlARGG4', title: 't+pazolite - Datamania (tpz Overheat Remix)', type: 'youtube' },
  { id: 'g5qu3kFTIEc', title: 't+pazolite - Schrap Syrup 89', type: 'youtube' },
  { id: '3hPfbnCSp3s', title: 't+pazolite - Cheatreal', type: 'youtube' },
  { id: 'HfkSwLSvR_c', title: 't+pazolite - Elder Dragon Legend (feat. Kabotya)', type: 'youtube' },
  { id: 'xRhc9D8vGR0', title: 't+pazolite - Countdown 321', type: 'youtube' },
  { id: '9Qdu6ikSQIg', title: 't+pazolite - Pumpin Junkies #TPZREMAKE', type: 'youtube' },
  { id: 'IaicxLLUbb0', title: 't+pazolite - Ultrasonic Anthem', type: 'youtube' },
  { id: 'agUZDHlhPjw', title: 't+pazolite - Messed Up Gravity', type: 'youtube' },
  { id: 'Tp6ot4ts6HU', title: 't+pazolite - Tempestissimo (Uncut Edition)', type: 'youtube' },
  { id: '5dB5ULNMIiw', title: 't+pazolite - YAKENI in the Rain feat. Watashi Kobayashi', type: 'youtube' },
  { id: '1kkBVIGbldU', title: 't+pazolite - ::DROPOUT::', type: 'youtube' },
  { id: '9vISlvnJ6kY', title: 't+pazolite - YURUSHITE (Uncut Edition)', type: 'youtube' },
  { id: '1Kyqk1CKDNw', title: 't+pazolite - Overcome Me!!!!!!!', type: 'youtube' },
  { id: 'bVSqBkeLSzY', title: 'QZKago Requiem/t+pazolite', type: 'youtube' },
  { id: 'ajD9DszHYQo', title: 't+pazolite - Heartache Debug (feat. 赤川ねね)', type: 'youtube' },
  { id: 'ue-jAQfAHVc', title: 't+pazolite - BIG HEAD BANGING', type: 'youtube' },
  { id: '5BlSQpejMTw', title: 't+pazolite - Chartreuse Green', type: 'youtube' },
  { id: 'n1w4XR-9VdQ', title: 't+pazolite - Psyched Fevereiro (Uncut Edition)', type: 'youtube' },
  { id: 'O3331dYq3uc', title: 't+pazolite - Intro & Dive High', type: 'youtube' },
  { id: 'eTyH5abt8F0', title: 't+pazolite - Refactoring Travel (feat. ななひら)', type: 'youtube' },
  { id: 'O1DpeHC-D5Y', title: 't+pazolite - Fusion Cruise', type: 'youtube' },
  { id: 'S5BQF_kFxlE', title: 't+pazolite - Waku ga Dokidoki', type: 'youtube' },
  { id: 'g_hYkzSk9ZA', title: 't+pazolite - 星屑ストラック (Uncut Edition)', type: 'youtube' },
  { id: 'LbygHldJIpE', title: 't+pazolite - Good Night, Bad Luck (Uncut Edition)', type: 'youtube' },
  { id: '2J3FNQE8Cps', title: 't+pazolite - Q.T.Rush', type: 'youtube' },
  { id: 'ERHjXL2YJ7Y', title: 't+pazolite - HYPER4ID', type: 'youtube' },
  { id: 'PVrhUZOcVgw', title: 't+pazolite - Hallucination XXX (Uncut Edition)', type: 'youtube' },
  { id: 'O4DTDUabYDg', title: 'yo.a.ke.', type: 'youtube' },
  { id: 'uIZAA8tDh7s', title: 'Our Wrenally/t+pazolite', type: 'youtube' },
  { id: 'F75k-cmtjeY', title: 't+pazolite - illanai-assorted', type: 'youtube' },
  { id: 'A3eHgip6DQM', title: 't+pazolite - Sick Hack', type: 'youtube' },
  { id: 'hCCYEdib_Jc', title: 't+pazolite - You are the Miserable (Uncut Edition)', type: 'youtube' },
  { id: 'hkz6HzI_QQI', title: 't+pazolite - デナイアルミュトラ', type: 'youtube' },
  { id: '1Su9vCtCdqc', title: 't+pazolite - Marry me, Nightmare (Uncut Edition)', type: 'youtube' },
  { id: '2dhifVG9Ssg', title: 't+pazolite - Chrome VOX (Uncut Edition)', type: 'youtube' },
  { id: 'qOToXkfLtYY', title: 't+pazolite - Alone in the Starlight (with you)', type: 'youtube' },
  { id: '9xGEjXPR_Bo', title: 't+pazolite - Say Hello to HOLLOWood (feat. 赤川ねね)', type: 'youtube' },
  { id: 'ausqr8vTMgc', title: 't+pazolite - You are the Miserable (Laur Remix)', type: 'youtube' },
  { id: '9XhF2y33W-c', title: 't+pazolite - Party in the HOLLOWood (feat. ななひら)', type: 'youtube' },
  { id: 'FNOkyJUQRIQ', title: 't+pazolite - Little Yawn', type: 'youtube' },
  { id: 'Y61V-q0kv0E', title: 't+pazolite - Satisfiction (Uncut Edition)', type: 'youtube' },
  { id: 'OWP9CxoxVL0', title: 't+pazolite - Pleasure Ritual', type: 'youtube' },
  { id: 'bZqeeWXYT9I', title: 't+pazolite - Pumpin Junkies (Kobaryos FTN-Remix)', type: 'youtube' },
  { id: 'rIPOOoQxquE', title: 't+pazolite - CENSORED!!', type: 'youtube' },
  { id: 'SxnFUrGY1eA', title: 'Calliope Mori - Excuse My Rudeness, but Could You Please RIP?♡ (t+pazolite Remix)', type: 'youtube' },
  { id: 'j_1BbLBe2r4', title: 't+pazolite - ヒミツCULT (Himitsu CULT)', type: 'youtube' },
  { id: 'tUE86Nic72I', title: 'Mittsies - Vitality (t+pazolite Remix)', type: 'youtube' },
  { id: 'cOe9RPqg1GE', title: 'Sana - Packet Hero', type: 'youtube' },
  { id: 'MbnyytaPNCo', title: 'Lite Show Magic - TRICKL4SH 220 (22,000 Power Extended)', type: 'youtube' },
  { id: 'JajrHFiG47w', title: 'JajrHFiG47w', type: 'youtube' },
  { id: 'Ug4v3dvUcLE', title: 't+pazolite - Garakuta Doll Play (Uncut Edition)', type: 'youtube' },
  { id: 'sA2tJZ-RqvE', title: 't+pazolite - Pumpin Junkies', type: 'youtube' },
  { id: 'LtrB_8CejUA', title: 'Yunomi - ジェリーフィッシュ (feat. ローラーガール)', type: 'youtube' },
  { id: 'z9SNCfLy8VU', title: 'Nasty * Nasty * Spell', type: 'youtube' },
  { id: 'QsuAKlNe_rI', title: 'Camellia - Exit This Earths Atomosphere (from PLANET//SHAPER)', type: 'youtube' },
  { id: 'EnRQTltrLX8', title: 't+pazolite & Getty - Twisted Drop Party', type: 'youtube' },
  { id: 'X7TwlyV8tQE', title: 'Blackmagik Blazing', type: 'youtube' },
  { id: 'az-WrqWL6oo', title: 'We Magicians Still Alive in 2021', type: 'youtube' },
  { id: 'WNLBSarUluo', title: 'Night Raid with a Dragon', type: 'youtube' },
  { id: 'RQV96Bxsxsw', title: 'Geoxor - Moneko', type: 'youtube' },
  { id: 'TsNc66xsF1o', title: 'Geoxor - Nana', type: 'youtube' },
  { id: 'oklzVH8FfVQ', title: 'Geoxor - Virtual', type: 'youtube' },
  { id: 'aMntbdEiCr4', title: 'Panda Eyes x Geoxor - Lucid Dream', type: 'youtube' },
  { id: 'EHyoAXILbA8', title: 'Snails House  Moe Shop - Pastel', type: 'youtube' },
  { id: 'byAn2Cl9iiM', title: 'Psyqui - Screwdriverrrr', type: 'youtube' },
  { id: 'CXQN1eVmzMA', title: 'Psyqui - Fiction / HACHI  KMNZ LITA', type: 'youtube' },
  { id: 'nnXClR0uSjc', title: '笑えない - PSYQUI feat.mikanzil', type: 'youtube' },
  { id: '66VXgLCqRLM', title: 'Malt - Seasons', type: 'youtube' },
  { id: 'hiZyhFmRX74', title: 'okz - Pieces', type: 'youtube' },
  { id: 'pp1vpZgyEbY', title: 'MAQUINA - Dont Need To Hide', type: 'youtube' },
  { id: 'QhNE4Ky5Je4', title: 'OUKIISH feat. Marpril - シンフォニア', type: 'youtube' },
  { id: '2_JtzW-GHUc', title: 'okz - Sw33ts', type: 'youtube' },
  { id: 'YPrKQBCJD5U', title: 'KONPEKI ft.カミるれ - ETERNAL HERO', type: 'youtube' },
  { id: 'svH3tRDC1Mw', title: 'Author wind - Arcade Blaster', type: 'youtube' },
  { id: '_anjTBIQ60k', title: 'Altermis - Akatsuki', type: 'youtube' },
  { id: 'XpSJU0s1eck', title: 'Juwubi - I F*PTOO MUCH ON ANIME GIRLS', type: 'youtube' },
  { id: 'MBSXPyaz17g', title: 'dark cat - CRAZY MILK', type: 'youtube' },
  { id: 'e7oViSudek8', title: 'Dark Cat  Banana Street', type: 'youtube' },
  { id: 'xa5lZ-v8Aiw', title: 'PSYQUI - Still Lonesome', type: 'youtube' },
  { id: '7PYe57MwxPI', title: 'dark cat - BUBBLE TEA (feat. juu & cinders)', type: 'youtube' },
  { id: 'Unart5lZCTQ', title: 'No Stopping Us', type: 'youtube' },
  { id: 'vtQMR8wYkdQ', title: 'Beautiful Future', type: 'youtube' },
  { id: 'rFSrVcsicEU', title: 'Karma D-Live ~ BOOGEY VOXX vs PSYQUI (東方/Touhou Vocal Arrange)', type: 'youtube' },
  { id: 'Xu7qgXfjuDU', title: 'PSYQUI - In the past', type: 'youtube' },
  { id: 'KHKX6dvhJuw', title: 'Marpril - Spiral Fortune [CHUNITHM]', type: 'youtube' },
  { id: 'Xj8FxsY6c4U', title: 'lapix - blue love (ft. YUCe) (PSYQUI Remix)', type: 'youtube' },
  { id: 'tlqlCOdNMnQ', title: 'PSYQUI - J/F (JunknFootwork)', type: 'youtube' },
  { id: '1iKZhsc8WGs', title: 'Moe Shop - Charm (w/ Puniden)', type: 'youtube' },
  { id: 'y-27yTRTJtE', title: 'Moe Shop - Cerise', type: 'youtube' },
  { id: 'ky_UWqWlNAw', title: 'Matra Magic - Gonna Love U', type: 'youtube' },
  { id: '18rR-fR1IWo', title: 'Dont think,スマイル!!', type: 'youtube' },
  { id: 'M7KI0mRenHk', title: 'Kunaru - One In A Million', type: 'youtube' },
  { id: '4rtga72rPTY', title: '[Blue Archive] Theme 58 - SAKURA PUNCH (Nor)', type: 'youtube' },
  { id: 'e79OWeO-nck', title: 'VOLTA - If u really', type: 'youtube' },
  { id: 'ea_V3Nfk40Y', title: 'Zekk - POWER OF UNITY', type: 'youtube' },
  { id: 'ikWjlRyRGb8', title: 'ZONE', type: 'youtube' },
  { id: 'f9Zt5OqIzIk', title: 'CASE', type: 'youtube' },
  { id: '3NUbx0WVRIw', title: 'Andora - Moonrise (feat. WaMi) MV 『ムーンライズ』', type: 'youtube' },
  { id: 'O6Ose2oLfMU', title: 'PERSONA', type: 'youtube' },
  { id: 'WJIWINuwBgM', title: 'blue roar (feat. Purukichi)', type: 'youtube' },
  { id: 'vkkHEEOj5rc', title: 'N3XTAGE', type: 'youtube' },
  { id: 'SYFAseykCFw', title: 'Word Of Old', type: 'youtube' },
  { id: 'IBrsSu-5apY', title: 'SWANNAH - by my side (feat. Eileen)', type: 'youtube' },
  { id: 'UVDjM7fcUiI', title: 'PSYQUI - ヨノナカ Piano Cover', type: 'youtube' },
  { id: '8uPeIvsyMxc', title: 'City Girl in the Love', type: 'youtube' },
  { id: 'LnVYaPhkPok', title: 'Andora - Dopamine (feat. 水槽) MV 『ドーパミン』', type: 'youtube' },
  { id: 'BZceUzh0FoQ', title: 't+pazolite - Lilac Feel', type: 'youtube' },
  { id: 'dywmvip.mp3', title: 'PSYQUI - Don\'t You Want Me (VIP FF remix)', type: 'local' },
  { id: 'EOC2Qusbu18', title: 'Mameyudoufu - Wave (feat. 藍月なくる) Guitar Cover', type: 'youtube' },
  { id: 'Tb68mARvjUc', title: 'Geoxor & poixone - I\'m Here', type: 'youtube' },
  { id: '5eu_fkIbmxc', title: 'Stardust', type: 'youtube' },
  { id: 'XzZ9iyjuYiI', title: '【PSYQUI】Don`t you want me Are you kidding me', type: 'youtube' },
  
  
];
var currentname = "default(c)";//and i thought i could escape
var shuffle = false;
var playlists = [{list: playlist, name:"default(c)"}];
let svol = 50;
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;
let videoOff = true;
var currentlistindex = 0;
const playerElement = document.getElementById("player");
const playerContainer = document.getElementById("playerContainer");
const currentSongElement = document.getElementById('currentSong');
const videoButton = document.getElementById('videoButton');
videoButton.addEventListener('click', toggleVideo);
const playPauseButton = document.getElementById('playPauseButton');
playPauseButton.addEventListener('click', togglePlayback);
const skipButton = document.getElementById('skipButton');
skipButton.addEventListener('click', skipMedia);
const volumeSlider = document.getElementById('volumeSlider');
const videoSlider = document.getElementById('videoSlider');
const durationtext = document.getElementById('durationtext');
function parseLinks() {
  var inputText = document.getElementById('fileInput').value;
  document.getElementById('fileInput').value="";
  if (inputText==""){
    return;
  }
  var lines = inputText.split('\n');
  var resultArray = [];

  var regex = /(?:VM\d+:?\d*\s*)?(.*?);(https:\/\/www\.youtube\.com\/watch\?v=.*$)/;
  resultArray.push({ id: 'Recording.mp3', title: 'start', type: 'local' });
  lines.forEach(function (line) {
    var match = line.match(regex);
    if (match) {
      var title = match[1].trim();
      var url = match[2].trim();
      var id = url.split('v=')[1];
      resultArray.push({ id: id, title: title, type: 'youtube' });
    }
  });
  playlists.push({list: resultArray, name: 'newlist'});
  localStorage.setItem("playlists", JSON.stringify(playlists));
  addplaylistelement("newlist");
}
function selectplaylist(name){
  for (let i = 0; i<playlists.length; i++){
    if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
      document.getElementById(playlists[i].name + 's').style= "color: var(--main-color); border-color: var(--background-color)";
    }
  }
  for (let i = 0; i<playlists.length; i++){//man i am so braindead
    if (playlists[i].name == name){
      playlist = playlists[i].list;
      currentname = playlists[i].name;
      generateUpcoming();
      document.getElementById(playlists[i].name + 's').style= "color: white; border-color: var(--main-color)";
    }
  }
}
function renameplaylist(name){
  var newName = prompt('Enter a new name for the button:', 'New Button Name');
  // Check if the user entered a name and update the button text
  if (newName == "") {
    return;
  }
  for (let i = 0; i<playlists.length; i++){
    if (playlists[i].name == newName){
      alert("already exists");
      return;
    }
  }
  document.getElementById(name + "s").innerText = `${newName}`;
  document.getElementById(name + "s").id = newName + "s";
  document.getElementById(name + "r").id = newName + "r";
  document.getElementById(name + "c").id = newName + "c";
  document.getElementById(name).id = newName;
  document.getElementById(newName + "s").setAttribute('onclick', "selectplaylist('"+ newName +"')");
  document.getElementById(newName + "r").setAttribute('onclick', "renameplaylist('" + newName+ "')");
  document.getElementById(newName + "c").setAttribute('onclick', "closer('"+ newName + "')");
  for (let i = 0; i<playlists.length; i++){
    if (playlists[i].name == name){
      playlists[i].name = newName;
      currentname = newName;
      localStorage.setItem("playlists", JSON.stringify(playlists));
      return;
    }
  }
  
}
function closer(name){
  if (playlists.length <= 1){
    return;
  }
  for (let i = 0; i<playlists.length; i++){
    if (playlists[i].name == name){
      document.getElementById(playlists[i].name + 's').style= "color: var(--main-color); border-color: var(--background-color)";
      playlists.splice(i, 1);
      playlist = playlists[0].list;
      currentname = playlists[0].name;
      document.getElementById(playlists[0].name + 's').style= "color: white; border-color: var(--main-color)";
      generateUpcoming();
      document.getElementById(name).remove();
      localStorage.setItem("playlists", JSON.stringify(playlists));
      return;
    }
  }
}
function addplaylistelement(title){
  document.getElementById('playlistmenu').insertAdjacentHTML("beforeend", `<div class="pcont" id=\'${title}\'><button class="pbutt" id=\'${title}s\' style="color:var(--songs-color);" onclick="selectplaylist(\'${title}\')">${title}</button><button class="pbutt" id=\'${title}r\' onclick="renameplaylist(\'${title}\')">R</button><button class="pbutt" id=\'${title}c\' onclick="closer('${title}')">X</button></div>`);//why do i have to code js in html in js....
}
function exportp(){
  if (document.getElementById("result").innerHTML != ""){
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("result").style.display = "none";
    return
  }
  else{
    document.getElementById("result").style.visibility = "visible"
    document.getElementById("result").style.display = "flex";
  }
  let message = ``
  for (let i = 0; i<playlist.length; i++){
    if (playlist[i].type == "youtube"){
      message += playlist[i].title + ";" + "https://www.youtube.com/watch?v=" + playlist[i].id + "\n";// we gonna skip local for now(a long time)
    }
  }
  document.getElementById("result").innerHTML= message;
}
function copy() {
  var container = document.getElementById("result");
  var range = document.createRange();
  range.selectNode(container);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
}
if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("shuffle")==null){
    localStorage.setItem("shuffle", shuffle);
  }
  else{
    shuffle = JSON.parse(localStorage.getItem("shuffle"));
  }
  if (localStorage.getItem("volume")==null){
    localStorage.setItem("volume", svol);
  }
  else{
    svol = JSON.parse(localStorage.getItem("volume"));
    volumeSlider.value = svol;
  }
  if (localStorage.getItem("playCount")==null){
    localStorage.setItem("playCount", 0);
  }
  document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
  if (localStorage.getItem("playlists")==null){
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }
  else{
    playlists = JSON.parse(localStorage.getItem("playlists"));
  }
  if (localStorage.getItem("pull")!=null){
    var prevlists = JSON.parse(localStorage.getItem("pull"));
    for (let i = 0; i < prevlists.length; i++) {
      if (prevlists[i].name != "default(c)"){
        playlists.push(prevlists[i])
      }
    }
    localStorage.setItem("playlists", JSON.stringify(playlists));
    localStorage.removeItem("pull");
  }
  playlist = playlists[0].list;
  currentname = playlists[0].name;
  for (let i = 0; i<playlists.length; i++){
    addplaylistelement(playlists[i].name);
    if (i==0){
      document.getElementById(playlists[i].name + 's').style= "color: white; border-color: var(--main-color)";
    }
  }
}
else{
  alert("localstorage not supported, aka everything is prob broken");
  console.log("idk why i even added this check, website doesnt do anything if it doesnt work");
}
function pull(){
  if (currentname != "default(c)"){
    alert("Pulling from cloud is to pull from github owner, for the playlist default(c). It will replace the default playlist. If you want to have my playlist, rename your playlist to default(c)");
    return;
  }
  localStorage.setItem("pull", JSON.stringify(playlists));
  localStorage.removeItem("playlists");
  location.reload();
}
function shuffleIndices() {
  shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
  for (let i = shuffledIndices.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * (i)) + 1;
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }
}

function toggleVideo(){
  if (playlist[shuffledIndices[currentIndex]].type == 'local'){return;}
  const playerElement = document.getElementById("player");
  if (videoOff){
    videoOff = false;
    videoButton.textContent = "Video On";
    player.audioOnlyMode(videoOff);
    playerElement.style.width ="160px"; 
    playerElement.style.height ="100px"; 
  }
  else{
    videoOff = true;
    videoButton.textContent = "No Video";
    player.audioOnlyMode(videoOff);
    playerContainer.style.inset =""; 
    playerElement.style.width ="1px"; 
    playerElement.style.height ="1px"; 
  }
}


function createPlayer() {
  const currentMedia = playlist[shuffledIndices[currentIndex]];
  if (currentIndex != 0){ 
    try{
      if (!player.paused()) {
        player.pause();
      }
    }
    catch{}
    try{
      if (!playerl.paused){
        playerl.pause();
      }
    } 
    catch{}
    if (silence.paused){
      silence.play();
    }
  }
  currentSongElement.textContent = `${currentMedia.title}`;
  document.getElementById(`${currentIndex}`).style.color = 'var(--main-color)';
  if (currentMedia.type === 'youtube') {
    player.muted(true);
    player.src({
      src: `https://www.youtube.com/embed/${currentMedia.id}`,
      type: 'video/youtube',
    });
    var myMiddleware = function(player) {
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    player.ready(function() {
      if (currentMedia.type === 'youtube') {
        player.currentTime(0);
        player.play();
        player.muted(false);
        videojs.use('*', myMiddleware);
        player.volume(svol / 100); // Set volume to half
      }
    });
    // player.oncanplay = function(){
    //   if (currentMedia.type === 'youtube') {
    //     player.currentTime(0);
    //     player.play();
    //     player.muted(false);
    //     videojs.use('*', myMiddleware);
    //     player.volume(svol / 100);
    //     document.getElementById('videoSlider').max = player.duration();
    //     console.log(document.getElementById('videoSlider').max);
    //     durationtext.innerText = formatTime(player.duration());
    //     durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
    //     durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
        
    //   }
    // }
    player.on('timeupdate', videoUpdate);
    player.on('play', function(){
      if (player.currentTime()< .2){
        player.volume(svol / 100);
        player.play();
        player.currentTime(0.21);
        document.getElementById('videoSlider').max = player.duration();
        durationtext.innerText = formatTime(player.duration());
        durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
        durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
      }
    })

  } else if (currentMedia.type === 'local') {
    if (!videoOff){
      const playerElement = document.getElementById("player");
      playerContainer.style.inset =""; 
      playerElement.style.width ="1px"; 
      playerElement.style.height ="1px"; 
    }
    
    playerl.src=("songs/" + currentMedia.id);
    playerl.muted = true;
    playerl.oncanplay = (event) => {
      document.getElementById('videoSlider').max = playerl.duration;
      durationtext.innerText = formatTime(playerl.duration);
      durationtext.style.right = (document.getElementById('videoSlider').getBoundingClientRect().left -10) + "px";
      durationtext.style.top = (document.getElementById('videoSlider').getBoundingClientRect().top -2) + "px";
      playerl.muted = true;
      if (!firstplay){
        playerl.play();
      }
      playerl.muted = false;
      playerl.volume = (svol / 300);
      silence.pause();
    };
    playerl.oncanplaythrough = (event) => {//so these are needed?
      playerl.muted = true;
      if (!firstplay){
        playerl.play();
      }
      playerl.muted = false;
      playerl.volume = (svol / 300);
    };
    playerl.onloadstart = (event) => {
      playerl.muted = true;
      if (!firstplay){
        playerl.play();
      }
      playerl.muted = false;
      playerl.volume = (svol / 300);
    };
  }
}
function videoSeek(){
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(document.getElementById('videoSlider').value);
  }
  else{
    playerl.currentTime = document.getElementById('videoSlider').value;
  }
}
const seekmenu = document.getElementById('seekmenu');
function audioUpdate(){//reason for fix forgotten!
  if (playlist[shuffledIndices[currentIndex]].type == 'youtube'){
    return;
  }
  document.getElementById('videoSlider').value = playerl.currentTime;
  if (inseekrange){
    seekmenu.innerText = formatTime(playerl.currentTime);
    const sliderrect = videoSlider.getBoundingClientRect();
    seekmenu.style.left = (sliderrect.left + (videoSlider.offsetWidth * (videoSlider.value / videoSlider.max)) - seekmenu.offsetWidth/2) + "px";
  }
}
var lasttime = -1;
function videoUpdate(){
  if (playlist[shuffledIndices[currentIndex]].type == 'local'){
    return;
  }
  document.getElementById('videoSlider').value = player.currentTime();
  if (inseekrange){
    seekmenu.innerText = formatTime(player.currentTime());
    const sliderrect = videoSlider.getBoundingClientRect();
    seekmenu.style.left = (sliderrect.left + (videoSlider.offsetWidth * (videoSlider.value / videoSlider.max)) - seekmenu.offsetWidth/2) + "px";// `${cursorX}px`;
  }
}
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  return formattedTime;
}
document.addEventListener("mousemove", handleMouseMove);
let clicked = false;
document.addEventListener('mousedown', function(event) {
  if (event.button === 0) {
    clicked = true;
  }
});
document.addEventListener('mouseup', function(event) {
  if (event.button === 0) {
    clicked = false;
  }
});
function handleMouseMove(ev) {
  const rect = playerContainer.getBoundingClientRect();
  const isWithinArea = ev.clientX > rect.left + rect.width -20 && ev.clientY > rect.top + rect.height -20;
  const sliderrect = videoSlider.getBoundingClientRect();
  const cursorY = ev.clientY;
  if (!clicked){
    const playerElement = document.getElementById("player");
    playerElement.style.pointerEvents = isWithinArea ? "auto" : "none";
    if (cursorY < sliderrect.top - 10 || cursorY > sliderrect.bottom + 20){
      inseekrange = false;
      seekmenu.style.display = 'none'; 
    }
  }
}
var inseekrange = false;
function seeksmenu(event) {
  const sliderrect = videoSlider.getBoundingClientRect();
  seekmenu.style.top = sliderrect.top -20  + "px";
  seekmenu.style.display = 'flex';
  inseekrange = true;//initial is offset bc no width
  seekmenu.style.left = (sliderrect.left + (videoSlider.offsetWidth * (videoSlider.value / videoSlider.max)) - seekmenu.offsetWidth/2) + "px";
}

var firstplay = true;
function playHandler() {
  
  if (playlist[shuffledIndices[currentIndex]].type === 'local'){
    playerl.play();
    player.pause();
  }
  firstplay = false;
  player.off('play', playHandler);
}
function togglePlayback() {
  if (firstplay){
    player.play();
    player.on('play', playHandler);
  }
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    if (player.paused()) {
      document.getElementById("playPauseButton").innerHTML = "||";
      player.play();
    } else {
      document.getElementById("playPauseButton").innerHTML = "▶";
      player.pause();
    }
  } else {
    if (playerl.paused){
      document.getElementById("playPauseButton").innerHTML = "||";
      playerl.play();
    } 
    else {
      document.getElementById("playPauseButton").innerHTML = "▶";
      playerl.pause();
    }
  }
  if (silence.paused){
    silence.play();
  }
}

function playNextSong(index = -1) {
  document.getElementById((currentIndex).toString()).style.color = "var(--played-color)";
  if (index != -1) {
    currentIndex = index;
    if (currentIndex >= playlist.length) {
      currentIndex = playlist.length - 1;
    }
    createPlayer();
  }
  else {
    currentIndex++;
    if (currentIndex >= playlist.length) {
      currentIndex = 0;
    }
    createPlayer();
  }
}

function skipMedia() {
  if (playlist[shuffledIndices[currentIndex]].type === 'local'){
    if (playerl.currentTime !== undefined) {
      playerl.currentTime = playerl.duration;
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))-1);

    }
  }
  else{
    if (player.currentTime() !== undefined) {
      player.currentTime(player.duration());
      localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))-1);

    }
  }
}

function changeVolume(volume) {
  svol = volume;
  localStorage.setItem("volume", svol);
  if (player!= null){
    player.volume(volume / 100);
  }
  if (playerl){
    playerl.volume = (volume / 300);
  }
}
function toggleshuffle(){
  if (shuffle){
    shuffle = false;
    generateUpcoming();
  }
  else{
    shuffle = true;
    generateUpcoming();
  }
  localStorage.setItem("shuffle", shuffle);
}
function addSong(){
  var inputText = document.getElementById('songinput').value;
  if (inputText==""){
    return;
  }

  var regex = /(.*?);(https:\/\/www\.youtube\.com\/watch\?v=.*$)/;
  var match = inputText.match(regex);
  if (match) {
    var title = match[1].trim();
    var url = match[2].trim();
    var id = url.split('v=')[1];
    
  }
  else{
    document.getElementById('songinput').value = "wrong!!! title;link ex: ヨノナカ;https://www.youtube.com/watch?v=UVDjM7fcUiI";
    return;
  }
  for (let i=0; i<playlists.length; i++){
    if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
      playlist.push({ id: id, title: title, type: 'youtube' });
      playlists[i].list = playlist;
      localStorage.setItem("playlists", JSON.stringify(playlists));
      generateUpcoming();
    }
  }
}
function editname(){
  if (!editselection){
    return;
  }
  const inputText = document.getElementById('nameinput').value;
  if (inputText==""){
    return;
  }
  for (let i=0; i<playlists.length; i++){
    if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
      playlist[editselection].title = inputText;
      playlists[i].list[editselection].title = inputText;
      localStorage.setItem("playlists", JSON.stringify(playlists));
      document.getElementById(shuffledIndices.indexOf(editselection)).innerHTML = `${playlist[editselection].title}(${playlist[editselection].type})`;
    }
  }
}
var mode = "select";
function generateUpcoming(){
  currentIndex = 0;
  if (shuffle){
    shuffleIndices();
  }
  else{
    shuffledIndices = Array.from({ length: playlist.length }, (_, index) => index);
  }
  let upcoming = document.getElementById("upcoming");
  upcoming.innerHTML = '';
  for (let i=playlist.length - 1; i >= 0; i--){
    upcoming.insertAdjacentHTML("afterbegin", `<li><span id=\"${i}\">` + `${playlist[shuffledIndices[i]].title}(${playlist[shuffledIndices[i]].type})` + "</span></li>");
    document.getElementById(`${i}`).addEventListener('click', handleChoose);
  }
}
function searchsong(input){
  let searchresult = document.getElementById("searchresult");
  searchresult.innerHTML = "";
  for (let i=0; i < shuffledIndices.length; i++){
    let searchel = document.getElementById(i);
    if (searchel.innerText.includes(input)){
      var clonedElement = searchel.cloneNode(true);
      clonedElement.id = clonedElement.id + "s";
      clonedElement.addEventListener('click', handleChoose);
      if (clonedElement.style.color == 'var(--main-color)'){
        clonedElement.style.color = 'var(--songs-color)';
      }
      var liElement = document.createElement('li');
      liElement.appendChild(clonedElement);
      searchresult.appendChild(liElement);
    }
  }
}
function deletes(){
  if (mode == "delete"){
    document.getElementById("deletebutton").style.color = "var(--main-color)";
    document.getElementById("deletebutton").style.background = "var(--secondary-color)";
    mode = "select";
    return
  }
  document.getElementById("deletebutton").style.background = "var(--main-color)";
  document.getElementById("deletebutton").style.color = "var(--secondary-color)";
  mode = "delete";
}
var editselection = null;
function handleChoose(event){
  var itemId = event.target.id;
  if (itemId.includes('s')){
    itemId = itemId.slice(0, -1)
  }
  editselection = shuffledIndices[itemId];
  if (mode == "select"){
    playNextSong(itemId);
  }
  else if (mode == "edit"){
    document.getElementById("nameinput").value = playlist[editselection].title;
  }
  else if (mode == "delete"){
    for (let i=0; i<playlists.length; i++){
      if (JSON.stringify(playlists[i].list) === JSON.stringify(playlist)){
        if (currentIndex >= itemId){
          if (currentIndex == itemId){
            playNextSong(Number(currentIndex) + 1);
          }
          currentIndex--;
        }
        playlist.splice(editselection,1);
        shuffledIndices.splice(itemId,1);
        document.getElementById(itemId).remove()
        for (let i=0; i<shuffledIndices.length; i++){
          if (i > itemId){
            document.getElementById(i).id = Number(i) - 1;
          }
          if (shuffledIndices[i] > itemId){
            shuffledIndices[i] = shuffledIndices[i] - 1;
          }
        }
        document.getElementById(shuffledIndices.length).id = shuffledIndices.length - 1;
        // playlists[i].list.splice(editselection, 1);
        localStorage.setItem("playlists", JSON.stringify(playlists));
        
      }
    }
  }
}
var prevwidth = upcoming.offsetWidth;
function fixheight() {
  const myelement = document.getElementById('upcoming');
  var initalh = myelement.offsetHeight;
  myelement.style.maxHeight = "calc(100% - 140px - " + document.getElementById('currentSong').offsetHeight + "px"+ ")";
  if (prevwidth != upcoming.offsetWidth){
    for (let i = 0; i < playlist.length; i++) {
      var el = document.getElementById(`${i}`);
      if (el.style.fontSize != "16px"){
        el.style.fontSize = "16px";
      }
      var w = 16;
      while (el.offsetWidth + 20 > upcoming.offsetWidth) {
        w -= 1;
        el.style.fontSize = w + "px";
      }
    }
    prevwidth = upcoming.offsetWidth;
  }
  if (myelement.offsetHeight - initalh < 0){
    myelement.scrollTop = myelement.scrollTop - ((myelement.offsetHeight - initalh));
  }
}
function jumptocurrent(){
  console.log((document.getElementById(`${currentIndex}`).offsetTop));
  upcoming.scrollTop = ((document.getElementById(`${currentIndex}`).offsetTop -10));
}
var resizeObserver = new ResizeObserver(fixheight);
resizeObserver.observe(document.getElementById('currentSong'));

function ender(){
  if(playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))+1);
    document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
    playNextSong();
  }
}
var wasdispsearch = false;
function toggleMenu(id){
  const menu = document.getElementById(id); 
  if (!menu.className.includes("hidden")){
    menu.classList.add('hidden');
    if (id == "editnamediv" || id == "editor"){
      document.getElementById("deletebutton").style.color = "var(--main-color)";
      document.getElementById("deletebutton").style.background = "var(--secondary-color)";
      mode = "select";
      if (id == "editor" && !document.getElementById('searchdiv').className.includes("hidden")){
        toggleMenu("searchdiv");
        wasdispsearch = true;
      }
    }
  }
  else{
    menu.classList.remove('hidden');
    menu.style.zIndex="2";//slower but less data
    if (wasdispsearch && id == "editor"){
      toggleMenu("searchdiv");
    }
    if (id == "editnamediv"){
      mode = "edit";
    }
  }
}

generateUpcoming();
dragElement(playerContainer);
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    const playerElement = document.getElementById("player");
    if (playerElement.style.pointerEvents == "auto"){return;}
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
var link = document.createElement('link');
link.href = "https://vjs.zencdn.net/8.3.0/video-js.min.css";
link.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(link);
var script = document.createElement('script');
script.src = "https://vjs.zencdn.net/8.3.0/video.min.js";
script.onload = function () {
  var scriptyt = document.createElement('script');
  scriptyt.src = "https://cdnjs.cloudflare.com/ajax/libs/videojs-youtube/3.0.1/Youtube.min.js";
  scriptyt.onload = function () {
    player = videojs('player', {
      techOrder: ['youtube'],
      autoplay: 'any',
      preload: 'auto',
      inactivityTimeout: 0,
      audioOnlyMode: videoOff,
      poster: "poster.png",
      muted:true,
      sources: [{
        type: 'video/youtube',
        src: "https://www.youtube.com/watch?v=wu2djWZzmz0"
      }]
    }, function onPlayerReady() {
      this.play();
      this.on('ended', ender);
    });
    var myMiddleware = function(player) {
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    player.ready(function() {
      player.currentTime(0);
      player.play();
      player.muted(false);
      videojs.use('*', myMiddleware);
      player.volume(svol / 100); // Set volume to half
    });
    createPlayer();
  };
  scriptyt.setAttribute("crossorigin", "anonymous");
  scriptyt.setAttribute("referrerpolicy", "no-referrer");
  scriptyt.integrity = "sha512-W11MwS4c4ZsiIeMchCx7OtlWx7yQccsPpw2dE94AEsZOa3pmSMbrcFjJ2J7qBSHjnYKe6yRuROHCUHsx8mGmhA==";
  
  document.body.appendChild(scriptyt);
  

};

document.body.appendChild(script);

playerl = new Audio('songs/Keshin.mp3');//not sure if this is needed
playerl.pause();
playerl.addEventListener('ended', function(){
  localStorage.setItem("playCount", parseInt(localStorage.getItem("playCount"))+1);
  document.getElementById("plays").innerHTML = localStorage.getItem("playCount");
  playNextSong();
});
playerl.addEventListener('play', function(){
  navigator.mediaSession.metadata = new MediaMetadata({
    title: playlist[shuffledIndices[currentIndex]].title,
    // artist: 'faker',
    album: playlist[shuffledIndices[currentIndex]].type,
  });
})
playerl.addEventListener('timeupdate', audioUpdate);

silence = new Audio('songs/45silence.mp3');
silence.muted = true;
silence.play();

silence.addEventListener('timeupdate', function(){
  if (silence.currentTime> 40){
    silence.currentTime = 0;
  }
  //silence.pause();
});

navigator.mediaSession.setActionHandler('play', function() {togglePlayback();});
navigator.mediaSession.setActionHandler('pause', function() {togglePlayback();});
navigator.mediaSession.setActionHandler('seekbackward', function() {
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(player.currentTime() - 10);
  }
  else{
    playerl.currentTime = playerl.currentTime - 10;
  }});
navigator.mediaSession.setActionHandler('seekforward', function() {
  if (playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    player.currentTime(player.currentTime() + 10);
  }
  else{
    playerl.currentTime = playerl.currentTime + 10;
  }});
navigator.mediaSession.setActionHandler('previoustrack', function() {playNextSong(currentIndex - 1);});
navigator.mediaSession.setActionHandler('nexttrack', function() {skipMedia();});