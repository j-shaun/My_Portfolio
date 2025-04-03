import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import sasw from "./assets/sasw.jpg";
import starliving from "./assets/starliving.jpg";
import cpg from "./assets/cpg.jpg";
import hammernwrench from "./assets/hammernwrench.jpg";
import waisg from "./assets/waisg.jpg";

gsap.registerPlugin(ScrollTrigger);

function Portfolio (){
  useGSAP(() => {
     let timeln = gsap.timeline({
      scrollTrigger:{
          trigger: ".cards",
          pin: true,
          pinSpacing: true,
          start: "left-=120px left",
          end: "+=2550",
          scrub: 1,
          markers: true
      }
    });

    timeln.addLabel("card1");
    timeln.to(".card-1", {
      xPercent: 0,
      opacity: 1
    });

// Card 1 to Card 2
    timeln.from(".card-2", {
      xPercent: 75,
      opacity: 0
    });
    timeln.addLabel("card2");

    timeln.to(".card-1", {
      scale: 0.95,
      xPercent: 0.5,
      opacity: 0.2
    }, "-=0.3");
    
    timeln.to(".card-2", {
      xPercent: 0,
      opacity: 1
    });

// Card 2 to Card 3  
    timeln.from(".card-3", {
      xPercent: 75,
      opacity: 0
    });
    timeln.addLabel("card3");
 
    timeln.to(".card-2", {
      scale: 0.98,
      xPercent: 0.4,
      opacity: 0.2
    }, "-=0.3");
    
    timeln.to(".card-3", {
      xPercent: 0,
      opacity: 1
    });

// Card 3 to Card 4
    timeln.from(".card-4", {
      xPercent: 75,
      opacity: 0
    });
    timeln.addLabel("card4");
 
    timeln.to(".card-3", {
      scale: 1.01,
      xPercent: 0.3,
      opacity: 0.2
    }, "-=0.3");
    
    timeln.to(".card-4", {
      xPercent: 0,
      opacity: 1
    });

// Card 4 to Card 5
timeln.from(".card-5", {
  xPercent: 75,
  opacity: 0
});
timeln.addLabel("card5");

timeln.to(".card-4", {
  scale: 1.04,
  xPercent: 0.2,
  opacity: 0.2
}, "-=0.3");

timeln.to(".card-5", {
  xPercent: 0,
  opacity: 1
});
  });


  return (
      <div className="cards-container flex justify-center mb-24">
          <div className="cards relative h-[70vh] justify-center items-center flex m-auto">
              <div className="card card-1 absolute h-[65vh] justify-center items-center flex flex-col text-[#eb7e4d] w-60 object-center bg-[transparent] max-w-md -translate-x-24 -translate-y-24">
              <img src={sasw} className="mx-auto"></img>
              <span className="text-8xl pb-2">01</span>
              <p className="text-6xl">SASW</p>
              </div>
              
              <div className="card card-2 absolute h-[65vh] justify-center items-center flex flex-col text-[#eb7e4d] w-60 object-center bg-[transparent] max-w-md -translate-x-12 -translate-y-12">
              <img src={starliving} className="mx-auto"></img>
              <span className="text-8xl pb-2">02</span>
              <p className="text-6xl">Star Living</p>
              </div>

              <div className="card card-3 absolute h-[65vh] justify-center items-center flex flex-col text-[#eb7e4d] w-60 object-center bg-[transparent] max-w-md">
              <img src={cpg} className="mx-auto"></img>
              <span className="text-8xl pb-2">03</span>
              <p className="text-6xl">CPG</p>
              </div>

              <div className="card card-4 absolute h-[65vh] justify-center items-center flex flex-col text-[#eb7e4d] w-60 object-center bg-[transparent] max-w-md translate-x-12 translate-y-12">
              <img src={hammernwrench} className="mx-auto"></img>
              <span className="text-8xl pb-2">04</span>
              <p className="text-6xl">Hammer & Wrench</p>
              </div>

              <div className="card card-5 absolute h-[65vh] justify-center items-center flex flex-col text-[#eb7e4d] w-60 object-center bg-[transparent] max-w-md translate-x-24 translate-y-24">
              <img src={waisg} className="mx-auto"></img>
              <span className="text-8xl pb-2">05</span>
              <p className="text-6xl">WAI SG</p>
              </div>
          </div>
      </div>
  )
}

export default Portfolio;