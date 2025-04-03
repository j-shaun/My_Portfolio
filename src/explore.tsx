import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExploreMore(){

    return(
        <div className="text-center h-screen flex flex-col justify-center items-center">
            <h2 className="sm:text-4xl md:text-5xl lg:text-7xl font-pixel bg-gradient-to-r bg-clip-text text-5xl selection:bg-transparent] pb-10">Wanna Know More? <br/>Click on the button below!</h2>
            <button className="mt-2 p-2 float-right text-white border-[#eb7e4d] bg-[#eb7e4d] px-11 py-5 text-3xl hover:bg-white hover:text-[#eb7e4d]">Contact Us</button>
        </div>
    );

};