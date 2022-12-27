import React from "react";
import {
  Box,
  Text,
  Stack,
  HStack,
  Heading,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";

// images
import Ram from "../../src/Assets/Performance_Assets/ram.png";
import Lakhan from "../../src/Assets/Performance_Assets/lakhan.png";

const AboutSection = () => {
  return (
    <>
      <Box paddingX={{ md: "5%" }} paddingY={["2%", "1%"]}>
        <AboutSectionSubComponent />
      </Box>
    </>
  );
};

export default AboutSection;

const AboutSectionSubComponent = () => {
  return (
    <>
      <ComapanyMotto />
      <Box mx={"5%"} pl={"2%"} pb={"2%"}>
        <AboutCompany />
      </Box>
      <IndividualProfileInfo />
    </>
  );
};

const ComapanyMotto = () => {
  return (
    <>
      <HStack>
        <Heading>
          <Box
            width={"320px"}
            textStyle="Gentona Medium"
            display={"flex"}
            flexDir={"column"}
            // gap={".1rem"}
            // textAlign={"center"}
          >
            <Text
              fontSize={"2xl"}
              lineHeight={"48px"}
              //   opacity={"0.9"}
              color={"rgb(186,186,186)"}
              fontWeight={"600"}
            >
              {/* color={"#E2E2E2"}> */}
              Future is electric ,
            </Text>
            <Text
              lineHeight={"30px"}
              fontWeight={"600"}
              //   lineHeight={"120%"}
              fontSize={["4xl"]}
              textShadow={"1.728px 1.728px 0px rgba(146, 200, 62, 0.5)"}
            >
              And Electric is here
            </Text>
          </Box>
        </Heading>
      </HStack>
    </>
  );
};

const AboutCompany = () => {
  return (
    <HStack>
      <Box ml={"15%"} py={"5%"}>
        <span
          style={{
            position: "absolute",
            width: "36px",
            height: "4px",
            background: "rgb(36, 187, 59)",
            // marginTop: "-0.5%",
            marginBottom: "1%",
          }}
        ></span>
        <Text
          textStyle="Gentona_Book"
          lineHeight={"24px"}
          mt={"12px"}
          fontSize={"md"}
          width={"600px"}
          opacity={"0.6"}
        >
          QuantumEV Tech is a future enthusiastic company, working to redefine
          mobility as we know it . Electric is here and we at Quantum wants to
          deliver Quintessential Hub motors for the Indian EV makers.
        </Text>
        <Text
          textStyle="Gentona_Book"
          lineHeight={"24px"}
          mt={"12px"}
          fontSize={"md"}
          width={"600px"}
          opacity={"0.6"}
        >
          Building everything from the ground up team Quantum is going length
          and breaths to evolve Indian EV market.
        </Text>
        <Text
          lineHeight={"24px"}
          mt={"12px"}
          fontSize={"md"}
          width={"600px"}
          opacity={"0.6"}
        >
          QEV Tech is aspiring leading manufacturer of BLDC Hub Motors for
          Electric Vehicles
        </Text>{" "}
        <Text
          textStyle="Gentona_Book"
          lineHeight={"24px"}
          mt={"12px"}
          fontSize={"md"}
          width={"600px"}
          opacity={"0.6"}
        >
          Through our innovative tech, we are going to build indigenous BLDC
          Motors, Hub Motors for two, three and four wheel Electric Vehicles
          segment.
        </Text>
        {/*  */}
        <Text
          textStyle="Gentona_Book"
          lineHeight={"24px"}
          mt={"12px"}
          fontSize={"md"}
          width={"600px"}
          opacity={"0.6"}
        >
          Under our Q-Stator division, we are going to offer slinky stators to
          AC motor manufacturers. Our USP for this stators are the production
          and price offerings which are substantially economical compare to our
          peers.
        </Text>
      </Box>
    </HStack>
  );
};

const IndividualProfileInfo = () => {
  return (
    <>
      <HStack display={"flex"}>
        {/* conatainer-1 (contains images of individual) */}
        <Box
          width={"50%"}
          justifyContent={"center"}
          gap={"24px"}
          display={"flex"}
          padding={"1rem"}
        >
          <Avatar
            name="Ram"
            _hover={{
              border: "3px solid rgb(36, 187, 59)",
            }}
            src={Ram}
            size={"2xl"}
          />

          <Avatar
            name="Lakhan"
            _hover={{
              border: "3px solid rgb(36, 187, 59)",
            }}
            src={Lakhan}
            size={"2xl"}
          />
        </Box>

        {/* container-2 (contains info. of individual) */}
        <Box width={"50%"} padding={"1%"}>
          <Box>
            {/* headline */}
            <Text
              my={["0.5rem"]}
              fontWeight={"500"}
              lineHeight={"120%"}
              fontSize={["4xl"]}
              textShadow={"1.728px 1.728px 0px rgba(146, 200, 62, 0.5)"}
              textStyle="Gentona"
            >
              Who we are ?
            </Text>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            {/* for name & designnation */}
            <Box>
              <Text
                textStyle="Gentona_Book"
                fontSize={"2xl"}
                fontWeight={"semibold"}
                py={".5rem"}
                opacity={"0.8"}
              >
                Harsh Dobariya , Co-Founder
              </Text>
            </Box>
            {/* for individual domain info */}
            <Box>
              <Text
                textStyle="Gentona_Book"
                fontSize={"md"}
                fontWeight={"medium"}
                py={".5rem"}
                opacity={"0.6"}
                maxW={"420px"}
              >
                Working in research and development for electric vehicle motor
                technology. Along with that working on product design,
                manufacturability and production engineering.
              </Text>
            </Box>
          </Box>
        </Box>
      </HStack>
    </>
  );
};
