import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import gsap from "gsap";

// import "./Custom-Styles/herosection.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const videoElement = useRef(null);

  useEffect(() => {
    const video = document.querySelector(".video-background");
    const videos = document.querySelector("video");

    let src = video.currentSrc || video.src;
    console.log(video, src);

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
    });

    /* ---------------------------------- */
    /* Scroll Control! */

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: "#container",
        toggleActions: "restart pause resume pause",
        start: "-250px top",
        // start:"-10% top",
        // start: () => "+=" + videos.offsetHeight,
        // end: "+=300px",
        end: () => "+=" + videos.offsetWidth,
        // markers: "true",
        // pin: true,
        ease: "Power2.easein",
        scrub: true,
      },
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        {
          currentTime: 0,
        },
        {
          currentTime: video.duration || 1,
        }
      );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
      if (window["fetch"]) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            var blobURL = URL.createObjectURL(response);

            var t = video.currentTime;
            once(document.documentElement, "touchstart", function (e) {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.01;
          });
      }
    }, 1000);
  }, []);

  return (
    // <div className="super-parent">
    //   <div className="video-area">
    //     <div id="parent">
    //       <video ref={videoElement} width="950" height="534" id="animContainer">
    //         <source
    //           src="https://pjswhwmbjralgwyejndl.supabase.co/storage/v1/object/public/images/0001.mp4"
    //           type="video/mp4"
    //         />
    //       </video>
    //     </div>
    //   </div>
    // </div>
    <span>
      <div className="video-area">
        <div className="parent">
          <Box
            display={"flex"}
            justifyContent={"center"}
            boxSize={["100%", "60%"]}
            pos={["unset", "relative"]}
            left={"20%"}
          >
            <video
              src="https://pjswhwmbjralgwyejndl.supabase.co/storage/v1/object/public/images/0001.mp4"
              type="video/mp4"
              playsInline={true}
              // webkit-playsinline="true"
              // preload="auto"
              // muted="muted"
              className="video-background"
            ></video>
          </Box>
        </div>
      </div>
      <div id="container"></div>
    </span>
  );
}

export default HeroSection;
