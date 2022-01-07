// simply hides/unhides the pause/play button when cursor is moved around it
 

const imgs=document.querySelector('.imgs');
const pausePlay=document.querySelector('.underImg');
pausePlay.style.display='none';

imgs.addEventListener('mouseover',(target)=>{
    pausePlay.style.display='block'
    // console.log(target)
})
imgs.addEventListener('mouseleave',(target)=>{
    pausePlay.style.display='none'
    // console.log(target)
})
