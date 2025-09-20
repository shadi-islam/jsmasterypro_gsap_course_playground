import gsap from 'gsap';

let scrollbtn = document.querySelector('.scroll-to-top');

let floatflag = false;

window.addEventListener('scroll', () => {
    if(window.scrollY >500){
        scrollbtn.classList.add('show');    
        if(!floatflag){
            gsap.to(scrollbtn, {
                y: -10,
                duration: 1.5,
                ease: 'sine.Out',
                repeat: -1,
                yoyo: true,
            });
            floatflag = true;
        }
    }
    else scrollbtn.classList.remove('show');
});

scrollbtn.addEventListener('mouseenter', () => {
    gsap.to(scrollbtn, {
        scale: 1.1,
        duration: 0.3,
    });
});

scrollbtn.addEventListener('mouseleave', () => {
    gsap.to(scrollbtn, {
        scale: 1,
        duration: 0.3,
    });
});

scrollbtn.addEventListener('click', () => {
    scrollTo(0,0);
});