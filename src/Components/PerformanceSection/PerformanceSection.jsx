import React, { useState, useEffect } from "react";

import {
  Box,
  Heading,
  IconButton,
  Text,
  Image,
  HStack,
} from "@chakra-ui/react";

import Slider from "react-slick";

// images
import Ice from "../../Assets/Performance_Assets/final-ice.png";

import Rain from "../../Assets/Performance_Assets/final-rain.png";

import Sand from "../../Assets/Performance_Assets/final-sand.png";

// import "../Custom-Styles/PerformanceStyles.css";

// imported pages

const PerformanceSection = () => {
  return (
    <>
      <Box>
        <SliderComponent />
      </Box>
    </>
  );
};

const SliderComponent = () => {
  const settings = {
    // dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // data
  const CarouselComponent = [
    {
      image: Rain,
      motorsize: 5,
      voltage: 60,
      power: 1200,
      torque: 100,
      efficiency: 88,
      rpm: 710,
    },
    {
      image: Ice,
      motorsize: 10,
      voltage: 72,
      power: 1500,
      torque: 120,
      efficiency: 88,
      rpm: 755,
    },
    {
      image: Sand,
      motorsize: 17,
      voltage: 72,
      power: 2000,
      torque: 148,
      efficiency: 90,
      rpm: 810,
    },
  ];

  // on swipe function

  const [slider, setSlider] = useState(<Slider />);

  return (
    <Box position={"relative"} width={["full"]} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {CarouselComponent.map((obj, index) => {
          let { image, motorsize, efficiency, voltage, power, torque, rpm } =
            obj;
          return (
            <span key={index}>
              <HStack
                paddingX={["5%"]}
                paddingY={["2%", "1%"]}
                // 1st child
                h={"12vh"}
                justifyContent={"space-around"}
                backgroundColor={"rgba(0,0,0,0.6)"}
                padding={"2%"}
              >
                <Box
                  // border={"1px solid "}
                  display={"flex"}
                  gap={".15rem"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  color={"white"}
                >
                  <Text textStyle="Gentona_Medium" fontSize={["sm", "3xl"]}>
                    {motorsize}
                    <span>inch</span>
                  </Text>
                  <Text
                    textStyle="Gentona_Book"
                    fontSize={"md"}
                    opacity={"0.8"}
                  >
                    Hub Motors
                  </Text>
                </Box>

                <Box
                  // border={"1px solid "}
                  display={"flex"}
                  gap={".15rem"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  color={"white"}
                >
                  <Text textStyle="Gentona_Medium" fontSize={["sm", "3xl"]}>
                    {voltage}
                    <span></span>
                  </Text>
                  <Text
                    textStyle="Gentona_Book"
                    fontSize={"md"}
                    opacity={"0.8"}
                  >
                    Rated Voltage
                  </Text>
                </Box>

                <Box
                  // border={"1px solid "}
                  display={"flex"}
                  gap={".15rem"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  color={"white"}
                >
                  <Text textStyle="Gentona_Medium" fontSize={["sm", "3xl"]}>
                    {power}
                    <span></span>
                  </Text>
                  <Text
                    textStyle="Gentona_Book"
                    fontSize={"md"}
                    opacity={"0.8"}
                  >
                    Rated Power
                  </Text>
                </Box>

                <Box
                  // border={"1px solid "}
                  display={["none", "none", "none", "flex"]}
                  gap={".15rem"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  color={"white"}
                >
                  <Text textStyle="Gentona_Medium" fontSize={["xs", "3xl"]}>
                    {torque}
                    <span> Nm</span>
                  </Text>
                  <Text
                    textStyle="Gentona_Book"
                    fontSize={"sm"}
                    opacity={"0.8"}
                  >
                    Max Torque
                  </Text>
                </Box>

                <Box
                  // border={"1px solid "}
                  display={["none", "none", "none", "flex"]}
                  gap={".15rem"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  color={"white"}
                >
                  <Text textStyle="Gentona_Medium" fontSize={["xs", "3xl"]}>
                    {efficiency}
                    <span>%</span>
                  </Text>
                  <Text
                    textStyle="Gentona_Book"
                    fontSize={["sm"]}
                    opacity={"0.8"}
                  >
                    Efficiency
                  </Text>
                </Box>

                <Box
                  // border={"1px solid "}
                  display={["none", "none", "flex"]}
                  gap={".15rem"}
                  flexDirection={"column"}
                  textAlign={"center"}
                  color={"white"}
                >
                  <Text textStyle="Gentona_Medium" fontSize={["xs", "3xl"]}>
                    {rpm}
                    <span></span>
                  </Text>
                  <Text
                    textStyle="Gentona_Book"
                    fontSize={["sm"]}
                    opacity={"0.8"}
                  >
                    Max RPM
                  </Text>
                </Box>
              </HStack>

              <Box
                paddingX={["5%"]}
                paddingY={["2%", "1%"]}
                marginTop={{ xl: "1rem" }}
                width={["100%", "80%", "70%", "60%"]}
                // boxSize={["xs", "50%"]}
                position={["relative"]}
                left={["0%", "10%", "35%", "45%"]}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={image} marginY={["2rem", "3rem", "0"]} />
              </Box>
            </span>
          );
        })}
      </Slider>
      {/* headding */}
      <Box
        width={["100%"]}
        position={["relative", "relative", "absolute"]}
        bottom={["-5%", "5%", "30%"]}
        paddingX={["5%", "0%"]}
        paddingY={["2%", "0%"]}
        display={"flex"}
        flexDirection={["column"]}
        marginLeft={["0", "5%"]}
        justifyContent={["center", "center"]}
      >
        <Text
          fontWeight={"400"}
          fontStyle={"italic"}
          lineHeight={"120%"}
          fontSize={["2xl", "3xl", "4xl"]}
          opacity={"0.5"}
          textStyle="Gentona"
        >
          Whatever it may be,
        </Text>
        <Heading my={"1rem"} ml={["15%", "0%"]}>
          <Text
            fontWeight={"500"}
            lineHeight={"120%"}
            fontSize={["3xl", "4xl", "5xl"]}
            textShadow={"1.728px 1.728px 0px rgba(146, 200, 62, 0.5)"}
            textStyle="Gentona"
          >
            We Got Your Rear
          </Text>
        </Heading>
      </Box>
    </Box>
  );
};

export default PerformanceSection;

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
