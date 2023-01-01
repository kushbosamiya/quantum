import React, { useEffect, useState } from "react";
import { Box, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

// video source
// import HubMotorVideo from "../../Assets/HeroSection_Assets/0001.mp4";
import HubMotorVideo from "../../Assets/addonsection/hub-motor-with-scooter.mp4";

const AddonPerformance = () => {
  return (
    <>
      <AddonPerformanceContainer />
    </>
  );
};

export default AddonPerformance;

const AddonPerformanceContainer = () => {
  return (
    <>
      <Box background={"#1E1E1E"} paddingX={["5%"]} paddingY={["2%", "1%"]}>
        {/* conatiner header */}
        <HStack display={"flex"} justifyContent={"space-between"} my={"1%"}>
          {/* flex start */}
          <HStack>
            <Box border={"1px solid red"}>
              <Text
                textStyle="Gentona Medium"
                color={"white"}
                fontWeight={"100"}
                fontSize={"4xl"}
              >
                Q-HUB MOTORS
              </Text>
            </Box>
          </HStack>

          {/* flex end */}
        </HStack>
        {/* container-body  */}
        <Box display={"flex"} justifyContent={"space-between"}>
          {/* container body box-1 */}
          <Stack
            maxW={"35%"}
            display={"flex"}
            gap={".75rem"}
            flexDirection={"column"}
            minH={"320px"}
          >
            <Box>
              {/* textual part */}
              <Heading>
                <Text
                  lineHeight={"120%"}
                  my={[".25rem"]}
                  fontWeight={"500"}
                  letterSpacing={"-1px"}
                  fontSize={"4xl"}
                  color={"white"}
                  textShadow={
                    "1.152px 1.152px 0 #000,1.728px 1.728px 0 #92c83e"
                  }
                  textStyle="Gentona"
                >
                  Here's what to expect by coolest tiny motor
                </Text>
              </Heading>
            </Box>
            <Box>
              <Text
                textStyle="Gentona_Book"
                fontWeight={"400"}
                fontSize={"lg"}
                color={"#5B5B5B"}
                opacity={"0.8"}
                lineHeight={"140%"}
              >
                We are developing BLDC Hub Motor indigenously for Electric
                Vehicles ,With our innovative tech, we are going to build
                indigenous BLDC Motors, Hub Motors for two, three and four wheel
                Electric Vehicles segment
              </Text>
            </Box>
            <Stack display={"flex"} justifyContent={"end"}>
              <Box
                textStyle="Gentona"
                fontSize={"2xl"}
                fontStyle={"italic"}
                display={"flex"}
                gap={".25rem"}
              >
                <span
                  style={{
                    fontWeight: "300",
                    color: "#BABABA",
                    opacity: "0.8",
                  }}
                >
                  Curated by{" "}
                </span>
                <span
                  style={{
                    fontWeight: "500",
                    color: "white",
                    opacity: "1",
                  }}
                >
                  QEV STUDIO
                </span>
              </Box>
            </Stack>
          </Stack>
          {/* container body box-2 */}
          <Box maxw={"65%"} w={"50%"}>
            <video
              style={{
                marginTop: ".5rem",
                marginBottom: ".5rem",
                borderRadius: ".75rem",
              }}
              loop
              autoPlay
              muted
              preload="metadata"
              src={HubMotorVideo}
            ></video>
          </Box>
        </Box>
      </Box>
    </>
  );
};
