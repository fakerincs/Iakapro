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
  { id: 'M7FH1dL51oU', title: 'Being low as dirt, taking whats important from me', type: 'youtube' },//test failed
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
  { id: 'dxK5R81k0Ow', title: 'Its gonna be alright (feat. shully)', type: 'youtube' },//qodiwjqoijd
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
  { id: 'Wur-5UCQIa8', title: 'MUTEKI', type: 'youtube' },//dwqdqoiwdjqowjdw
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
  { id: 'J6d3_JEh5Aw', title: 'J6d3_JEh5Aw', type: 'youtube' },
  { id: 'y2IpG1kZbrs', title: 'fusq - Yeah!', type: 'youtube' },
  { id: 'AyR-AF9oJYQ', title: 'fusq - Perfume!', type: 'youtube' },//
  { id: 'i4w65eoL6PA', title: 'PSYQUI - Eyes on me feat. Such', type: 'youtube' },
  { id: '96mkdArkesA', title: 'Your voice so... (android52 Remix) (feat. Such)', type: 'youtube' },
  { id: 'kxVALRdEvH0', title: 'Daydream (feat. mega & Sithu Aye)', type: 'youtube' },
  { id: 'i7ouv9AyB_o', title: 'Dont you want me (feat. Such)', type: 'youtube' },
  { id: 'CHmBc9ZmFzw', title: 'Flamenco House', type: 'youtube' },//
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
  { id: 'dlraZy9f4Jk', title: 'PSYQUI - Pallet (feat. mikanzil) Guitar Cover', type: 'youtube' },
  { id: 'qU9l7thm848', title: 'PSYQUI - エンドロール (ft. Mikanzil) | J-Pop', type: 'youtube' },
  { id: '1Ss2H3Xt0D8', title: 'PSYQUI - Bye or not (feat. mikanzil) Guitar Cover', type: 'youtube' },
  { id: 'lEM-ChiVSyY', title: 'Mameyudoufu - Esperanza', type: 'youtube' },
  { id: 'DDtGQ9danyQ', title: 'ポルカドットスティングレイ', type: 'youtube' },
  { id: 'xnlJD8tKv4I', title: 'PSYQUI - Immortal', type: 'youtube' },
  { id: 'HEART BEAT.mp3', title: 'HEART BEAT', type: 'local' },
  { id: '8x09xhZ_H7Q', title: 'PSYQUI - Remorse', type: 'youtube' },
  { id: 'ug65BPPf2_M', title: 'No Time', type: 'youtube' },
  { id: 'PUog0Kdm40I', title: 'ヒステリックナイトガール - PSYQUI (Cover) / KMNZ LIZ', type: 'youtube' },
  { id: '_PVj_PSOU_I', title: 'ヒステリックナイトガール - PSYQUI [cover] / BOOGEY VOXX', type: 'youtube' },
  { id: 'uZIPat_lipM', title: 'ENERGY', type: 'youtube' },
  { id: 'PSD9yp8O6Yo', title: 'LASTING', type: 'youtube' },
  { id: 'bv7xMhvXJjc', title: 'Over Time', type: 'youtube' },
  { id: 'NvFHtR32-78', title: 'HYPER COLOR', type: 'youtube' },
  { id: 'uaoVckBoBVY', title: 'VOLTA - ACE', type: 'youtube' },
  { id: 'n1q-R6iNxRE', title: 'Camellia - Dokuhebi / Venomous Snake (feat. Hatsune Miku)', type: 'youtube' },
  { id: 'B2VL_CEIunI', title: 'PSYQUI - Are You Kidding Me (ft. Mami) Piano Cover', type: 'youtube' },
  { id: 'A3Xf4wd-0QQ', title: 'PSYQUI feat. Such - Hysteric Night Girl Piano Cover', type: 'youtube' },
  { id: 'D199Zpv6d6M', title: 'ポルカドットスティングレイ「ヒミツ」*polka', type: 'youtube' },
  { id: 'r48R3iD3lqk', title: '幽霊', type: 'youtube' },
  { id: '_gWn38pnmqI', title: 'snooze / wotaku feat. SHIKI', type: 'youtube' },
  { id: 'ojQv1TchM_A', title: 'Oshama Scramble! (uncut edition)', type: 'youtube' },
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
  { id: 'o5TpsIBe5HQ', title: 'Fujii Kaze - Matsuri Piano Cover', type: 'youtube' },
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
  { id: 'Why Not Me.mp3', title: 'Forrest.  Why Not Me (ft. Biskwiq)', type: 'local' },//yunomi, tpaz, boogey, geox






];
let svol = 50
let shuffledIndices = [];
let currentIndex = 0;
let player;
let playerl;
let first = true;


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
      src: `https://www.youtube.com/embed/${currentMedia.id}`,
      type: 'video/youtube',
      autoplay: 'any',//these dont actuall chagne anything
      preload: 'auto',
      //audioOnlyMode: true
    });
    //player.load();
    //player.ready(player.play());
    player.volume(svol / 100);
    var myMiddleware = function(player) {//i CANNOT believe this worked
      return {
        setMuted: function(muted) {
          return false;
        }
      };
    };
    videojs.use('*', myMiddleware);
    
  } else if (currentMedia.type === 'local') {
    playerl = new Audio(currentMedia.id);
    playerl.volume = (svol / 300);
    playerl.play();

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
    console.log('impossible')
  }
  createPlayer();
}

function skipMedia() {

  if (playlist[shuffledIndices[currentIndex]].type === 'local'){
    if (playerl.currentTime !== undefined) {
      playerl.currentTime = playerl.duration - 1;
    }
  }
  else{
    if (player.currentTime() !== undefined) {
      player.currentTime(player.duration() - 1);
    }
  }
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
  autoplay: 'any',
  preload: 'auto',
  inactivityTimeout: 0,
  //audioOnlyMode: true
});


function ender(){
  if(playlist[shuffledIndices[currentIndex]].type === 'youtube'){
    playNextSong();
  }
}
player.on('ended', ender);
createPlayer();