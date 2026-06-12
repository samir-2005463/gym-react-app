import { useState, useEffect } from "react";

import men2 from "../assets/men2.png";
import gym2 from "../assets/gym2.png";
import men1 from "../assets/men1.png";

function Hero() {
  const images = [men2, gym2, men1];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.6),
          rgba(0,0,0,0.6)
        ), url(${images[currentImage]})`,
      }}
    >
      <div>
        <h1>Transform Your Body Today</h1>
        <p>Build strength, confidence and fitness.</p>
       <button onClick={() => alert("Thank you for joining FitZone Gym!")}>
  Join Now
</button>
      </div>
    </section>
  );
}

export default Hero;