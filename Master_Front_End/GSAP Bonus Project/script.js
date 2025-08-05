// var firsth1=document.querySelector("#first").textContent;

// var splittedText=firsth1.split("");

// console.log(splittedText);

// var clutter="";

// splittedText.forEach(element => {
//     clutter+=`<span>${element}</span>`;
// });

// console.log(clutter);

// document.querySelector("#first").innerHTML=clutter;

// console.log(firsth1);



function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function textsplitting() {
	// 1. Selecting all the h1 tag from page2
	var allH1 = document.querySelectorAll("#page2 h1");

	// 2. Iterating each h1 using forEach loop
	allH1.forEach((element) => {
		// Variable to store splitted text
		var clutter = "";

		// Extracting the textcontent from h1
		var h1text = element.textContent;

		// Splitting the text in characters
		var splittedText = h1text.split("");

		// Storing the splitted text in clutter enlcosing it in span tag
		splittedText.forEach((elem) => {
			clutter += `<span>${elem}</span>`;
		});

		// Changing the value of h1 from word to chars
		element.innerHTML = clutter;
	});
}

// GSAP Animation

function gsapAnimation(){
gsap.to("#page2 h1 span", {
	color: "#e3e3c4",
	stagger: 1,
	scrollTrigger: {
		trigger: "#page2 h1",
		scroller: "body",
		markers: true,
		start: "top 90%",
		end: "top 0%",
		scrub: 5,
	},
});}


textsplitting();
gsapAnimation();
locoscroll();