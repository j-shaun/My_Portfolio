import { gsap } from "gsap";
// import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar from './assets/stickman.png';


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

// const [isDarkMode, setIsDarkMode] = useState(false);
  
// const toggleDarkMode = () => {
//     setIsDarkMode((prev) => !prev)
//     const root = document.documentElement;
//     if(!isDarkMode) {
//       root.classList.add("dark");
//     } else{
//       root.classList.remove("dark");
//     }
//   };

useGSAP(() => {
   gsap.to("body",{
    scrollTrigger: {
      trigger: ".bg-change-bk",
      markers: false,
      start: "top",
      end: "bottom bottom-=100px",
      scrub: 1,
    },
    ease: "power1",
    backgroundColor: "#000",
    color: "#eb7e4d",
    duration: 200
  });

  gsap.to(".sun-moon",{
    scrollTrigger: {
      trigger: ".bg-change-bk",
      markers: false,
      start: "top",
      end: "bottom bottom-=100px",
      scrub: 1,
    },
    ease: "power1",
    backgroundColor: "#f7ea92",
    duration: 200
  });

  // const root = document.documentElement;
  //  if (isDarkMode){
  //     root.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //  }else{
  //     root.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //  }

}/* , [isDarkMode] */);

  return(
    <div className="text-center selection:bg-green-900 dark:bg-gray-900 mb-60">

            <img src={avatar} className="mx-auto my-8 xl:w-1/2 bg-change-bk" alt="profile pic of a man" />
        
            <p className="sm:text-4xl md:text-5xl lg:text-7xl font-pixel bg-gradient-to-r bg-clip-text text-5xl selection:bg-transparent]">
            Shawn is a <span className="my-role">Web Magician</span>
            </p>

         {/* <button
            onClick={toggleDarkMode}
            className="darkmode-btn px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
           >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
         </button>    */}

        <div className="text-4xl items-center flex flex-col mt-40">
          About Me
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
}
