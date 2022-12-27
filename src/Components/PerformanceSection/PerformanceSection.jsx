import React, { useState, useEffect } from "react";

import { Box, Heading, IconButton, Text, Image } from "@chakra-ui/react";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// images
import Ice from "../../Assets/Performance_Assets/final-ice.png";

import Rain from "../../Assets/Performance_Assets/final-rain.png";

import Sand from "../../Assets/Performance_Assets/final-sand.png";

import "../Custom-Styles/PerformanceStyles.css";

// imported pages
import PerformanceQna from "./PerformanceQna";

const PerformanceSection = () => {
  return (
    <>
      <Box>
        <Slider />
      </Box>
    </>
  );
};

const Performace_Section_Headline = () => {
  return (
    <>
      <Heading>
        <Text
          my={[".25rem"]}
          fontWeight={"500"}
          textShadow={"1.728px 1.728px 0px rgb(146 200 62 / 50%)"}
        >
          Eve-rything You Wanted
        </Text>
      </Heading>
    </>
  );
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // data
  const CarouselComponent = [
    {
      image: Ice,
    },
    {
      image: Rain,
    },
    {
      image: Sand,
    },
  ];

  // on swipe function
  const [touchPosition, setTouchPosition] = useState(null);
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < -5) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  // slideshow
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        nextSlide(slideIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  // carousel functions
  const nextSlide = () => {
    if (slideIndex !== CarouselComponent.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === CarouselComponent.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(CarouselComponent.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <Box
      display={"flex"}
      gap={"2rem"}
      paddingX={{ md: "5%" }}
      paddingY={["2%", "1%"]}
    >
      {/* 1ts box */}
      <Box minW={"40%"} maxW={"320px"}>
        <Heading>
          <Text
            my={["0.5rem"]}
            fontWeight={"500"}
            lineHeight={"120%"}
            fontSize={["4xl"]}
            textShadow={"1.728px 1.728px 0px rgba(146, 200, 62, 0.5)"}
            textStyle="Gentona"
          >
            We got your rear
          </Text>
        </Heading>

        <Box>
          <PerformanceQna />
        </Box>
      </Box>
      {/* 2nd Box */}
      <Box w={"60%"}>
        {CarouselComponent.map((obj, index) => {
          return (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              my={"2%"}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              key={index}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={obj.image}
                  boxSize={"100%"}
                  maxW={"xl"}
                  objectFit={"cover"}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PerformanceSection;

function BtnSlider({ direction, moveSlide }) {
  return (
    <IconButton
      aria-label="right-arrow"
      backgroundColor={"#F2F4F6"}
      borderRadius={"full"}
      zIndex={2}
      onClick={moveSlide}
    >
      {direction === "next" ? (
        <MdKeyboardArrowLeft size={"20"} color={"rgb(32, 32, 32)"} />
      ) : (
        <MdKeyboardArrowRight size={"20"} color={"rgb(32, 32, 32)"} />
      )}
    </IconButton>
  );
}

//todo 0) plse place and style all the component according to chakra ui --//done
//todo 1) plse place carousel buttons along with headline --//done
//todo 2) remove box shadow --//done
//todo 3) style carousel bullets --//done
//todo 4)do partion of texttual and pictorial portion
//todo 5) styling of carousel partition
//todo 6) import gentona book fonts
//todo 7) avoid external styling--//fixme not possible

//reference https://codesandbox.io/s/elastic-hill-cmbz1?from-embed=&file=/src/Carousel.js:328-427&resolutionWidth=320&resolutionHeight=675

//todo responsive style chhe ke nai check kro

//todo mobile device ma toggle btns none krva na chhe --//done
//todo sm -//done
//todo md --//done
//todo lg -- //done
//todo xl --//done

//todo carousel bullet styling --//done
