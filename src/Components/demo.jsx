// slider na btn thai gya --done
// on scroll thi next or previous thvu joiye --done
// bullets ne design krva nichhe -done
// certain time pchhi slide change thvi joiye --done

//Design in India
//curated  by QEV studio

{
  /* <Stack
  display={["flex"]}
  flexDir={"row"}
  alignItems={"center"}
  justifyContent={["space-between"]}
  my={[".25rem", ".5rem", ".75rem"]}
>
  <Performace_Section_Headline />
  <HStack spacing={"1rem"} display={["none", "flex"]}>
    <BtnSlider moveSlide={prevSlide} direction={prevSlide ? "next" : "prev"} />
    <BtnSlider moveSlide={nextSlide} direction={"prev"} />
  </HStack>
</Stack>; */
}

import React, { useRef, useEffect } from "react";

import gsap from "gsap";

import "./Custom-Styles/herosection.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const videoElement = useRef(null);

  useEffect(() => {
    const video = videoElement.current;

    // Set up ScrollMagic controller and scene
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      duration: video.duration,
      triggerElement: video,
      triggerHook: 0,
      markers: true,
    })
      .setPin(video)
      .addTo(controller);

    // Set up zoom animation
    gsap.to(video, {
      duration: 1,
      scale: 1.05,
      ease: "none",
    });

    // Update video current time based on scroll position
    let scrollpos = 0;
    let delay = 0;
    let accelerator = 0.1;
    scene.on("update", (e) => {
      scrollpos = e.scrollPos / 1000;
    });
    setInterval(() => {
      delay += (scrollpos - delay) * accelerator;
      video.currentTime = delay;
    }, 33.33);

    ScrollTrigger.create({
      // animation: tl01,
      trigger: video,
      pin: video,
      scrub: 1,
      start: "top top",
      end: "+=200%",
      markers: true,
      onLeave: (self) => {
        let start = self.start;
        self.scroll(self.start);
        self.disable();
        self.animation.progress(1);
        ScrollTrigger.refresh();
        window.scrollTo(0, start);
      },
    });
  }, []);

  return (
    <div class="super-parent">
      <div class="video-area">
        <div id="parent">
          <video ref={videoElement} width="950" height="534" id="animContainer">
            <source
              src="https://pjswhwmbjralgwyejndl.supabase.co/storage/v1/object/public/images/0001.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
