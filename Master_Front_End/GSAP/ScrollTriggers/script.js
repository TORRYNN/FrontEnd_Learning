
 gsap.from("#page1 #circle",{
    scale:0,
    duration:2,
    rotate:720
 })
 gsap.from("#page2 #circle",
    {
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3
    }
 })
 gsap.from("#page3 #circle",
    {
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:"#page3 #circle"

 })