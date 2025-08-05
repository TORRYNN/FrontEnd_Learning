var t1=gsap.timeline();

t1.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:.4,
    duration:.8,
    stagger:.4
})
t1.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1,
    stagger:.8
})
t1.from("#main h1",{
    x:-400,
    opacity:0,
    delay:.4,
    duration:.8,
    stagger:.4
})

t1.from("#footer li",{
    y:1000,
    opacity:0,
    delay:.4,
    duration:.8,
    stagger:.4

})