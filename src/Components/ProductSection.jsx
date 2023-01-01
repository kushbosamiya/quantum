import React from "react";
import { Box, Heading, HStack, Text, Flex, Image } from "@chakra-ui/react";

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
      img: Ice,
      title: `17inch Q-HUB`,
      content: `Best suited for motorcycle's rear wheels, our 17" BLDC hub motor can run smoothly even at high speeds and loads`,
      range: `POWER RANGE 2000W to 3000W`,
      backgroundColor: `#FAEFE7`,
    },
    {
      img: Rain,
      title: `10inch Q-HUB`,
      content: `Our 10" BLDC Hub Motor designed and developed with world class quality with efficiecy upto 92%`,
      range: `POWER RANGE 800W to 1500W`,
      backgroundColor: `#F3F7EA`,
    },
    {
      img: Sand,
      title: `5inch Q-HUB`,
      content: `Indegenously designed for electric bycycles it gives highest power and output`,
      range: `POWER RANGE 250W to 500W`,
      backgroundColor: `#F0EFE6`,
    },
  ];

  return (
    <>
      <HStack my={"2%"}>
        {/* for row wise changes use below mention flex */}
        <Flex
          //   border={"1px solid red"}
          w={"100%"}
          gap={"24px"}
          justifyContent={"space-between"}
        >
          {CardData.map((item, index) => {
            let { img, title, content, range, backgroundColor } = item;
            return (
              <Box
                padding={"2%"}
                w={"340px"}
                key={index}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-around"}
                // border={"1px solid lightgray"}
                background={backgroundColor}
                borderRadius={".5rem"}
              >
                {/* image */}
                <Box my={"5%"}>
                  <Image
                    src={img}
                    maxW={"100%"}
                    borderRadius={".25rem"}
                    objectFit={"cover"}
                  />
                </Box>
                {/* title */}
                <Box p={"1%"} my={"5%"}>
                  <Text
                    textStyle="Gentona Medium"
                    fontWeight={"100"}
                    fontSize={"2xl"}
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
              </Box>
            );
          })}
        </Flex>
      </HStack>
    </>
  );
};
