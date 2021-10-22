console.log("welcome to spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/another.mp3');
let masterPlayButton = document.getElementById("masterPlayButton");
let bar = document.getElementById("bar");
let gif = document.getElementById("gif");
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem')) ;

let songs = [
{ songName: "another", filePath: "songs/another.mp3" },
{ songName: "more", filePath: "songs/more.mp3" },
{ songName: "YEAH", filePath: "songs/YEAH-U~1.MP3" },
{ songName: "Cris Cab- Liar", filePath: "songs/Cris_Cab_ft_Pharell_Williams-Liar_Liar.mp3" },
{ songName: "one dance instrumental", filePath: "songs/Drake Ft. Wizkid And Kyla - One Dance Instrumental (mp3goo.com).mp3" },
{ songName: "John Newman-Love Me Again", filePath: "songs/John_Newman_-_Love_Me_Again ListenVid.com.mp3" },
{ songName: "Sam Smith-How Do You Sleep", filePath: "songs/Sam_Smith_-_How_Do_You_Sleep_Official_Video ListenVid.com.mp3" },
{ songName: "Taio Cruz - Dynamite", filePath: "songs/Taio Cruz - Dynamite (DriveMusic.me).mp3" },
{ songName: "TI - Whatever you like", filePath: "songs/TI - Whatever you like my-free-mp3s.com .mp3" },
{ songName: "Tungevaag_Raaban_-_Bad_Boy", filePath: "songs/Tungevaag_Raaban_-_Bad_Boy_Official_Video ListenVid.com .mp3" },
]
//audioElement.play();
//play/pause click
masterPlayButton.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlayButton.classList.remove('fa-play-circle');
        masterPlayButton.classList.add('fa-pause-circle');
        gif.style.opacity = 0.5;
    } 
    else {
        audioElement.pause();
        masterPlayButton.classList.remove('fa-pause-circle');
        masterPlayButton.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    })
// time updater
audioElement.addEventListener('timeupdate', () => {

    //progress bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    bar.value = progress
});
bar.addEventListener('change', () => {
    audioElement.currentTime = bar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/TI - Whatever you like my-free-mp3s.com .mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 0.5;
        masterPlayButton.classList.remove('fa-play-circle');
        masterPlayButton.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src='songs/Drake Ft. Wizkid And Kyla - One Dance Instrumental (mp3goo.com).mp3';
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0.5;
    masterPlayButton.classList.remove('fa-play-circle');
    masterPlayButton.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>=0){
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src='songs/YEAH-U~1.MP3';
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 0.5;
    masterPlayButton.classList.remove('fa-play-circle');
    masterPlayButton.classList.add('fa-pause-circle');
})