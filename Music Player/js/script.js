const wrapper=document.querySelector(".wrapper"),
songImg=wrapper.querySelector(".img-area img"),
songName=wrapper.querySelector(".song-details .name"),
musicArtist=wrapper.querySelector(".song-details .artist"),
mainAudio=wrapper.querySelector("#main-audio"),
pauseplatBtn=wrapper.querySelector(".play-pause"),
prevBtn=wrapper.querySelector("#prev"),
nextBtn=wrapper.querySelector("#next"),
progressBar=wrapper.querySelector(".progress-bar");

let musicIndex=2;

window.addEventListener("load",()=>{
    loadMusic(musicIndex);
})


function loadMusic(indexNumb){
    songName.innerText=allMusic[indexNumb-1].name;
    musicArtist.innerText=allMusic[indexNumb-1].artist;
    songImg.src=`images/${allMusic[indexNumb-1].img}.jpg`;
    mainAudio.src=`songs/${allMusic[indexNumb-1].src}.mp3`;
}
function playMusic(){
    wrapper.classList.add("paused");
    pauseplatBtn.querySelector("i").innerText="pause";
    mainAudio.play();
}
function pauseMusic(){
    wrapper.classList.remove("paused");
    pauseplatBtn.querySelector("i").innerText="play_arrow";
    mainAudio.pause();

}
function nextMusic(){
    musicIndex++;
    musicIndex>allMusic.length ? musicIndex=1 : musicIndex =musicIndex;

    loadMusic(musicIndex);
    playMusic();
}
function preMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex=allMusic.length : musicIndex = musicIndex;

    loadMusic(musicIndex);
    playMusic();
}

pauseplatBtn.addEventListener("click",()=>{
    const isMusicPaused=wrapper.classList.contains("paused");
    isMusicPaused ? pauseMusic():playMusic();
})
nextBtn.addEventListener("click",()=>{
    nextMusic();
})
prevBtn.addEventListener("click",()=>{
    preMusic();
})
mainAudio.addEventListener("timeupdate",(e)=>{
    const currentTime=e.target.currentTime;
    const duration=e.target.duration;
    let progressWidth=(currentTime/duration) * 100;
    progressBar.style.width=`${progressWidth}%`;
    let musicCurrentTime=wrapper.querySelector(".current-time"),
    musicDuration=wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata",()=>{

        let audioDuration=mainAudio.duration;
        let totalMin=Math.floor(audioDuration/60);
        let totalSec=Math.floor(audioDuration%60);
        if(totalSec<10){
            totalSec=`0${totalSec}`
        }
        musicDuration.innerText=`${totalMin}:${totalSec}`;
       
    })
    let currMin=Math.floor(currentTime/60);
    let currSec=Math.floor(currentTime%60);
    if(currSec<10){
        totalSec=`0${totalSec}`
    }
    musicCurrentTime.innerText=`${currMin}:${currSec}`;
})
