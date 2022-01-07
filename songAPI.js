let audioElement=new Audio('songs/2.mp3')// audioElement vaneko jun ma select garyo tei hunxa



let masterPlay=document.querySelector('#masterPlay')

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
// audioElement.play();