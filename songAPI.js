// audioElement vaneko jun ma select garyo tei hunxa
// jun id ma thichyo tei song element play

const playlist1=document.querySelector('.playlist');

for(let i=1;i<=playlist1.childElementCount;i++){
    let path=`/songs/${String(i)}.mp3`
    let audioElement=new Audio(path)
    // console.log(path)
    // i target each song out there in the playlist1 and once that is clicked along with like displaying of name
    // also the song has to play
    
    let playButton=document.querySelector('#playButton')

    let songId='#mySong'+String(i)    
    const songSelected1=document.querySelector(songId)
    
    songSelected1.addEventListener('click',()=>{
        const songName=document.querySelector('.songName');
        songName.innerText=songSelected1.innerText;
        // if(audioElement.paused || audioElement.currentTime<=0){
        //     audioElement.play();
        // }
        // playButton.addEventListener('click',()=>{
        //     audioElement.pause()
        // })

    })
    playButton.addEventListener('click',()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            playButton.classList.remove("fa-play-circle")
            playButton.classList.add("fa-pause-circle")
        }
        else{
            audioElement.pause();
            playButton.classList.remove("fa-pause-circle")
            playButton.classList.add("fa-play-circle")
        }
    })

    
    let controlBar=document.querySelector('#controlBar');
    audioElement.addEventListener('timeupdate',()=>{

        let progress=parseInt(((audioElement.currentTime)/(audioElement.duration))*100);
        controlBar.value=progress;// so this is working as a percentage
    })

    controlBar.addEventListener('change',()=>{
        // let progress=parseInt(((audioElement.currentTime)/(audioElement.duration))*100);
        audioElement.currentTime=parseInt(((controlBar.value)*(audioElement.duration))/100)
    })
}

// with const all over the place dont use a same name variable more or 
// it will through the error
// if the variable is thought to be already declared then better create one

// ig because of this reason in frontend we didn't need let const






// so like which button i press on that playlist, on that basis the song should play

// const audioElement=new Audio('/songs/1.mp3');
// const previous=document.querySelector('#previous');

// previous.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//     }
// })

// const audioElement1=new Audio('/songs/2.mp3');
// const playButton=document.querySelector('#playButton');

// playButton.addEventListener('click',()=>{
//     if(audioElement1.paused || audioElement1.currentTime<=0){
//         audioElement1.play();
//     }
// })

// const audioElement2=new Audio('/songs/3.mp3');
// const next=document.querySelector('#next');

// next.addEventListener('click',()=>{
//     if(audioElement2.paused || audioElement2.currentTime<=0){
//         audioElement2.play();
//     }
// })



// audioElement.play();
