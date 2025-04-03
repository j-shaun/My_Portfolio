export default function Header() {

  const revealtxt = ".revealTxt";

 const showScrambleText = () =>{
        gsap.fromTo(".revealTxt",{opacity: 0}, {opacity: 1, duration: 0.1});
        gsap.to(revealtxt,{
          duration: 2,
          scrambleText: {
            text: "For Shawn",
            chars: "011000111",
            revealDelay: 0.5
          }
        });
      };
    
    const hideScrambleText = () => {
      gsap.fromTo(".revealTxt",{opacity: 1}, {opacity: 0, duration: 0.5, scrub: 1,});
    };
    
  return(
    <div>
        <header className="pt-14 flex items-start dark:text-white dark:bg-gray-900 logo-txt" onMouseEnter={showScrambleText} onMouseOut={hideScrambleText}>
            <div className="justify-start text-7xl">
                    <h1 className="text-7xl">S<span className="revealTxt pl-5"></span></h1></div>
                <style>
                    {
                        "\
                        .animate-speed{\
                        animation-duration:20s;\
                        }\
                    "
                    }
                </style>
        </header>
    </div>
  )
}
