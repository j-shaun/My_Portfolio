import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SunMoon() {

useGSAP(() => {

    gsap.to(".sun-moon",{
        scrollTrigger: {
          trigger: ".bg-change-bk",
          markers: true,
          start: "top",
          end: "bottom bottom-=100px",
          scrub: 1,
        },
        ease: "power1",
        backgroundColor: "#f7ea92",
        duration: 200
      });

});


return(
        <div className='sun-moon max-w-[600px] fixed aspect-square w-full bg-[#eb7e4d] -z-10'></div>
)

};

