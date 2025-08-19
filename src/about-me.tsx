import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {

useGSAP(() => {

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".aboutme-container",
            start: "top-=200 top",
            end: 'bottom',     
            scrub: 1,
            pin: true
        }
    });

    tl
    .from('.aboutme-container', {opacity: 0})
    .to('.aboutme-container', {opacity: 1});

});


return(
        <div className="w-full h-screen items-center flex flex-col aboutme-container opacity-0">
               <div className='justify-center flex-wrap text-[#eb7e4d] text-2xl max-w-[800px] w-[100%] mx-auto aboutme-section'>
                <p className="mb-10 aboutme-txt">
                    Corporate and Freelance Web Developer with 7 years of hands-on experience, building high quality website with solid front-end design sense, and project management skills to match. I’ve built fully customized HTML, WordPress and E-commerce sites for big names like SASW, CPG Consultants, and Star Living, have it FUN and DONE!
                </p>
                <p className="aboutme-txt">
                    I thrive on pushing boundaries—striving to break through my limits and take on new challenges. Whether flying solo or jamming with a team, I stay flexible, open to new tech, and ready to adapt to any work culture thrown my way.
                </p>
                </div>


            <div className="text-4xl items-center flex-wrap flex flex-col mt-40">
                 Portfolio
                <svg className="arrow-down rotate-90 md:w-[100px] w-[70px]" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#eb7e4d" stroke="none">
                <path d="M1500 2400 l0 -150 150 0 150 0 0 -150 0 -150 150 0 150 0 0 -150 0 -150 -900 0 -900 0 0 -150 0 -150 900 0 900 0 0 -150 0 -150 -150 0 -150 0 0 -150 0 -150 -150 0 -150 0 0 -150 0 -150 150 0 150 0 0 150 0 150 150 0 150 0 0 150 0 150 150 0 150 0 0 150 0 150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 150 0 150 -150 0 -150 0 0 150 0 150 -150 0 -150 0 0 150 0 150 -150 0 -150 0 0 -150z"/>
                </g>
                </svg>
            
            </div> 
        </div>
        
)

};
