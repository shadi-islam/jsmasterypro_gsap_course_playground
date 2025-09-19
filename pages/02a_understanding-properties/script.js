import gsap from "gsap";

gsap.to('.box', {
    opacity: 1,
    scale: 1,
    borderRadius: '50%',
    duration: 2,
    yoyo: true,
    rotate: 360,
    ease: "power1.inOut",
    onComplete: ()=>{
        gsap.to('.box', {
            boxShadow: "0px 0px 30px rgba(20, 148, 203, 0.5)",
            repeat: -1,
            duration: 1,
            yoyo: true,

        });
    }
});