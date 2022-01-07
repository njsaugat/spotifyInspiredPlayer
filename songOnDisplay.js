// basically every song was supposed to have a unique id so that they can be targetted 
const playList=document.querySelector('.playlist');
for(let i=0;i<playList.childElementCount;i++){
    let songId='#mySong'+String(i)
    let differentSong=document.querySelector(songId)
    differentSong.addEventListener('click',()=>{
        // const songName=songSelected.text
        // songName.innerText='';
        // const songSelected=document.querySelector('.songTitle');
        const songName=document.querySelector('.songName');
        songName.innerText=differentSong.innerText;
    })
}