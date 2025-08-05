
var t1=gsap.timeline();




t1.to("#box1",{
    x:600,
    duration:1,
    scale:.2,
    rotate:360,
    backgroundColor:"royalblue"
})
t1.to("#box2",{
    x:600,
    duration:2, 
    scale:.3,
    rotate:360,
    backgroundColor:"lightseagreen"
})
t1.to("#box3",{
    x:600,
    duration:3,
    scale:.4,
    rotate:360,
    backgroundColor:"red"
})