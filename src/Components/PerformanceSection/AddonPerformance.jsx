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
      <Stack
        background={"#1E1E1E"}
        paddingX={["5%"]}
        paddingY={["2%", "1%"]}
        spacing={"1rem"}
      >
        {/* conatiner header */}
        <HStack display={"flex"} justifyContent={"space-between"} my={"1%"}>
          {/* flex start */}
          <HStack>
            <Box>
              <Text
                textStyle="Gentona Medium"
                color={"white"}
                fontWeight={"100"}
                fontSize={["3xl", "4xl", "5xl"]}
              >
                Q-HUB MOTORS
              </Text>
            </Box>
          </HStack>

          {/* flex end */}
        </HStack>
        {/* container-body  */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={["column", "column", "column", "row"]}
          gap={"1rem"}
        >
          {/* container body box-1 */}
          <Stack
            maxW={["100%", "100%", "100%", "50%"]}
            // maxW={["100%", "100%", "45%", "35%"]}
            display={"flex"}
            gap={".75rem"}
            flexDirection={"column"}
            minH={"100%"}
            justifyContent={"space-around"}
          >
            <Box>
              {/* textual part */}
              <Heading>
                <Text
                  lineHeight={"120%"}
                  my={[".25rem"]}
                  fontWeight={"500"}
                  letterSpacing={"-1px"}
                  fontSize={["2xl", "3xl", "4xl"]}
                  color={"white"}
                  textShadow={
                    "1.152px 1.152px 0 #000,1.728px 1.728px 0 #92c83e"
                  }
                  textStyle="Gentona"
                >
                  Why choose us ?
                </Text>
              </Heading>
            </Box>
            <Stack spacing={"1rem"}>
              <Text
                textStyle="Gentona_Book"
                fontWeight={"400"}
                fontSize={["md", "lg", "xl"]}
                color={"white"}
                // color={"#5B5B5B"}
                opacity={"0.5"}
                lineHeight={"160%"}
                letterSpacing={["5%", "10%", "15%", "20%"]}
              >
                Our BLDC Hub motors are designed for efficiency and optimised for
                Electric vehicle performance. They offer exceptional range and
                Cost-saving capabilities, along with high levels of power and
                Torque. Compact and robustly built, they are perfect for
                Upgrading your electric vehicle.
              </Text>
              <Text
                letterSpacing={["5%", "10%", "15%", "20%"]}
                display={["none", "block"]}
                textStyle="Gentona_Book"
                fontWeight={"400"}
                fontSize={["md", "lg", "xl"]}
                color={"white"}
                // color={"#5B5B5B"}
                opacity={"0.5"}
                lineHeight={"160%"}
              >
                Customise it to your specific requirements, our top-performing
                Motors can take your driving experience to the next level.
                Upgrade with us and feel the difference.
              </Text>
            </Stack>
            <Stack display={"flex"} justifyContent={"end"}>
              <Box
                textStyle="Gentona"
                fontSize={["3xl", "4xl", "5xl"]}
                fontStyle={"italic"}
                display={"flex"}
                gap={"1rem"}
              >
                <Box
                  fontWeight={"500"}
                  fontSize={["lg", "xl", "2xl"]}
                  opacity={"0.5"}
                  color={"white"}
                >
                  Curated by{" "}
                </Box>
                <Box
                  fontWeight={"500"}
                  fontSize={["lg", "xl", "2xl"]}
                  opacity={"0.5"}
                  color={"white"}
                >
                  QUANTUMEV <span>STUDIO</span>
                </Box>
              </Box>
            </Stack>
          </Stack>
          {/* container body box-2 */}
          <Box
            display={"flex"}
            justifyContent={["0", "center", "center"]}
            maxW={{ xl: "60%", lg: "50%" }}
          >
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

        {/* last tag line */}
        <HStack
          padding={"1rem"}
          display={["none", "flex"]}
          justifyContent={"center"}
        >
          <Heading>
            <Text
              textStyle="Gentona Medium"
              color={"white"}
              fontWeight={"100"}
              fontSize={["3xl", "4xl", "5xl"]}
            >
              Electrify Your Ride Today
            </Text>
          </Heading>
        </HStack>
      </Stack>
    </>
  );
};
