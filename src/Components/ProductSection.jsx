import React from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";

// images
import Ice from "../../src/Assets/productsection/rm-prod-1.png";

import Rain from "../../src/Assets/productsection/rm-prod-2.png";

import Sand from "../../src/Assets/productsection/rm-prod-3.png";

const ProductSection = () => {
  return (
    <>
      <ProductSectionBucket />
    </>
  );
};

export default ProductSection;

const ProductSectionBucket = () => {
  return (
    <Box paddingX={["5%"]} paddingY={["2%", "1%"]}>
      <ProductSectionHeadline />
      <ProductSectionContent />
    </Box>
  );
};

const ProductSectionHeadline = () => {
  return (
    <HStack>
      <Heading>
        <Text
          lineHeight={"120%"}
          my={[".25rem"]}
          fontWeight={"500"}
          letterSpacing={"-1px"}
          fontSize={"4xl"}
          textShadow={"1.728px 1.728px 0px rgb(146 200 62 / 50%)"}
          textStyle="Gentona"
        >
          Looking for horses ? Go voltaic
        </Text>
      </Heading>
    </HStack>
  );
};

const ProductSectionContent = () => {
  const CardData = [
    {
      img: Rain,
      title: `17inch Q-HUB`,
      content: `Best suited for motorcycle’s 
      rear wheels, our 17” BLDC Hub 
      Motor can run smoothly even at 
      high speeds and heavy loads.`,
      backgroundColor: `#FAEFE7`,
    },
    {
      img: Sand,
      title: `10inch Q-HUB`,
      content: `Our 10” BLDC Hub Motor 
      designed and developed 
      with world class quality with 
      efciency upto 89%.`,
      backgroundColor: `#F3F7EA`,
    },
    {
      img: Ice,
      title: `5inch Q-HUB`,
      content: `Indigenously designed for 
      electric bicycles it gives 
      highest power and 
      perormance output. `,
      backgroundColor: `#EFF2FA`,
    },
  ];

  return (
    <>
      <HStack my={"2%"} flexWrap={"wrap"}>
        {/* for row wise changes use below mention flex */}
        <Flex
          // border={"1px solid red"}
          flexWrap={"wrap"}
          w={"100%"}
          gap={"24px"}
          justifyContent={"space-between"}
        >
          {CardData.map((item, index) => {
            let { img, title, content, range, backgroundColor } = item;
            return (
              <Stack
                padding={"1rem"}
                key={index}
                display={"flex"}
                justifyContent={"space-around"}
                background={backgroundColor}
                borderRadius={"md"}
                w={"350px"}
                minH={"md"}
              >
                {/* image */}
                <Box display={"flex"} justifyContent={"center"}>
                  <Image
                    // border={"1px solid"}
                    src={img}
                    borderRadius={".25rem"}
                  />
                </Box>
                {/* title */}
                <Box p={"1%"} my={"5%"}>
                  <Text
                    textStyle="Gentona Medium"
                    fontWeight={"100"}
                    fontSize={["2xl", "3xl", "4xl"]}
                    lineHeight={"20px"}
                  >
                    {title}
                  </Text>
                </Box>
                {/* content */}
                <Box p={"1%"}>
                  <Text
                    noOfLines={"3"}
                    width={"258px"}
                    my={"10px"}
                    textStyle="Gentona_Book"
                    fontWeight={"400"}
                    fontSize={"md"}
                    opacity={"0.6"}
                  >
                    {content}
                  </Text>
                </Box>
                {/* range */}
                <Box p={"1%"}>
                  <Text
                    // opacity={"0.4"}
                    color={"#16AA51"}
                    textStyle="Gentona"
                    fontSize={"sm"}
                  >
                    {range}
                  </Text>
                </Box>
              </Stack>
            );
          })}
        </Flex>
      </HStack>
    </>
  );
};
