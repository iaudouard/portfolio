import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {};

export const Hero = (props: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1.5 },
    });
    tl.to("h1", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    });
  }, []);
  return (
    <section className="flex h-screen w-screen items-center px-6 home">
      <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl init-title title-gradient">
        <span className="title-span">Ivan</span>
        <br />
        <span className="title-span">Audouard</span>
      </h1>
    </section>
  );
};
