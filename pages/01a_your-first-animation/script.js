gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 4,
    
    onComplete: ()=>{
        gsap.to('.card', {
            y: -20,
            repeat: -1,
            duration: 1,
            yoyo: true,
    });
    gsap.to('.card', {
        boxShadow: "0px 0px 30px rgba(20, 148, 203, 0.5)",
        repeat: -1,
        duration: 1,
        yoyo: true,
    })
}    
});