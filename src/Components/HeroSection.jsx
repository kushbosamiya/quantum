import React, { useRef, useEffect, useState } from "react";
// import "./App.css";

import { supabase } from "../supabaseClient";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [imageUrl, setImageUrl] = useState([]);
  const [Fetcherrors, setFetcherrors] = useState(null);

  // const imageRefs = React.useRef([]);
  const imageElement = useRef(null);

  let GearSequence = [];

  async function currentFrame() {
    // for (let index = 1; index <= 83; index++) {
    // let path = `px-${index.toString().padStart(4, "0")}.webp`;
    const { data, error } = await supabase.storage
      .from("images")
      .getPublicUrl(`0001.mp4`);

    if (error) {
      setFetcherrors(`Could not fetch the api`);
      setImageUrl(null);
      console.log(error);
    }
    if (data) {
      let { publicUrl } = data;
      GearSequence.push(publicUrl);
      setImageUrl([...GearSequence]);
    }
    // }
    // }
  }

  useEffect(() => {
    // Use the gsap.to method to create the animation

    const images = imageElement.current;

    let Controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      duration: 6000,
      triggerElement: images,
      triggerHook: 0,
    })
      // .addIndicators()
      .addTo(Controller)
      .setPin(images);

    // video animations
    let accelerator = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", (e) => {
      scrollpos = e.scrollPos / 1000;
    });
    setInterval(() => {
      let video = document.querySelector("video");
      delay += (scrollpos - delay) * accelerator;
      video.currentTime = delay;
    }, 33.33);

    currentFrame();
  }, []);

  return (
    <>
      <div className="parent">
        <div className="first-child">
          <div className="second-child">
            <div className="third-child">
              {imageUrl.map((video, index) => {
                // console.log(video);
                return (
                  <div key={index}>
                    <video
                      // className="transition fading"
                      ref={imageElement}
                      src={video}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
