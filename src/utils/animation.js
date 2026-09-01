import gsap from "gsap";


export const heroAnimation = ()=>{


gsap.from(
".hero-content",
{

opacity:0,

y:80,

duration:1.2,

ease:"power3.out"


}
);



gsap.from(
".hero-visual",
{

opacity:0,

scale:.5,

duration:1.3,

ease:"back.out"


}
);


}
