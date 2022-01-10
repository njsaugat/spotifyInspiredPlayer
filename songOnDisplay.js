// // basically every song was supposed to have a unique id so that they can be targetted 
// // but i will try and integrate this with the other javascript file that i have songAPI.js wala
// const playList=document.querySelector('.playlist');
// for(let i=1;i<playList.childElementCount;i++){

//     let path=`/songs/${String(i)}.mp3`
//     let audioElement=new Audio(path)

//     let songId='#mySong'+String(i)
//     let differentSong=document.querySelector(songId)

//     differentSong.addEventListener('click',()=>{
//         const songName=songSelected.text
//         songName.innerText='';
//         const songSelected=document.querySelector('.songTitle');
//         const songName=document.querySelector('.songName');
//         songName.innerText=differentSong.innerText;
//         if(audioElement.paused || audioElement.currentTime<=0){
//             audioElement.play();
//         }
//     })
// }