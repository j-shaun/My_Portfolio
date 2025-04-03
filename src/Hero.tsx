import { gsap } from "gsap";
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar from './assets/stickman.png';

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

export default function Hero() {

const [isDarkMode, setIsDarkMode] = useState(false);
  
const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
    const root = document.documentElement;
    if(!isDarkMode) {
      root.classList.add("dark");
    } else{
      root.classList.remove("dark");
    }
  };

useGSAP(() => {
   gsap.to("body",{
    scrollTrigger: {
      trigger: ".bg-change-bk",
      markers: true,
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
      markers: true,
      start: "top",
      end: "bottom bottom-=100px",
      scrub: 1,
    },
    ease: "power1",
    backgroundColor: "#f7ea92",
    duration: 200
  });

  const root = document.documentElement;
   if (isDarkMode){
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
   }else{
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
   }

}, [isDarkMode]);

  return(
    <div className="text-center selection:bg-green-900 dark:bg-gray-900 mb-60">

            <img src={avatar} className="mx-auto my-8 w-1/2 bg-change-bk" alt="profile pic of a man" />
        
            <p className="sm:text-4xl md:text-5xl lg:text-7xl font-pixel bg-gradient-to-r bg-clip-text text-5xl selection:bg-transparent]">
            Shawn is a <span className="my-role">Web Magician</span>
            </p>

            <button
            onClick={toggleDarkMode}
            className="darkmode-btn px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>  
    </div>
  )
}