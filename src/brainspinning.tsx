import {useRef, useEffect} from "react";
import {gsap} from "gsap";


const BrainSpinning: React.FC = () => {
    const brainRef = useRef<HTMLImageElement | null>(null);
    
    useEffect(() => {
        if (brainRef.current) {
          gsap.to(brainRef.current, {
            rotationY: 360,
            duration: 2, // Time to complete one rotation
            repeat: -1, // Infinite looping
            ease: "linear", // Consistent speed
            transformOrigin: "50% 50%", // Center the spin
          });
        }
      }, []);

    return (
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#fff", // Optional background color
      }}
    > <img
    ref={brainRef}
    src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Human_Brain_Sketch.svg"
    alt="Spinning Brain"
    style={{ width: "200px", height: "200px" }}
  />
    </div>
    );
};

export default BrainSpinning;