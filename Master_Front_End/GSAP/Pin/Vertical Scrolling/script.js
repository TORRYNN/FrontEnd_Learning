gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        marker:true,
        start:"top 0",
        end:"top -120%",
        scrub:1,
        pin:true
    }
})