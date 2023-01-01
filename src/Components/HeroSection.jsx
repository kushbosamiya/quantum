import React, { useRef, useEffect } from "react";

import gsap from "gsap";

import "./Custom-Styles/herosection.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const videoElement = useRef(null);

  useEffect(() => {
    const video = videoElement.current;

    // Set up ScrollMagic controller and scene
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      duration: video.duration,
      triggerElement: video,
      triggerHook: 0,
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
  }, []);

  return (
    <div id="parent">
      <video ref={videoElement} width="950" height="534" id="animContainer">
        <source
          src="https://pjswhwmbjralgwyejndl.supabase.co/storage/v1/object/public/images/0001.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default App;
