
//Initialize global function
let id=(el)=>document.getElementById(el);
let Class=(el)=>document.querySelector(el);
//getting variables from the dom tree
let prev=id("prev");
let next=id("next");
let play=id("play");
let player=id("player");
let songTitle=Class(".song-tile");
let music_disk=Class(".spin-disc");
let albumTitle=Class(".album-title");
let artistName=Class(".artist-name");
let musicContainer=Class(".music-player-container");
let count=2;
//arrage of song url and song titles
songs=[
    {
        artist_name:"Jesse_Warren",
        album_title:"Miles_Above_You",
        song_tile:"Moltivation_Music",
        url:"music/suprime1.mp3"
    },
    {
        artist_name:"_BraveLion_",
        album_title:"Pop,_SAX,Beat,",
        song_tile:"HAPPY_VLOG_MUSIC",
        url:"music/suprime2.mp3"
    },
    {
        artist_name:"Unkown Artist",
        album_title:"Electro_House_2017",
        song_tile:"House_Music__Jol3x",
        url:"music/suprime3.mp3"
    },
    {
        artist_name:"Afire_feat._Strix",
        album_title:"Music__Defqwop",
        song_tile:"_-_Heart_Afire",
        url:"music/suprime4.mp3"
    }
];
//the first song will be by default
songTitle.innerHTML=songs[count]. song_tile;
artistName.innerHTML=songs[count].artist_name;
albumTitle.innerHTML=songs[count].album_title;
player.setAttribute("src",songs[count].url);
//EventListenters for our music libary
play.addEventListener("click",onPlay);
next.addEventListener("click",onNext);
prev.addEventListener("click",onPrev);
player.addEventListener("ended",onNext);
//functions for Event Listeners
function onPlay(){
    const isPlaying=musicContainer.classList.contains("is-playing");
    if(isPlaying){
        pauseSong();
        music_disk.style.left="0";
    }else{
        playSong();
        music_disk.style.left="50%";
    }
}
//function for playing song
function playSong(){
    musicContainer.classList.add("is-playing");
    play.querySelector("i.fa").classList.remove("fa-play");
    play.querySelector("i.fa").classList.add("fa-pause");

    //call the html5 play song method
    player.play();

}
function pauseSong(){
    musicContainer.classList.remove("is-playing");
    play.querySelector("i.fa").classList.add("fa-play");
    play.querySelector("i.fa").classList.remove("fa-pause");

    //call the html5 pause song method
    player.pause();
}
//Move on to the next song
function onNext(){
    if(count + 1 <songs.length){
        count++;
        //change music properties to current music properties
        songTitle.innerHTML=songs[count]. song_tile;
        artistName.innerHTML=songs[count].artist_name;
        albumTitle.innerHTML=songs[count].album_title;
        player.setAttribute("src",songs[count].url);
    }else{
        count=0;
        //change music properties to current music properties
        songTitle.innerHTML=songs[count]. song_tile;
        artistName.innerHTML=songs[count].artist_name;
        albumTitle.innerHTML=songs[count].album_title;
        player.setAttribute("src",songs[count].url);
    }
     //call the html5 pause song method
    playSong();
    music_disk.style.left="50%";

}
//Move on to the prevous song
function onPrev(){
    if(count - 1 <0){
        count =2;
        //change music properties to current music properties
        songTitle.innerHTML=songs[count]. song_tile;
        artistName.innerHTML=songs[count].artist_name;
        albumTitle.innerHTML=songs[count].album_title;
        player.setAttribute("src",songs[count].url);
    }else{
        count--;
        //change music properties to current music properties
        songTitle.innerHTML=songs[count]. song_tile;
        artistName.innerHTML=songs[count].artist_name;
        albumTitle.innerHTML=songs[count].album_title;
        player.setAttribute("src",songs[count].url);
    }
    playSong();
    music_disk.style.left="50%";
}