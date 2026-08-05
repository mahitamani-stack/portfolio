/* ── iPod Classic Interactive Player Widget ── */

document.addEventListener("DOMContentLoaded", () => {
    // ── Local Playlists containing 83 tracks and custom APIC extracted cover art ──
    const playlists = {
        "desi house": [
                {
                        "title": "Haseen Raatein (Happy Nights)",
                        "artist": "Fake Tattoos",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736492/ipod%20music/Fake%20Tattoos%20-%20Haseen%20Raatein%20%28Happy%20Nights%29%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/desi_house_Haseen_Raatein_Happy_Nights.jpg"
                },
                {
                        "title": "Haveli",
                        "artist": "Fake Tattoos",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736500/ipod%20music/Fake%20Tattoos%20-%20Haveli%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/desi_house_Haveli.jpg"
                },
                {
                        "title": "Sitta",
                        "artist": "Novak, Chitralekha Sen",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736506/ipod%20music/Novak%2C%20Chitralekha%20Sen%20-%20Sitta%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/desi_house_Sitta.jpg"
                },
                {
                        "title": "Taka",
                        "artist": "SIDEPIECE, San Pacho",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736512/ipod%20music/SIDEPIECE%2C%20San%20Pacho%20-%20Taka%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/desi_house_Taka.jpg"
                }
        ],
        "super secret gym playlist": [
                {
                        "title": "Ghost Of You",
                        "artist": "5 Seconds of Summer",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736835/ipod%20music/5%20Seconds%20of%20Summer%20-%20Ghost%20Of%20You%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Ghost_Of_You.jpg"
                },
                {
                        "title": "Casual",
                        "artist": "Chappell Roan",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736840/ipod%20music/Chappell%20Roan%20-%20Casual%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Casual.jpg"
                },
                {
                        "title": "Beanie",
                        "artist": "Chezile",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736845/ipod%20music/Chezile%20-%20Beanie%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Beanie.jpg"
                },
                {
                        "title": "Sunsetz",
                        "artist": "Cigarettes After Sex",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736856/ipod%20music/Cigarettes%20After%20Sex%20-%20Sunsetz%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Sunsetz.jpg"
                },
                {
                        "title": "Sparks",
                        "artist": "Coldplay",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736864/ipod%20music/Coldplay%20-%20Sparks%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Sparks.jpg"
                },
                {
                        "title": "Astronomy",
                        "artist": "Conan Gray",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736878/ipod%20music/Conan%20Gray%20-%20Astronomy%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Astronomy.jpg"
                },
                {
                        "title": "The Cut That Always Bleeds",
                        "artist": "Conan Gray",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736887/ipod%20music/Conan%20Gray%20-%20The%20Cut%20That%20Always%20Bleeds%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_The_Cut_That_Always_Bleeds.jpg"
                },
                {
                        "title": "I Know You",
                        "artist": "Faye Webster",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736893/ipod%20music/Faye%20Webster%20-%20I%20Know%20You%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_I_Know_You.jpg"
                },
                {
                        "title": "Silver Springs - 2004 Remaster",
                        "artist": "Fleetwood Mac",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736898/ipod%20music/Fleetwood%20Mac%20-%20Silver%20Springs%20-%202004%20Remaster%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Silver_Springs_-_2004_Remaster.jpg"
                },
                {
                        "title": "Do I Wanna Know - Live At the BBC",
                        "artist": "Hozier",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736904/ipod%20music/Hozier%20-%20Do%20I%20Wanna%20Know%20-%20Live%20At%20the%20BBC%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Do_I_Wanna_Know_-_Live_At_the_BBC.jpg"
                },
                {
                        "title": "What if I miss you for the rest of my life",
                        "artist": "Janine Berdin",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736910/ipod%20music/Janine%20Berdin%20-%20What%20if%20I%20miss%20you%20for%20the%20rest%20of%20my%20life%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_What_if_I_miss_you_for_the_rest_of_my_life.jpg"
                },
                {
                        "title": "Glimpse of Us",
                        "artist": "Joji",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736918/ipod%20music/Joji%20-%20Glimpse%20of%20Us%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Glimpse_of_Us.jpg"
                },
                {
                        "title": "SLOW DANCING IN THE DARK",
                        "artist": "Joji",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736925/ipod%20music/Joji%20-%20SLOW%20DANCING%20IN%20THE%20DARK%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_SLOW_DANCING_IN_THE_DARK.jpg"
                },
                {
                        "title": "The Night We Met",
                        "artist": "Lord Huron",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736932/ipod%20music/Lord%20Huron%20-%20The%20Night%20We%20Met%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_The_Night_We_Met.jpg"
                },
                {
                        "title": "Two of Us - Acoustic",
                        "artist": "Louis Tomlinson",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736941/ipod%20music/Louis%20Tomlinson%20-%20Two%20of%20Us%20-%20Acoustic%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Two_of_Us_-_Acoustic.jpg"
                },
                {
                        "title": "My Kind of Woman",
                        "artist": "Mac DeMarco",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736948/ipod%20music/Mac%20DeMarco%20-%20My%20Kind%20of%20Woman%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_My_Kind_of_Woman.jpg"
                },
                {
                        "title": "Fade Into You",
                        "artist": "Mazzy Star",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736963/ipod%20music/Mazzy%20Star%20-%20Fade%20Into%20You%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Fade_Into_You.jpg"
                },
                {
                        "title": "1 step forward, 3 steps back",
                        "artist": "Olivia Rodrigo",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736975/ipod%20music/Olivia%20Rodrigo%20-%201%20step%20forward%2C%203%20steps%20back%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_1_step_forward_3_steps_back.jpg"
                },
                {
                        "title": "deja vu",
                        "artist": "Olivia Rodrigo",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736998/ipod%20music/Olivia%20Rodrigo%20-%20deja%20vu%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_deja_vu.jpg"
                },
                {
                        "title": "drivers license",
                        "artist": "Olivia Rodrigo",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737020/ipod%20music/Olivia%20Rodrigo%20-%20drivers%20license%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_drivers_license.jpg"
                },
                {
                        "title": "traitor",
                        "artist": "Olivia Rodrigo",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737035/ipod%20music/Olivia%20Rodrigo%20-%20traitor%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_traitor.jpg"
                },
                {
                        "title": "Half a Heart",
                        "artist": "One Direction",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737045/ipod%20music/One%20Direction%20-%20Half%20a%20Heart%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Half_a_Heart.jpg"
                },
                {
                        "title": "Scott Street",
                        "artist": "Phoebe Bridgers",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737072/ipod%20music/Phoebe%20Bridgers%20-%20Scott%20Street%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Scott_Street.jpg"
                },
                {
                        "title": "Let Down - Remastered",
                        "artist": "Radiohead",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737086/ipod%20music/Radiohead%20-%20Let%20Down%20-%20Remastered%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Let_Down_-_Remastered.jpg"
                },
                {
                        "title": "Mr. Loverman",
                        "artist": "Ricky Montgomery",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737101/ipod%20music/Ricky%20Montgomery%20-%20Mr.%20Loverman%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Mr_Loverman.jpg"
                },
                {
                        "title": "Peter",
                        "artist": "Taylor Swift",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737122/ipod%20music/Taylor%20Swift%20-%20Peter%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Peter.jpg"
                },
                {
                        "title": "exile (feat. Bon Iver)",
                        "artist": "Taylor Swift, Bon Iver",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737145/ipod%20music/Taylor%20Swift%2C%20Bon%20Iver%20-%20exile%20%28feat.%20Bon%20Iver%29%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_exile_feat_Bon_Iver.jpg"
                },
                {
                        "title": "About You",
                        "artist": "The 1975",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737156/ipod%20music/The%201975%20-%20About%20You%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_About_You.jpg"
                },
                {
                        "title": "Linger",
                        "artist": "The Cranberries",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737168/ipod%20music/The%20Cranberries%20-%20Linger%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Linger.jpg"
                },
                {
                        "title": "Back To Me",
                        "artist": "The Mari\u0301as",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737174/ipod%20music/The%20Mari%CC%81as%20-%20Back%20To%20Me%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Back_To_Me.jpg"
                },
                {
                        "title": "Coffee",
                        "artist": "beabadoobee",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737186/ipod%20music/beabadoobee%20-%20Coffee%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_Coffee.jpg"
                },
                {
                        "title": "back to friends",
                        "artist": "sombr",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737190/ipod%20music/sombr%20-%20back%20to%20friends%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_back_to_friends.jpg"
                },
                {
                        "title": "perfume",
                        "artist": "sombr",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737196/ipod%20music/sombr%20-%20perfume%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_perfume.jpg"
                },
                {
                        "title": "undressed",
                        "artist": "sombr",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737202/ipod%20music/sombr%20-%20undressed%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/super_secret_gym_playlist_undressed.jpg"
                }
        ],
        "life is a movie-core": [
                {
                        "title": "Determinate - From Lemonade Mouth",
                        "artist": "Adam Hicks, Bridgit Mendler, Naomi Scott",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736519/ipod%20music/Adam%20Hicks%2C%20Bridgit%20Mendler%2C%20Naomi%20Scott%20-%20Determinate%20-%20From%20Lemonade%20Mouth%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Determinate_-_From_Lemonade_Mouth.jpg"
                },
                {
                        "title": "Something About the Sunshine (Duet)",
                        "artist": "Anna Margaret, Christopher Wilde",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736526/ipod%20music/Anna%20Margaret%2C%20Christopher%20Wilde%20-%20Something%20About%20the%20Sunshine%20%28Duet%29%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Something_About_the_Sunshine_Duet.jpg"
                },
                {
                        "title": "It's Alright, It's OK",
                        "artist": "Ashley Tisdale",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736531/ipod%20music/Ashley%20Tisdale%20-%20It%27s%20Alright%2C%20It%27s%20OK%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Its_Alright_Its_OK.jpg"
                },
                {
                        "title": "The Tide Is High - Radio Mix",
                        "artist": "Atomic Kitten",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736537/ipod%20music/Atomic%20Kitten%20-%20The%20Tide%20Is%20High%20-%20Radio%20Mix%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_The_Tide_Is_High_-_Radio_Mix.jpg"
                },
                {
                        "title": "Hurricane",
                        "artist": "Bridgit Mendler",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736545/ipod%20music/Bridgit%20Mendler%20-%20Hurricane%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hurricane.jpg"
                },
                {
                        "title": "Ready or Not",
                        "artist": "Bridgit Mendler",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736553/ipod%20music/Bridgit%20Mendler%20-%20Ready%20or%20Not%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Ready_or_Not.jpg"
                },
                {
                        "title": "Somebody",
                        "artist": "Bridgit Mendler",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736563/ipod%20music/Bridgit%20Mendler%20-%20Somebody%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Somebody.jpg"
                },
                {
                        "title": "We Rock",
                        "artist": "Cast Of Camp Rock",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736572/ipod%20music/Cast%20Of%20Camp%20Rock%20-%20We%20Rock%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_We_Rock.jpg"
                },
                {
                        "title": "Hero",
                        "artist": "Christopher Wilde",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736579/ipod%20music/Christopher%20Wilde%20-%20Hero%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hero.jpg"
                },
                {
                        "title": "Starstruck",
                        "artist": "Christopher Wilde",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736585/ipod%20music/Christopher%20Wilde%20-%20Starstruck%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Starstruck.jpg"
                },
                {
                        "title": "Give Your Heart a Break",
                        "artist": "Demi Lovato",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736592/ipod%20music/Demi%20Lovato%20-%20Give%20Your%20Heart%20a%20Break%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Give_Your_Heart_a_Break.jpg"
                },
                {
                        "title": "Wouldn't Change a Thing - From Camp Rock 2 The Final Jam",
                        "artist": "Demi Lovato, Joe Jonas",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736598/ipod%20music/Demi%20Lovato%2C%20Joe%20Jonas%20-%20Wouldn%27t%20Change%20a%20Thing%20-%20From%20Camp%20Rock%202%20The%20Final%20Jam%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Wouldnt_Change_a_Thing_-_From_Camp_Rock_2_The_Final_Jam.jpg"
                },
                {
                        "title": "He Could Be the One",
                        "artist": "Hannah Montana",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736606/ipod%20music/Hannah%20Montana%20-%20He%20Could%20Be%20the%20One%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_He_Could_Be_the_One.jpg"
                },
                {
                        "title": "Nobody's Perfect",
                        "artist": "Hannah Montana",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736616/ipod%20music/Hannah%20Montana%20-%20Nobody%27s%20Perfect%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Nobodys_Perfect.jpg"
                },
                {
                        "title": "Ordinary Girl",
                        "artist": "Hannah Montana",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736621/ipod%20music/Hannah%20Montana%20-%20Ordinary%20Girl%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Ordinary_Girl.jpg"
                },
                {
                        "title": "Rock Star",
                        "artist": "Hannah Montana",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736628/ipod%20music/Hannah%20Montana%20-%20Rock%20Star%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Rock_Star.jpg"
                },
                {
                        "title": "The Best of Both Worlds",
                        "artist": "Hannah Montana",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736635/ipod%20music/Hannah%20Montana%20-%20The%20Best%20of%20Both%20Worlds%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_The_Best_of_Both_Worlds.jpg"
                },
                {
                        "title": "Beautiful Soul",
                        "artist": "Jesse McCartney",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736643/ipod%20music/Jesse%20McCartney%20-%20Beautiful%20Soul%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Beautiful_Soul.jpg"
                },
                {
                        "title": "Gotta Find You - From Camp Rock Soundtrack Version",
                        "artist": "Joe Jonas",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736650/ipod%20music/Joe%20Jonas%20-%20Gotta%20Find%20You%20-%20From%20Camp%20Rock%20Soundtrack%20Version%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Gotta_Find_You_-_From_Camp_Rock_Soundtrack_Version.jpg"
                },
                {
                        "title": "Play My Music",
                        "artist": "Jonas Brothers",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736656/ipod%20music/Jonas%20Brothers%20-%20Play%20My%20Music%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Play_My_Music.jpg"
                },
                {
                        "title": "S.O.S.",
                        "artist": "Jonas Brothers",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736660/ipod%20music/Jonas%20Brothers%20-%20S.O.S.%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_SOS.jpg"
                },
                {
                        "title": "Year 3000",
                        "artist": "Jonas Brothers",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736665/ipod%20music/Jonas%20Brothers%20-%20Year%203000%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Year_3000.jpg"
                },
                {
                        "title": "Hasta La Vista",
                        "artist": "Jordan Francis, Roshon Bernard Fegan",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736669/ipod%20music/Jordan%20Francis%2C%20Roshon%20Bernard%20Fegan%20-%20Hasta%20La%20Vista%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hasta_La_Vista.jpg"
                },
                {
                        "title": "My Life Would Suck Without You",
                        "artist": "Kelly Clarkson",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736675/ipod%20music/Kelly%20Clarkson%20-%20My%20Life%20Would%20Suck%20Without%20You%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_My_Life_Would_Suck_Without_You.jpg"
                },
                {
                        "title": "Too Cool",
                        "artist": "Meaghan Martin",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736681/ipod%20music/Meaghan%20Martin%20-%20Too%20Cool%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Too_Cool.jpg"
                },
                {
                        "title": "Hoedown Throwdown",
                        "artist": "Miley Cyrus",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736687/ipod%20music/Miley%20Cyrus%20-%20Hoedown%20Throwdown%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hoedown_Throwdown.jpg"
                },
                {
                        "title": "See You Again",
                        "artist": "Miley Cyrus",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736693/ipod%20music/Miley%20Cyrus%20-%20See%20You%20Again%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_See_You_Again.jpg"
                },
                {
                        "title": "The Climb",
                        "artist": "Miley Cyrus",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736701/ipod%20music/Miley%20Cyrus%20-%20The%20Climb%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_The_Climb.jpg"
                },
                {
                        "title": "Butterfly Fly Away",
                        "artist": "Miley Cyrus, Billy Ray Cyrus",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736710/ipod%20music/Miley%20Cyrus%2C%20Billy%20Ray%20Cyrus%20-%20Butterfly%20Fly%20Away%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Butterfly_Fly_Away.jpg"
                },
                {
                        "title": "About You Now",
                        "artist": "Miranda Cosgrove",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736717/ipod%20music/Miranda%20Cosgrove%20-%20About%20You%20Now%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_About_You_Now.jpg"
                },
                {
                        "title": "Shakespeare",
                        "artist": "Miranda Cosgrove",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736724/ipod%20music/Miranda%20Cosgrove%20-%20Shakespeare%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Shakespeare.jpg"
                },
                {
                        "title": "Let's Make This Last 4Ever",
                        "artist": "Mitchel Musso",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736732/ipod%20music/Mitchel%20Musso%20-%20Let%27s%20Make%20This%20Last%204Ever%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Lets_Make_This_Last_4Ever.jpg"
                },
                {
                        "title": "She's So Gone",
                        "artist": "Naomi Scott",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736737/ipod%20music/Naomi%20Scott%20-%20She%27s%20So%20Gone%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Shes_So_Gone.jpg"
                },
                {
                        "title": "Introducing Me - From Camp Rock 2 The Final Jam",
                        "artist": "Nick Jonas",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736743/ipod%20music/Nick%20Jonas%20-%20Introducing%20Me%20-%20From%20Camp%20Rock%202%20The%20Final%20Jam%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Introducing_Me_-_From_Camp_Rock_2_The_Final_Jam.jpg"
                },
                {
                        "title": "Hit The Lights",
                        "artist": "Selena Gomez & The Scene",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737215/ipod%20music/Selena%20Gomez%20and%20The%20Scene%20-%20Hit%20The%20Lights%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Hit_The_Lights.jpg"
                },
                {
                        "title": "Naturally",
                        "artist": "Selena Gomez & The Scene",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737244/ipod%20music/Selena%20Gomez%20and%20The%20Scene%20-%20Naturally%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Naturally.jpg"
                },
                {
                        "title": "Round & Round",
                        "artist": "Selena Gomez & The Scene",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782737269/ipod%20music/Selena%20Gomez%20and%20The%20Scene%20-%20Round%20and%20Round%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Round__Round.jpg"
                },
                {
                        "title": "Tell Me Something I Don't Know - Soundtrack",
                        "artist": "Selena Gomez",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736776/ipod%20music/Selena%20Gomez%20-%20Tell%20Me%20Something%20I%20Don%27t%20Know%20-%20Soundtrack%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Tell_Me_Something_I_Dont_Know_-_Soundtrack.jpg"
                },
                {
                        "title": "Strut - From The Cheetah Girls 2",
                        "artist": "The Cheetah Girls",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736783/ipod%20music/The%20Cheetah%20Girls%20-%20Strut%20-%20From%20The%20Cheetah%20Girls%202%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Strut_-_From_The_Cheetah_Girls_2.jpg"
                },
                {
                        "title": "Breaking Free",
                        "artist": "Troy, Gabriella, Disney",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736797/ipod%20music/Troy%2C%20Gabriella%2C%20Disney%20-%20Breaking%20Free%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Breaking_Free.jpg"
                },
                {
                        "title": "Start of Something New",
                        "artist": "Troy, Gabriella, Disney",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736802/ipod%20music/Troy%2C%20Gabriella%2C%20Disney%20-%20Start%20of%20Something%20New%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Start_of_Something_New.jpg"
                },
                {
                        "title": "You Are the Music in Me",
                        "artist": "Troy, Gabriella, Disney",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736809/ipod%20music/Troy%2C%20Gabriella%2C%20Disney%20-%20You%20Are%20the%20Music%20in%20Me%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_You_Are_the_Music_in_Me.jpg"
                },
                {
                        "title": "Best Friend's Brother (feat. Victoria Justice)",
                        "artist": "Victorious Cast, Victoria Justice",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736816/ipod%20music/Victorious%20Cast%2C%20Victoria%20Justice%20-%20Best%20Friend%27s%20Brother%20%28feat.%20Victoria%20Justice%29%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Best_Friends_Brother_feat_Victoria_Justice.jpg"
                },
                {
                        "title": "Gotta Go My Own Way",
                        "artist": "Zac Efron, Vanessa Hudgens, Disney",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736825/ipod%20music/Zac%20Efron%2C%20Vanessa%20Hudgens%2C%20Disney%20-%20Gotta%20Go%20My%20Own%20Way%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Gotta_Go_My_Own_Way.jpg"
                },
                {
                        "title": "Replay",
                        "artist": "Zendaya",
                        "src": "https://res.cloudinary.com/dyazh2nxk/video/upload/v1782736831/ipod%20music/Zendaya%20-%20Replay%20%28SPOTISAVER%29.mp3",
                        "cover": "/album_art/life_is_a_movie-core_Replay.jpg"
                }
        ]
};

    // ── Session Persistence: save/restore across page navigations ──
    const STORAGE_KEY = 'ipod_state';
    const saveState = () => {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                playlist: activePlaylistName,
                trackIndex: currentTrackIndex,
                currentTime: audio.currentTime,
                wasPlaying: isPlaying,
                playedIndices: playedIndices
            }));
        } catch(e) {}
    };
    const loadState = () => {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch(e) { return null; }
    };

    const playlistNames = Object.keys(playlists);
    const saved = loadState();

    let activePlaylistName, currentTrackIndex, playedIndices, isPlaying = false, isTemporarilyPaused = false;

    if (saved && playlists[saved.playlist] && playlists[saved.playlist][saved.trackIndex]) {
        // Restore saved session state
        activePlaylistName = saved.playlist;
        currentTrackIndex = saved.trackIndex;
        playedIndices = saved.playedIndices || [currentTrackIndex];
        isPlaying = saved.wasPlaying || false;
    } else {
        // Fresh start — pick random playlist + track
        activePlaylistName = playlistNames[Math.floor(Math.random() * playlistNames.length)];
        currentTrackIndex = Math.floor(Math.random() * playlists[activePlaylistName].length);
        playedIndices = [currentTrackIndex];
        isPlaying = true;
    }

    // Retrieve track helper
    const getActiveTrack = () => playlists[activePlaylistName][currentTrackIndex];

    const audio = new Audio();
    audio.src = getActiveTrack().src;
    audio.volume = 0.2;

    // Restore playback position if coming from another page
    if (saved && saved.currentTime > 0) {
        audio.currentTime = saved.currentTime;
    }

    // Expose global window APIs for audio control
    window.playIpodAudio = () => {
        audio.play().catch(() => {});
    };
    window.pauseIpodAudio = () => {
        audio.pause();
    };
    window.isIpodAudioPlaying = () => {
        return !audio.paused;
    };

    // ── Native Audio Event Listeners for State Synchronization ──
    audio.addEventListener("play", () => {
        document.removeEventListener("click", tryAutoplay);
        document.removeEventListener("touchstart", tryAutoplay);
        isPlaying = true;
        saveState();
        renderScreen();
        if (typeof window.__updateSoundCapsule === 'function') window.__updateSoundCapsule();
    });

    audio.addEventListener("pause", () => {
        if (!isTemporarilyPaused) {
            isPlaying = false;
            saveState();
        }
        renderScreen();
        if (typeof window.__updateSoundCapsule === 'function') window.__updateSoundCapsule();
    });

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

    // ── Autoplay / Resume Handler ──
    // If music was playing on previous page, auto-resume immediately
    const tryAutoplay = (userGesture) => {
        audio.play().catch(() => {
            // Blocked without user gesture — will resume on first click
        });
    };

    if (saved ? saved.wasPlaying : true) {
        // Try immediate resume (works if same-origin navigation already gave permission).
        // Only listen for a follow-up gesture when we actually have something to resume —
        // otherwise any click on a fresh/paused page would unexpectedly start playback.
        tryAutoplay(false);
        document.addEventListener("click", tryAutoplay);
        document.addEventListener("touchstart", tryAutoplay);
    }

    // ── Pause (and remember) playback when the tab/screen is hidden ──
    // Prevents audio from continuing in the background after the phone locks,
    // the tab is switched away from, or the tab/window is closed.
    const pauseForBackground = () => {
        if (isPlaying && !audio.paused) {
            isTemporarilyPaused = true;
            audio.pause();
        }
    };

    const resumeFromBackground = () => {
        if (isTemporarilyPaused) {
            isTemporarilyPaused = false;
            audio.play().catch(() => {});
        }
    };

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            pauseForBackground();
        } else {
            resumeFromBackground();
        }
    });

    window.addEventListener("pagehide", pauseForBackground);
    window.addEventListener("pageshow", resumeFromBackground);
    window.addEventListener("focus", resumeFromBackground);
    window.addEventListener("freeze", pauseForBackground);
    window.addEventListener("blur", pauseForBackground);

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
            <img src="/ipod.webp" class="ipod-faceplate" alt="iPod Classic" fetchpriority="high" decoding="async">
            
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

    // ── Hide iPod during intro video, pop-in animate when revealed ──
    const introOverlay = document.getElementById('intro-overlay') || document.querySelector('.intro-video-overlay') || document.querySelector('#intro-video-wrap');
    if (introOverlay) {
        // Keep iPod fully out of the way until intro is completely gone
        ipodContainer.style.opacity = '0';
        ipodContainer.style.visibility = 'hidden';
        ipodContainer.style.pointerEvents = 'none';

        let revealed = false;
        window.__triggerIpodReveal = () => {
            revealIpod();
        };
        const introFullyDone = () =>
            introOverlay.style.display === 'none'
            || !document.body.contains(introOverlay);

        const revealIpod = () => {
            if (revealed) return;
            revealed = true;

            // The faceplate <img> is decoding="async", so on a cold cache (first-ever
            // visit) it can still be decoding when the pop-in below starts, and the
            // animation flashes the screen div with no device body around it for a
            // beat. Wait for it to actually be paintable first (capped so a slow/failed
            // image never delays the reveal indefinitely).
            const faceplate = ipodContainer.querySelector('.ipod-faceplate');
            if (faceplate && !faceplate.complete) {
                let started = false;
                const startPopIn = () => {
                    if (started) return;
                    started = true;
                    popIn();
                };
                faceplate.addEventListener('load', startPopIn, { once: true });
                faceplate.addEventListener('error', startPopIn, { once: true });
                setTimeout(startPopIn, 800);
                return;
            }
            popIn();
        };

        const popIn = () => {
            // Step 1: pop in at the SAME size/position it uses when opened via click
            // (right:20px / bottom:100px, full 312x555 size — no center modal, no backdrop,
            // so the macOS windows revealing in the background stay visible)
            ipodContainer.classList.remove('minimized'); // drop the tiny 42x75 icon size
            ipodContainer.style.transition = 'none';
            ipodContainer.style.visibility = '';
            ipodContainer.style.opacity = '0';
            ipodContainer.style.pointerEvents = '';
            ipodContainer.style.position = 'fixed';
            ipodContainer.style.top = 'auto';
            ipodContainer.style.left = 'auto';
            ipodContainer.style.right = '20px';
            ipodContainer.style.bottom = '100px';
            ipodContainer.style.transform = 'scale(0.6)';
            ipodContainer.style.zIndex = '10000';

            // Force reflow so the transition below actually animates from this start state
            void ipodContainer.offsetHeight;

            ipodContainer.style.transition = 'opacity 0.5s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
            ipodContainer.style.opacity = '1';
            ipodContainer.style.transform = 'scale(1)';

            // Step 2: after a beat, shrink back down into the minimized corner position
            setTimeout(() => {
                ipodContainer.style.transition = 'all 0.65s cubic-bezier(0.34, 1.1, 0.64, 1)';
                // Reset to original corner CSS (remove inline overrides)
                ipodContainer.style.top = '';
                ipodContainer.style.left = '';
                ipodContainer.style.right = '';
                ipodContainer.style.bottom = '';
                ipodContainer.style.transform = '';
                ipodContainer.style.zIndex = '';
                ipodContainer.style.position = '';
                ipodContainer.classList.add('minimized'); // shrink back to the small icon
            }, 1400);
        };

        const isMobileGuardActive = () => document.documentElement.classList.contains('bm-mobile-guard');

        if (!isMobileGuardActive() && (introFullyDone() || sessionStorage.getItem('introPlayed') === 'true')) {
            // Intro already skipped this session — reveal shortly after load
            setTimeout(revealIpod, 400);
        } else {
            // Wait until overlay is fully removed (display:none), NOT mid-fade opacity.
            const observer = new MutationObserver(() => {
                if (introFullyDone() && !isMobileGuardActive()) {
                    observer.disconnect();
                    revealIpod();
                }
            });
            if (introOverlay) {
                observer.observe(introOverlay, { attributes: true, attributeFilter: ['style', 'class'] });
            }
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

            // Safety only — intro is ~4s + fade; never interrupt playback
            setTimeout(() => {
                if (!revealed && !isMobileGuardActive()) revealIpod();
            }, 15000);
        }
    }

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
                if (isPlaying) {
                    audio.pause();
                    isPlaying = false;
                }
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
                audio.volume = 0.2;
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

        // Scroll selected item into view
        setTimeout(() => {
            const activeItem = contentArea.querySelector(".ipod-menu-item.selected");
            const menuList = contentArea.querySelector(".ipod-screen-menu");
            if (activeItem && menuList) {
                const listRect = menuList.getBoundingClientRect();
                const itemRect = activeItem.getBoundingClientRect();
                
                if (itemRect.bottom > listRect.bottom) {
                    menuList.scrollTop += (itemRect.bottom - listRect.bottom);
                } else if (itemRect.top < listRect.top) {
                    menuList.scrollTop -= (listRect.top - itemRect.top);
                }
            }
        }, 0);
    };

    // Initial render
    renderScreen();

    // ── Screen Touch/Click Navigation Delegation ──
    const screenContainer = ipodContainer.querySelector(".ipod-screen-container");
    screenContainer.addEventListener("click", (e) => {
        const menuItem = e.target.closest(".ipod-menu-item");
        if (menuItem) {
            e.stopPropagation();
            playClickSound();
            const idx = parseInt(menuItem.getAttribute("data-index"), 10);
            selectedIndex = idx;
            triggerSelect();
        }
    });

    // Screen list scrolling is native (.ipod-screen-menu has overflow-y:auto) —
    // a finger drag on the screen just scrolls the list directly, like any
    // normal scrollable list. This used to be hijacked into a "drag nudges
    // the selection by a fixed 25px-per-item step" gesture with
    // preventDefault() blocking the real scroll, which meant reaching a
    // song further than ~7 items down a long playlist took many repeated
    // short swipes instead of one natural scroll.

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

        if (Math.abs(accumulatedRotation) > 3) {
            didRotate = true;
        }

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

    let didRotate = false;

    const onStart = (clientX, clientY) => {
        const rect = wheel.getBoundingClientRect();
        lastAngle = getAngle(clientX, clientY, rect);
        isDragging = true;
        accumulatedRotation = 0;
        didRotate = false;
    };

    wheel.addEventListener("mousedown", (e) => {
        onStart(e.clientX, e.clientY);
    });

    wheel.addEventListener("touchstart", (e) => {
        if (e.touches.length > 0) {
            onStart(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    document.addEventListener("mousemove", handleRotation);
    document.addEventListener("touchmove", handleRotation, { passive: false });

    const onEnd = () => { 
        // Delay resetting isDragging/didRotate slightly so click handlers run first
        setTimeout(() => {
            isDragging = false;
        }, 50);
    };
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchend", onEnd);

    // ── Click Wheel Button Click Handlers ──

    // 1. SELECT (Center Button)
    document.getElementById("ipod-btn-select").addEventListener("click", (e) => {
        e.stopPropagation();
        if (didRotate) return;
        playClickSound();
        triggerSelect();
    });

    // 2. MENU Button (Go back)
    document.getElementById("ipod-btn-menu").addEventListener("click", (e) => {
        e.stopPropagation();
        if (didRotate) return;
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
        if (didRotate) return;
        playClickSound();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        renderScreen();
        saveState();
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
        audio.volume = 0.2;
        audio.play();
        renderScreen();
        saveState();
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
            audio.volume = 0.2;
            audio.play();
        }
        renderScreen();
    });

    // ── Playback Progress Interval updates + session save ──
    setInterval(() => {
        const currentView = menuStack[menuStack.length - 1];
        if (!audio.paused) {
            saveState();
            if (currentView === "nowplaying") renderScreen();
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

    // ── iPod/Video Playback Sync & Performance Visibility Observer & Footer Staggered Scroll Reveal ──
    (function() {
        // A. Video-to-iPod Control Listener
        let ipodPausedByVideo = false;

        const handleVideoPlay = (video) => {
            if (video.id === 'intro-video' || video.classList.contains('site-media')) return;
            if (!audio.paused) {
                ipodPausedByVideo = true;
                window.pauseIpodAudio();
            }
        };

        const handleVideoPause = (video) => {
            if (video.id === 'intro-video' || video.classList.contains('site-media')) return;
            if (ipodPausedByVideo) {
                const allVids = Array.from(document.querySelectorAll('video'));
                const anyPlaying = allVids.some(v => 
                    v.id !== 'intro-video' && 
                    !v.classList.contains('site-media') && 
                    !v.paused && 
                    !v.ended
                );
                if (!anyPlaying) {
                    ipodPausedByVideo = false;
                    window.playIpodAudio();
                }
            }
        };

        const setupVideoSync = () => {
            document.querySelectorAll('video').forEach(video => {
                if (video.dataset.ipodSynced) return;
                video.dataset.ipodSynced = "true";
                video.addEventListener('play', () => handleVideoPlay(video));
                video.addEventListener('pause', () => handleVideoPause(video));
                video.addEventListener('ended', () => handleVideoPause(video));
            });
        };

        setupVideoSync();
        setInterval(setupVideoSync, 1000);

        // B. Offscreen Video Auto-Pauser (Performance Optimization for Mobile)
        if ('IntersectionObserver' in window) {
            const videoVisibilityObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (video.id === 'intro-video') return;
                    // Mise en Place's carousel videos live inside 3D-rotated
                    // fold panels (rotateX ~123deg) — from the camera's
                    // projected 2D bounding box they're a near-zero-area
                    // sliver, so this observer reads them as never
                    // intersecting and continuously re-pauses them right
                    // after they start, which looked like the video/thumbnail
                    // never showing up at all. They already have their own
                    // always-on autoplay handling in mise-en-place's page
                    // script, so skip them here.
                    if (video.closest('.video-deck-card')) return;

                    if (entry.isIntersecting) {
                        if (video.dataset.wasPlaying === 'true' || video.autoplay) {
                            video.play().catch(() => {});
                        }
                    } else {
                        video.dataset.wasPlaying = (!video.paused && !video.ended).toString();
                        video.pause();
                    }
                });
            }, { threshold: 0.1 });

            const observeVideos = () => {
                document.querySelectorAll('video').forEach(video => {
                    if (video.dataset.visibilityObserved) return;
                    video.dataset.visibilityObserved = "true";
                    videoVisibilityObserver.observe(video);
                });
            };

            observeVideos();
            setInterval(observeVideos, 1500);
        }

        // C. Footer 3D Letter Ripple Scroll-Reveal
        // Each letter's <model-viewer> is a live WebGL context. They ship
        // with auto-rotate="" baked into the HTML, which keeps them
        // continuously rendering/rotating even while sitting at opacity:0
        // (the default, non-hovered state) — 6 permanently-spinning WebGL
        // contexts per page doing literally invisible work. That's a real
        // contributor to the "laggy, sometimes goes blank" reports on
        // longer sessions, especially on mobile GPUs with tight WebGL
        // context budgets. Auto-rotate is now only turned on for the
        // moments the model is actually visible (hovered, or during the
        // scroll-reveal ripple), and off otherwise.
        const footerLetters = document.querySelectorAll('.sprite-3d-letter');
        footerLetters.forEach((letter) => {
            const model = letter.querySelector('.sprite-3d-model');
            if (!model) return;
            model.removeAttribute('auto-rotate');
            letter.addEventListener('mouseenter', () => model.setAttribute('auto-rotate', ''));
            letter.addEventListener('mouseleave', () => model.removeAttribute('auto-rotate'));
        });

        if ('IntersectionObserver' in window) {
            const REVEAL_HOLD_MS = 500;   // how long each letter stays in its 3D state
            const REVEAL_STEP_MS = 550;   // gap between one letter starting and the next — kept
                                           // slightly longer than the hold so letters don't overlap
                                           // and settle back to text before the next one turns

            const footerObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        footerObserver.unobserve(entry.target);
                        const letters = entry.target.querySelectorAll('.sprite-3d-letter');
                        letters.forEach((letter, index) => {
                            const model = letter.querySelector('.sprite-3d-model');
                            setTimeout(() => {
                                letter.classList.add('sprite-3d-active');
                                if (model) model.setAttribute('auto-rotate', '');
                                setTimeout(() => {
                                    letter.classList.remove('sprite-3d-active');
                                    if (model) model.removeAttribute('auto-rotate');
                                }, REVEAL_HOLD_MS);
                            }, index * REVEAL_STEP_MS);
                        });
                    }
                });
            }, { threshold: 0 });

            const footerRow = document.querySelector('.footer-3d-row');
            if (footerRow) footerObserver.observe(footerRow);
        }
    })();
});
