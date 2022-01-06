const songs=["Bonfire Heart",'Country Roads' , '500 Miles', 'September Ends', "The Scientist", "Cheap Thrills", 'Hey Jude']

/*
<div class='playlist'>
    <div class="eachSong">
        <div class="insideSong">
                    <img src="musicIcon.png"> 
                    <div class="songTitle" id='mySong0'>
                    Country Roads 
                    <div>
                        <div class="insideSongElement">
                            like play icon//<audio controls></audio>
                            <img src='playIcon.png'>
                            song length
                        </div>
        </div>
    </div>
..
..

</div>
*/

// function addSongPlaylist(){

// }
// for making html as shown above:
for(let index=0;index<songs.length;index++){
// songs.forEach((song)=>{
    // let index=0;
    const playList=document.querySelector('.playlist');
    
    const eachSong=document.createElement('div')
    eachSong.classList.add('eachSong');

    // eachSong.setAttribute('id','song'+String(index++))
    // eachSong.id='song'+String(index++);
    eachSong.id='song'+String(index);
    
    // index++;

    const insideSong=document.createElement('div');
    insideSong.classList.add('insideSong')
    
    const img=document.createElement('img');
    img.setAttribute('src','musicIcon.png');

    const songTitle=document.createElement('div')
    songTitle.classList.add('songTitle')
    songTitle.id='mySong'+String(index);
    
    const text=document.createTextNode(songs[index]);
    // const text=document.createTextNode(song);
    
    const iconLength=document.createElement('div');
    iconLength.classList.add('insideSongElement')
    
    const playIcon=document.createElement('img');
    playIcon.src='play.svg';

    const songLength=document.createTextNode('5:34')
    
    const audio=document.createElement('audio');
    // audio.setAttribute('controls',"");
    // audio.controls;
    
    // span.appendChild(audio);
    iconLength.appendChild(songLength);
    // span.appendChild(songLength);//first length than play/pause
    iconLength.appendChild(playIcon);

    songTitle.appendChild(text)

    insideSong.appendChild(img);
    insideSong.appendChild(songTitle);
    insideSong.appendChild(iconLength);
    eachSong.appendChild(insideSong);
    playList.appendChild(eachSong)



// })
}

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



const songSelected=document.querySelector('.songTitle');
const eachSelectedSong=document.querySelector('.eachSong');
const songName=document.querySelector('.songName');

const playList=document.querySelector('.playlist');
// console.log(playList.childElementCount)

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



// pausePlay.style.display='block'
// const songName=document.createElement('div');
// songName.classList.add('songName');


// eachSong.children
// console.log(eachSong[1]);

// console.log(result)


let audioElement=new Audio('2.mp3')


let masterPlay=document.querySelector('#masterPlay')

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
// audioElement.play();