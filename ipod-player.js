/* ── iPod Classic Interactive Player Widget ── */

document.addEventListener("DOMContentLoaded", () => {
    // ── Local Playlists containing 83 tracks and custom APIC extracted cover art ──
    const playlists = {
        "desi house": [
                {
                        "title": "Haseen Raatein (Happy Nights)",
                        "artist": "Fake Tattoos",
                        "src": "/desi_house/Fake Tattoos - Haseen Raatein (Happy Nights) (SPOTISAVER).mp3",
                        "cover": "/album_art/desi_house_Haseen_Raatein_Happy_Nights.jpg"
                },
                {
                        "title": "Haveli",
                        "artist": "Fake Tattoos",
                        "src": "/desi_house/Fake Tattoos - Haveli (SPOTISAVER).mp3",
                        "cover": "/album_art/desi_house_Haveli.jpg"
                },
                {
                        "title": "Sitta",
                        "artist": "Novak, Chitralekha Sen",
                        "src": "/desi_house/Novak, Chitralekha Sen - Sitta (SPOTISAVER).mp3",
                        "cover": "/album_art/desi_house_Sitta.jpg"
                },
                {
                        "title": "Taka",
                        "artist": "SIDEPIECE, San Pacho",
                        "src": "/desi_house/SIDEPIECE, San Pacho - Taka (SPOTISAVER).mp3",
                        "cover": "/album_art/desi_house_Taka.jpg"
                }
        ],
        "super secret gym playlist": [
                {
                        "title": "Ghost Of You",
                        "artist": "5 Seconds of Summer",
                        "src": "/super_secret_gym_playlist/5 Seconds of Summer - Ghost Of You (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Ghost_Of_You.jpg"
                },
                {
                        "title": "Casual",
                        "artist": "Chappell Roan",
                        "src": "/super_secret_gym_playlist/Chappell Roan - Casual (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Casual.jpg"
                },
                {
                        "title": "Beanie",
                        "artist": "Chezile",
                        "src": "/super_secret_gym_playlist/Chezile - Beanie (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Beanie.jpg"
                },
                {
                        "title": "Sunsetz",
                        "artist": "Cigarettes After Sex",
                        "src": "/super_secret_gym_playlist/Cigarettes After Sex - Sunsetz (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Sunsetz.jpg"
                },
                {
                        "title": "Sparks",
                        "artist": "Coldplay",
                        "src": "/super_secret_gym_playlist/Coldplay - Sparks (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Sparks.jpg"
                },
                {
                        "title": "Astronomy",
                        "artist": "Conan Gray",
                        "src": "/super_secret_gym_playlist/Conan Gray - Astronomy (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Astronomy.jpg"
                },
                {
                        "title": "The Cut That Always Bleeds",
                        "artist": "Conan Gray",
                        "src": "/super_secret_gym_playlist/Conan Gray - The Cut That Always Bleeds (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_The_Cut_That_Always_Bleeds.jpg"
                },
                {
                        "title": "I Know You",
                        "artist": "Faye Webster",
                        "src": "/super_secret_gym_playlist/Faye Webster - I Know You (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_I_Know_You.jpg"
                },
                {
                        "title": "Silver Springs - 2004 Remaster",
                        "artist": "Fleetwood Mac",
                        "src": "/super_secret_gym_playlist/Fleetwood Mac - Silver Springs - 2004 Remaster (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Silver_Springs_-_2004_Remaster.jpg"
                },
                {
                        "title": "Do I Wanna Know - Live At the BBC",
                        "artist": "Hozier",
                        "src": "/super_secret_gym_playlist/Hozier - Do I Wanna Know - Live At the BBC (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Do_I_Wanna_Know_-_Live_At_the_BBC.jpg"
                },
                {
                        "title": "What if I miss you for the rest of my life",
                        "artist": "Janine Berdin",
                        "src": "/super_secret_gym_playlist/Janine Berdin - What if I miss you for the rest of my life (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_What_if_I_miss_you_for_the_rest_of_my_life.jpg"
                },
                {
                        "title": "Glimpse of Us",
                        "artist": "Joji",
                        "src": "/super_secret_gym_playlist/Joji - Glimpse of Us (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Glimpse_of_Us.jpg"
                },
                {
                        "title": "SLOW DANCING IN THE DARK",
                        "artist": "Joji",
                        "src": "/super_secret_gym_playlist/Joji - SLOW DANCING IN THE DARK (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_SLOW_DANCING_IN_THE_DARK.jpg"
                },
                {
                        "title": "The Night We Met",
                        "artist": "Lord Huron",
                        "src": "/super_secret_gym_playlist/Lord Huron - The Night We Met (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_The_Night_We_Met.jpg"
                },
                {
                        "title": "Two of Us - Acoustic",
                        "artist": "Louis Tomlinson",
                        "src": "/super_secret_gym_playlist/Louis Tomlinson - Two of Us - Acoustic (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Two_of_Us_-_Acoustic.jpg"
                },
                {
                        "title": "My Kind of Woman",
                        "artist": "Mac DeMarco",
                        "src": "/super_secret_gym_playlist/Mac DeMarco - My Kind of Woman (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_My_Kind_of_Woman.jpg"
                },
                {
                        "title": "Fade Into You",
                        "artist": "Mazzy Star",
                        "src": "/super_secret_gym_playlist/Mazzy Star - Fade Into You (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Fade_Into_You.jpg"
                },
                {
                        "title": "1 step forward, 3 steps back",
                        "artist": "Olivia Rodrigo",
                        "src": "/super_secret_gym_playlist/Olivia Rodrigo - 1 step forward, 3 steps back (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_1_step_forward_3_steps_back.jpg"
                },
                {
                        "title": "deja vu",
                        "artist": "Olivia Rodrigo",
                        "src": "/super_secret_gym_playlist/Olivia Rodrigo - deja vu (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_deja_vu.jpg"
                },
                {
                        "title": "drivers license",
                        "artist": "Olivia Rodrigo",
                        "src": "/super_secret_gym_playlist/Olivia Rodrigo - drivers license (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_drivers_license.jpg"
                },
                {
                        "title": "traitor",
                        "artist": "Olivia Rodrigo",
                        "src": "/super_secret_gym_playlist/Olivia Rodrigo - traitor (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_traitor.jpg"
                },
                {
                        "title": "Half a Heart",
                        "artist": "One Direction",
                        "src": "/super_secret_gym_playlist/One Direction - Half a Heart (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Half_a_Heart.jpg"
                },
                {
                        "title": "Scott Street",
                        "artist": "Phoebe Bridgers",
                        "src": "/super_secret_gym_playlist/Phoebe Bridgers - Scott Street (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Scott_Street.jpg"
                },
                {
                        "title": "Let Down - Remastered",
                        "artist": "Radiohead",
                        "src": "/super_secret_gym_playlist/Radiohead - Let Down - Remastered (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Let_Down_-_Remastered.jpg"
                },
                {
                        "title": "Mr. Loverman",
                        "artist": "Ricky Montgomery",
                        "src": "/super_secret_gym_playlist/Ricky Montgomery - Mr. Loverman (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Mr_Loverman.jpg"
                },
                {
                        "title": "Peter",
                        "artist": "Taylor Swift",
                        "src": "/super_secret_gym_playlist/Taylor Swift - Peter (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Peter.jpg"
                },
                {
                        "title": "exile (feat. Bon Iver)",
                        "artist": "Taylor Swift, Bon Iver",
                        "src": "/super_secret_gym_playlist/Taylor Swift, Bon Iver - exile (feat. Bon Iver) (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_exile_feat_Bon_Iver.jpg"
                },
                {
                        "title": "About You",
                        "artist": "The 1975",
                        "src": "/super_secret_gym_playlist/The 1975 - About You (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_About_You.jpg"
                },
                {
                        "title": "Linger",
                        "artist": "The Cranberries",
                        "src": "/super_secret_gym_playlist/The Cranberries - Linger (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Linger.jpg"
                },
                {
                        "title": "Back To Me",
                        "artist": "The Mari\u0301as",
                        "src": "/super_secret_gym_playlist/The Mari\u0301as - Back To Me (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Back_To_Me.jpg"
                },
                {
                        "title": "Coffee",
                        "artist": "beabadoobee",
                        "src": "/super_secret_gym_playlist/beabadoobee - Coffee (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Coffee.jpg"
                },
                {
                        "title": "back to friends",
                        "artist": "sombr",
                        "src": "/super_secret_gym_playlist/sombr - back to friends (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_back_to_friends.jpg"
                },
                {
                        "title": "perfume",
                        "artist": "sombr",
                        "src": "/super_secret_gym_playlist/sombr - perfume (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_perfume.jpg"
                },
                {
                        "title": "undressed",
                        "artist": "sombr",
                        "src": "/super_secret_gym_playlist/sombr - undressed (SPOTISAVER).mp3",
                        "cover": "/album_art/super_secret_gym_playlist_undressed.jpg"
                }
        ],
        "life is a movie-core": [
                {
                        "title": "Determinate - From Lemonade Mouth",
                        "artist": "Adam Hicks, Bridgit Mendler, Naomi Scott",
                        "src": "/life_is_a_movie-core/Adam Hicks, Bridgit Mendler, Naomi Scott - Determinate - From Lemonade Mouth (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Determinate_-_From_Lemonade_Mouth.jpg"
                },
                {
                        "title": "Something About the Sunshine (Duet)",
                        "artist": "Anna Margaret, Christopher Wilde",
                        "src": "/life_is_a_movie-core/Anna Margaret, Christopher Wilde - Something About the Sunshine (Duet) (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Something_About_the_Sunshine_Duet.jpg"
                },
                {
                        "title": "It's Alright, It's OK",
                        "artist": "Ashley Tisdale",
                        "src": "/life_is_a_movie-core/Ashley Tisdale - It's Alright, It's OK (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Its_Alright_Its_OK.jpg"
                },
                {
                        "title": "The Tide Is High - Radio Mix",
                        "artist": "Atomic Kitten",
                        "src": "/life_is_a_movie-core/Atomic Kitten - The Tide Is High - Radio Mix (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_The_Tide_Is_High_-_Radio_Mix.jpg"
                },
                {
                        "title": "Hurricane",
                        "artist": "Bridgit Mendler",
                        "src": "/life_is_a_movie-core/Bridgit Mendler - Hurricane (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hurricane.jpg"
                },
                {
                        "title": "Ready or Not",
                        "artist": "Bridgit Mendler",
                        "src": "/life_is_a_movie-core/Bridgit Mendler - Ready or Not (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Ready_or_Not.jpg"
                },
                {
                        "title": "Somebody",
                        "artist": "Bridgit Mendler",
                        "src": "/life_is_a_movie-core/Bridgit Mendler - Somebody (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Somebody.jpg"
                },
                {
                        "title": "We Rock",
                        "artist": "Cast Of Camp Rock",
                        "src": "/life_is_a_movie-core/Cast Of Camp Rock - We Rock (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_We_Rock.jpg"
                },
                {
                        "title": "Hero",
                        "artist": "Christopher Wilde",
                        "src": "/life_is_a_movie-core/Christopher Wilde - Hero (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hero.jpg"
                },
                {
                        "title": "Starstruck",
                        "artist": "Christopher Wilde",
                        "src": "/life_is_a_movie-core/Christopher Wilde - Starstruck (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Starstruck.jpg"
                },
                {
                        "title": "Give Your Heart a Break",
                        "artist": "Demi Lovato",
                        "src": "/life_is_a_movie-core/Demi Lovato - Give Your Heart a Break (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Give_Your_Heart_a_Break.jpg"
                },
                {
                        "title": "Wouldn't Change a Thing - From Camp Rock 2 The Final Jam",
                        "artist": "Demi Lovato, Joe Jonas",
                        "src": "/life_is_a_movie-core/Demi Lovato, Joe Jonas - Wouldn't Change a Thing - From Camp Rock 2 The Final Jam (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Wouldnt_Change_a_Thing_-_From_Camp_Rock_2_The_Final_Jam.jpg"
                },
                {
                        "title": "He Could Be the One",
                        "artist": "Hannah Montana",
                        "src": "/life_is_a_movie-core/Hannah Montana - He Could Be the One (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_He_Could_Be_the_One.jpg"
                },
                {
                        "title": "Nobody's Perfect",
                        "artist": "Hannah Montana",
                        "src": "/life_is_a_movie-core/Hannah Montana - Nobody's Perfect (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Nobodys_Perfect.jpg"
                },
                {
                        "title": "Ordinary Girl",
                        "artist": "Hannah Montana",
                        "src": "/life_is_a_movie-core/Hannah Montana - Ordinary Girl (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Ordinary_Girl.jpg"
                },
                {
                        "title": "Rock Star",
                        "artist": "Hannah Montana",
                        "src": "/life_is_a_movie-core/Hannah Montana - Rock Star (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Rock_Star.jpg"
                },
                {
                        "title": "The Best of Both Worlds",
                        "artist": "Hannah Montana",
                        "src": "/life_is_a_movie-core/Hannah Montana - The Best of Both Worlds (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_The_Best_of_Both_Worlds.jpg"
                },
                {
                        "title": "Beautiful Soul",
                        "artist": "Jesse McCartney",
                        "src": "/life_is_a_movie-core/Jesse McCartney - Beautiful Soul (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Beautiful_Soul.jpg"
                },
                {
                        "title": "Gotta Find You - From Camp Rock Soundtrack Version",
                        "artist": "Joe Jonas",
                        "src": "/life_is_a_movie-core/Joe Jonas - Gotta Find You - From Camp Rock Soundtrack Version (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Gotta_Find_You_-_From_Camp_Rock_Soundtrack_Version.jpg"
                },
                {
                        "title": "Play My Music",
                        "artist": "Jonas Brothers",
                        "src": "/life_is_a_movie-core/Jonas Brothers - Play My Music (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Play_My_Music.jpg"
                },
                {
                        "title": "S.O.S.",
                        "artist": "Jonas Brothers",
                        "src": "/life_is_a_movie-core/Jonas Brothers - S.O.S. (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_SOS.jpg"
                },
                {
                        "title": "Year 3000",
                        "artist": "Jonas Brothers",
                        "src": "/life_is_a_movie-core/Jonas Brothers - Year 3000 (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Year_3000.jpg"
                },
                {
                        "title": "Hasta La Vista",
                        "artist": "Jordan Francis, Roshon Bernard Fegan",
                        "src": "/life_is_a_movie-core/Jordan Francis, Roshon Bernard Fegan - Hasta La Vista (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hasta_La_Vista.jpg"
                },
                {
                        "title": "My Life Would Suck Without You",
                        "artist": "Kelly Clarkson",
                        "src": "/life_is_a_movie-core/Kelly Clarkson - My Life Would Suck Without You (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_My_Life_Would_Suck_Without_You.jpg"
                },
                {
                        "title": "Too Cool",
                        "artist": "Meaghan Martin",
                        "src": "/life_is_a_movie-core/Meaghan Martin - Too Cool (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Too_Cool.jpg"
                },
                {
                        "title": "Hoedown Throwdown",
                        "artist": "Miley Cyrus",
                        "src": "/life_is_a_movie-core/Miley Cyrus - Hoedown Throwdown (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hoedown_Throwdown.jpg"
                },
                {
                        "title": "See You Again",
                        "artist": "Miley Cyrus",
                        "src": "/life_is_a_movie-core/Miley Cyrus - See You Again (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_See_You_Again.jpg"
                },
                {
                        "title": "The Climb",
                        "artist": "Miley Cyrus",
                        "src": "/life_is_a_movie-core/Miley Cyrus - The Climb (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_The_Climb.jpg"
                },
                {
                        "title": "Butterfly Fly Away",
                        "artist": "Miley Cyrus, Billy Ray Cyrus",
                        "src": "/life_is_a_movie-core/Miley Cyrus, Billy Ray Cyrus - Butterfly Fly Away (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Butterfly_Fly_Away.jpg"
                },
                {
                        "title": "About You Now",
                        "artist": "Miranda Cosgrove",
                        "src": "/life_is_a_movie-core/Miranda Cosgrove - About You Now (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_About_You_Now.jpg"
                },
                {
                        "title": "Shakespeare",
                        "artist": "Miranda Cosgrove",
                        "src": "/life_is_a_movie-core/Miranda Cosgrove - Shakespeare (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Shakespeare.jpg"
                },
                {
                        "title": "Let's Make This Last 4Ever",
                        "artist": "Mitchel Musso",
                        "src": "/life_is_a_movie-core/Mitchel Musso - Let's Make This Last 4Ever (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Lets_Make_This_Last_4Ever.jpg"
                },
                {
                        "title": "She's So Gone",
                        "artist": "Naomi Scott",
                        "src": "/life_is_a_movie-core/Naomi Scott - She's So Gone (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Shes_So_Gone.jpg"
                },
                {
                        "title": "Introducing Me - From Camp Rock 2 The Final Jam",
                        "artist": "Nick Jonas",
                        "src": "/life_is_a_movie-core/Nick Jonas - Introducing Me - From Camp Rock 2 The Final Jam (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Introducing_Me_-_From_Camp_Rock_2_The_Final_Jam.jpg"
                },
                {
                        "title": "Hit The Lights",
                        "artist": "Selena Gomez & The Scene",
                        "src": "/life_is_a_movie-core/Selena Gomez & The Scene - Hit The Lights (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hit_The_Lights.jpg"
                },
                {
                        "title": "Naturally",
                        "artist": "Selena Gomez & The Scene",
                        "src": "/life_is_a_movie-core/Selena Gomez & The Scene - Naturally (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Naturally.jpg"
                },
                {
                        "title": "Round & Round",
                        "artist": "Selena Gomez & The Scene",
                        "src": "/life_is_a_movie-core/Selena Gomez & The Scene - Round & Round (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Round__Round.jpg"
                },
                {
                        "title": "Tell Me Something I Don't Know - Soundtrack",
                        "artist": "Selena Gomez",
                        "src": "/life_is_a_movie-core/Selena Gomez - Tell Me Something I Don't Know - Soundtrack (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Tell_Me_Something_I_Dont_Know_-_Soundtrack.jpg"
                },
                {
                        "title": "Strut - From The Cheetah Girls 2",
                        "artist": "The Cheetah Girls",
                        "src": "/life_is_a_movie-core/The Cheetah Girls - Strut - From The Cheetah Girls 2 (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Strut_-_From_The_Cheetah_Girls_2.jpg"
                },
                {
                        "title": "Breaking Free",
                        "artist": "Troy, Gabriella, Disney",
                        "src": "/life_is_a_movie-core/Troy, Gabriella, Disney - Breaking Free (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Breaking_Free.jpg"
                },
                {
                        "title": "Start of Something New",
                        "artist": "Troy, Gabriella, Disney",
                        "src": "/life_is_a_movie-core/Troy, Gabriella, Disney - Start of Something New (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Start_of_Something_New.jpg"
                },
                {
                        "title": "You Are the Music in Me",
                        "artist": "Troy, Gabriella, Disney",
                        "src": "/life_is_a_movie-core/Troy, Gabriella, Disney - You Are the Music in Me (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_You_Are_the_Music_in_Me.jpg"
                },
                {
                        "title": "Best Friend's Brother (feat. Victoria Justice)",
                        "artist": "Victorious Cast, Victoria Justice",
                        "src": "/life_is_a_movie-core/Victorious Cast, Victoria Justice - Best Friend's Brother (feat. Victoria Justice) (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Best_Friends_Brother_feat_Victoria_Justice.jpg"
                },
                {
                        "title": "Gotta Go My Own Way",
                        "artist": "Zac Efron, Vanessa Hudgens, Disney",
                        "src": "/life_is_a_movie-core/Zac Efron, Vanessa Hudgens, Disney - Gotta Go My Own Way (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Gotta_Go_My_Own_Way.jpg"
                },
                {
                        "title": "Replay",
                        "artist": "Zendaya",
                        "src": "/life_is_a_movie-core/Zendaya - Replay (SPOTISAVER).mp3",
                        "cover": "/album_art/life_is_a_movie-core_Replay.jpg"
                }
        ]
};

    // Select a random playlist and random track on load
    const playlistNames = Object.keys(playlists);
    let activePlaylistName = playlistNames[Math.floor(Math.random() * playlistNames.length)];
    let currentTrackIndex = Math.floor(Math.random() * playlists[activePlaylistName].length);
    
    // Tracking played indices to ensure full shuffle cover and automatic playlist cycling
    let playedIndices = [currentTrackIndex];
    
    // Retrieve track helper
    const getActiveTrack = () => playlists[activePlaylistName][currentTrackIndex];

    const audio = new Audio();
    audio.src = getActiveTrack().src;
    audio.volume = 0.1; // Force 10% volume as requested

    // ── Synthetic Haptic Click Sound Generator (Web Audio API) ──
    const playClickSound = () => {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContextClass();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1000, ctx.currentTime);
            gain.gain.setValueAtTime(0.012, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start();
            osc.stop(ctx.currentTime + 0.03);
        } catch (e) {}
    };

    // ── Autoplay Policy Handler ──
    const tryAutoplay = () => {
        audio.play().then(() => {
            document.removeEventListener("click", tryAutoplay);
            document.removeEventListener("touchstart", tryAutoplay);
            renderScreen();
        }).catch(err => {
            // Blocked by browser, plays on next page interaction
        });
    };

    document.addEventListener("click", tryAutoplay);
    document.addEventListener("touchstart", tryAutoplay);

    // ── Inject Backdrop Overlay & iPod Markup ──
    const backdrop = document.createElement("div");
    backdrop.className = "ipod-backdrop";
    document.body.appendChild(backdrop);

    const ipodContainer = document.createElement("div");
    ipodContainer.className = "ipod-widget-container minimized";
    ipodContainer.id = "ipod-classic-player";
    
    ipodContainer.innerHTML = `
        <div class="ipod-inner-wrapper">
            <div class="ipod-close-btn" title="Minimize">&times;</div>
            <div class="ipod-expand-clicker" title="Open iPod Player"></div>
            <img src="/ipod.png" class="ipod-faceplate" alt="iPod Classic">
            
            <!-- Screen area behind transparent window -->
            <div class="ipod-screen-container">
                <div class="ipod-screen-header">
                    <span id="ipod-screen-title">iPod</span>
                    <span id="ipod-header-playstate">&#9632;</span>
                    <div class="ipod-header-battery">
                        <div class="ipod-header-battery-fill"></div>
                    </div>
                </div>
                
                <!-- Menu / Now Playing UI Content -->
                <div id="ipod-screen-content" style="flex: 1; display: flex; flex-direction: column;">
                    <!-- Filled dynamically -->
                </div>
            </div>
            
            <!-- Clickwheel overlay coordinates -->
            <div class="ipod-clickwheel" id="ipod-wheel">
                <button class="ipod-wheel-btn ipod-btn-menu" id="ipod-btn-menu" title="Menu"></button>
                <button class="ipod-wheel-btn ipod-btn-select" id="ipod-btn-select" title="Select"></button>
                <button class="ipod-wheel-btn ipod-btn-prev" id="ipod-btn-prev" title="Previous"></button>
                <button class="ipod-wheel-btn ipod-btn-next" id="ipod-btn-next" title="Next"></button>
                <button class="ipod-wheel-btn ipod-btn-play" id="ipod-btn-play" title="Play/Pause"></button>
            </div>
        </div>
    `;

    document.body.appendChild(ipodContainer);

    // ── Modal State Control Handlers ──
    const expandIpod = () => {
        ipodContainer.classList.remove("minimized");
        backdrop.classList.add("active");
    };

    const minimizeIpod = () => {
        ipodContainer.classList.add("minimized");
        backdrop.classList.remove("active");
    };

    backdrop.addEventListener("click", (e) => {
        minimizeIpod();
    });

    // ── Navigation Menu State Management ──
    let menuStack = ["main"]; 
    let selectedIndex = 0;
    let menuItems = [];

    // Common Select Action handler (Touchscreen + Clickwheel Select)
    const triggerSelect = () => {
        const currentView = menuStack[menuStack.length - 1];

        if (currentView === "main") {
            const chosen = menuItems[selectedIndex];
            if (chosen === "Playlists") {
                menuStack.push("playlists");
                selectedIndex = 0;
            } else if (chosen === "Now Playing") {
                menuStack.push("nowplaying");
            } else if (chosen === "Turn Off") {
                minimizeIpod();
            }
        } 
        else if (currentView === "playlists") {
            const chosen = menuItems[selectedIndex];
            if (chosen === "Back") {
                menuStack.pop();
                selectedIndex = 0;
            } else {
                activePlaylistName = chosen;
                playedIndices = []; // Reset played tracking when shifting playlists manually
                menuStack.push("songs");
                selectedIndex = 0;
            }
        }
        else if (currentView === "songs") {
            const chosen = menuItems[selectedIndex];
            if (chosen === "Back") {
                menuStack.pop();
                selectedIndex = 0;
            } else {
                // Play selected track
                currentTrackIndex = selectedIndex;
                playedIndices = [currentTrackIndex]; // Set selected track as the first played
                const track = getActiveTrack();
                audio.src = track.src;
                audio.volume = 0.1;
                audio.play();
                menuStack.push("nowplaying");
            }
        }
        renderScreen();
    };

    const renderScreen = () => {
        const contentArea = document.getElementById("ipod-screen-content");
        const titleArea = document.getElementById("ipod-screen-title");
        const playstateIcon = document.getElementById("ipod-header-playstate");
        
        playstateIcon.innerHTML = audio.paused ? "&#9646;&#9646;" : "&#9654;";
        if (audio.paused && audio.currentTime === 0) {
            playstateIcon.innerHTML = "&#9632;";
        }

        const currentMenu = menuStack[menuStack.length - 1];

        if (currentMenu === "main") {
            titleArea.innerText = "iPod";
            menuItems = ["Playlists", "Now Playing", "Turn Off"];
            
            let html = `<ul class="ipod-screen-menu">`;
            menuItems.forEach((item, idx) => {
                const isSelected = idx === selectedIndex ? "selected" : "";
                html += `
                    <li class="ipod-menu-item ${isSelected}" data-index="${idx}">
                        <span>${item}</span>
                        <span class="ipod-menu-item-arrow">&gt;</span>
                    </li>`;
            });
            html += `</ul>`;
            contentArea.innerHTML = html;
        } 
        else if (currentMenu === "playlists") {
            titleArea.innerText = "Playlists";
            menuItems = Object.keys(playlists);
            menuItems.push("Back");
            
            let html = `<ul class="ipod-screen-menu">`;
            menuItems.forEach((item, idx) => {
                const isSelected = idx === selectedIndex ? "selected" : "";
                html += `
                    <li class="ipod-menu-item ${isSelected}" data-index="${idx}">
                        <span>${item}</span>
                        <span class="ipod-menu-item-arrow">&gt;</span>
                    </li>`;
            });
            html += `</ul>`;
            contentArea.innerHTML = html;
        }
        else if (currentMenu === "songs") {
            titleArea.innerText = activePlaylistName;
            menuItems = playlists[activePlaylistName].map(track => track.title);
            menuItems.push("Back");
            
            let html = `<ul class="ipod-screen-menu">`;
            menuItems.forEach((item, idx) => {
                const isSelected = idx === selectedIndex ? "selected" : "";
                const isBack = item === "Back";
                html += `
                    <li class="ipod-menu-item ${isSelected}" data-index="${idx}">
                        <span>${item}</span>
                        ${!isBack ? '<span class="ipod-menu-item-arrow">&#9658;</span>' : '&gt;'}
                    </li>`;
            });
            html += `</ul>`;
            contentArea.innerHTML = html;
        }
        else if (currentMenu === "nowplaying") {
            titleArea.innerText = "Now Playing";
            const track = getActiveTrack();
            
            const formatTime = (secs) => {
                if (isNaN(secs)) return "0:00";
                const m = Math.floor(secs / 60);
                const s = Math.floor(secs % 60).toString().padStart(2, '0');
                return `${m}:${s}`;
            };

            const elapsed = formatTime(audio.currentTime);
            const remaining = formatTime(audio.duration - audio.currentTime);
            const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;

            const coverHtml = track.cover 
                ? `<img class="ipod-np-art" src="${track.cover}" alt="Cover" style="object-fit: cover;">`
                : `<div class="ipod-np-art">🎧</div>`;

            contentArea.innerHTML = `
                <div class="ipod-screen-nowplaying">
                    <div class="ipod-np-content">
                        ${coverHtml}
                        <div class="ipod-np-info">
                            <div class="ipod-np-title">${track.title}</div>
                            <div class="ipod-np-artist">${track.artist}</div>
                            <div class="ipod-np-artist" style="font-size: 8px; color: #777; margin-top:2px;">
                                ${activePlaylistName}
                            </div>
                        </div>
                    </div>
                    
                    <div class="ipod-np-progress-section">
                        <div class="ipod-np-progressbar-bg">
                            <div class="ipod-np-progressbar-fill" style="width: ${pct}%;"></div>
                        </div>
                        <div class="ipod-np-time-row">
                            <span>${elapsed}</span>
                            <span>-${remaining}</span>
                        </div>
                    </div>
                </div>
            `;
        }
    };

    // Initial render
    renderScreen();

    // ── Screen Touch/Click Navigation Delegation ──
    ipodContainer.querySelector(".ipod-screen-container").addEventListener("click", (e) => {
        const menuItem = e.target.closest(".ipod-menu-item");
        if (menuItem) {
            e.stopPropagation();
            playClickSound();
            const idx = parseInt(menuItem.getAttribute("data-index"), 10);
            selectedIndex = idx;
            triggerSelect();
        }
    });

    // ── Click Wheel Rotation Physics ──
    const wheel = document.getElementById("ipod-wheel");
    let isDragging = false;
    let lastAngle = 0;
    let accumulatedRotation = 0;
    const scrollThreshold = 18; 

    const getAngle = (clientX, clientY, rect) => {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
    };

    const handleRotation = (e) => {
        if (!isDragging) return;
        const rect = wheel.getBoundingClientRect();
        
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const currentAngle = getAngle(clientX, clientY, rect);
        let delta = currentAngle - lastAngle;

        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        accumulatedRotation += delta;
        lastAngle = currentAngle;

        if (Math.abs(accumulatedRotation) >= scrollThreshold) {
            const steps = Math.trunc(accumulatedRotation / scrollThreshold);
            accumulatedRotation = accumulatedRotation % scrollThreshold;

            if (steps !== 0) {
                playClickSound();
                scrollSelection(steps);
            }
        }
    };

    const scrollSelection = (steps) => {
        const currentView = menuStack[menuStack.length - 1];
        if (currentView === "nowplaying") return; 

        selectedIndex += steps;
        if (selectedIndex < 0) {
            selectedIndex = 0;
        } else if (selectedIndex >= menuItems.length) {
            selectedIndex = menuItems.length - 1;
        }
        renderScreen();
    };

    const onStart = (clientX, clientY) => {
        const rect = wheel.getBoundingClientRect();
        lastAngle = getAngle(clientX, clientY, rect);
        isDragging = true;
        accumulatedRotation = 0;
    };

    wheel.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("ipod-wheel-btn")) return; 
        onStart(e.clientX, e.clientY);
    });

    wheel.addEventListener("touchstart", (e) => {
        if (e.target.classList.contains("ipod-wheel-btn")) return;
        if (e.touches.length > 0) {
            onStart(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    document.addEventListener("mousemove", handleRotation);
    document.addEventListener("touchmove", handleRotation, { passive: false });

    const onEnd = () => { isDragging = false; };
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchend", onEnd);

    // ── Click Wheel Button Click Handlers ──

    // 1. SELECT (Center Button)
    document.getElementById("ipod-btn-select").addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        triggerSelect();
    });

    // 2. MENU Button (Go back)
    document.getElementById("ipod-btn-menu").addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        if (menuStack.length > 1) {
            menuStack.pop();
            selectedIndex = 0;
            renderScreen();
        } else {
            minimizeIpod();
        }
    });

    // 3. PLAY/PAUSE Button
    document.getElementById("ipod-btn-play").addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        renderScreen();
    });

    // 4. NEXT Button (Shuffle playback, transitions to next playlist when current one ends)
    const playNext = () => {
        const playlistTracks = playlists[activePlaylistName];
        
        // Add current index to played list
        if (!playedIndices.includes(currentTrackIndex)) {
            playedIndices.push(currentTrackIndex);
        }
        
        // Check if all tracks in the active playlist have been played
        if (playedIndices.length >= playlistTracks.length) {
            // Active playlist fully played! Switch to next playlist in sequence
            const nextPlaylistIdx = (playlistNames.indexOf(activePlaylistName) + 1) % playlistNames.length;
            activePlaylistName = playlistNames[nextPlaylistIdx];
            playedIndices = []; // Reset played tracker for the new playlist
            
            // Choose a random track inside the new playlist
            const newTracks = playlists[activePlaylistName];
            currentTrackIndex = Math.floor(Math.random() * newTracks.length);
            playedIndices.push(currentTrackIndex);
        } else {
            // Find all unplayed track indices in current playlist
            const unplayed = [];
            for (let i = 0; i < playlistTracks.length; i++) {
                if (!playedIndices.includes(i)) {
                    unplayed.push(i);
                }
            }
            
            if (unplayed.length > 0) {
                // Pick a random unplayed track
                currentTrackIndex = unplayed[Math.floor(Math.random() * unplayed.length)];
                playedIndices.push(currentTrackIndex);
            } else {
                // Fallback
                currentTrackIndex = Math.floor(Math.random() * playlistTracks.length);
            }
        }
        
        audio.src = getActiveTrack().src;
        audio.volume = 0.1;
        audio.play();
        renderScreen();
    };
    
    document.getElementById("ipod-btn-next").addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        playNext();
    });

    // 5. PREVIOUS Button (Shuffle back / restart track)
    document.getElementById("ipod-btn-prev").addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        const playlistTracks = playlists[activePlaylistName];
        
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            // Pick a random track index in the active playlist that is different
            if (playlistTracks.length <= 1) {
                currentTrackIndex = 0;
            } else {
                let prevIndex = currentTrackIndex;
                while (prevIndex === currentTrackIndex) {
                    prevIndex = Math.floor(Math.random() * playlistTracks.length);
                }
                currentTrackIndex = prevIndex;
                
                // Track this as played in history
                if (!playedIndices.includes(currentTrackIndex)) {
                    playedIndices.push(currentTrackIndex);
                }
            }
            audio.src = getActiveTrack().src;
            audio.volume = 0.1;
            audio.play();
        }
        renderScreen();
    });

    // ── Playback Progress Interval updates ──
    setInterval(() => {
        const currentView = menuStack[menuStack.length - 1];
        if (currentView === "nowplaying" && !audio.paused) {
            renderScreen();
        }
    }, 1000);

    // Audio ended -> auto play next on shuffle / playlist cycle
    audio.addEventListener("ended", () => {
        playNext();
    });

    // ── Widget Expand / Close Events ──
    const closeBtn = ipodContainer.querySelector(".ipod-close-btn");
    const clicker = ipodContainer.querySelector(".ipod-expand-clicker");

    clicker.addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        expandIpod();
    });

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        playClickSound();
        minimizeIpod();
    });
});
