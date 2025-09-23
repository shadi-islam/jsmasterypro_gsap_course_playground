import gsap from 'gsap';

let tabs = document.querySelectorAll('.tab');
let indicator = document.querySelector('.indicator');
let tabrow = document.querySelector('.tab-row');

let updateIndicator = (target) => {
    let tabbounds = target.getBoundingClientRect();
    let rowbounds = tabrow.getBoundingClientRect();

    let width = tabbounds.width;
    let offset = tabbounds.left - rowbounds.left;

    gsap.to(indicator, {
        x: offset,
        width: width,
        ease: 'back.out(1.7)',
        duration: 0.5
    });
}
   
tabs.forEach((tab)=>{
    tab.addEventListener('click', ()=> {
        tabs.forEach((t)=> {
            t.classList.remove('active');
        })
        tab.classList.add('active');
        updateIndicator(tab);
    }
    )
})
updateIndicator(document.querySelector('.tab.active'));