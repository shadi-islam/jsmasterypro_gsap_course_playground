import gsap from 'gsap';

let animation = gsap.to('.box',{
                opacity: 1,
                duration: 2,
                borderRadius: '50%',
                rotate: 360,
                scale: 1.25,
            })
let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let reverseBtn = document.querySelector('.reverse');
let restartBtn = document.querySelector('.restart');
let resumeBtn = document.querySelector('.resume');
let killBtn = document.querySelector('.kill');
let yoyoBtn = document.querySelector('.yoyo');
let repeatBtn = document.querySelector('.repeat');

playBtn.addEventListener('click',()=>{
    animation.play();
})
pauseBtn.addEventListener('click',()=>{
    animation.pause();
})
reverseBtn.addEventListener('click',()=>{
    animation.reverse();
})
restartBtn.addEventListener('click',()=>{
    animation.restart();
})
resumeBtn.addEventListener('click',()=>{
    animation.resume();
})
killBtn.addEventListener('click',()=>{
    animation.kill();
}) 
yoyoBtn.addEventListener('click',()=>{
    animation.yoyo(true);
})
repeatBtn.addEventListener('click',()=>{
    animation.repeat(2);
})  