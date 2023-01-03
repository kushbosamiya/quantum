import React from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";

// images
import Ice from "../../src/Assets/productsection/prod-1.jpeg";

import Rain from "../../src/Assets/productsection/prod-2.jpeg";

import Sand from "../../src/Assets/productsection/prod-3.jpeg";

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
    <HStack id="productsection">
      <Heading>
        <Text
          lineHeight={"120%"}
          my={[".25rem"]}
          fontWeight={"500"}
          letterSpacing={"-1px"}
          fontSize={["3xl", "4xl"]}
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
          justifyContent={["space-between", "space-around", "space-between"]}
        >
          {CardData.map((item, index) => {
            let { img, title, content, range, backgroundColor } = item;
            return (
              <Stack
                padding={"1rem"}
                key={index}
                display={"flex"}
                justifyContent={["space-around"]}
                background={'#d5d5d5'}
                borderRadius={"md"}
                w={"350px"}
                minH={"md"}
              >
                {/* image */}
                <Box display={"flex"} p={".5rem"} justifyContent={"center"}>
                  <Image
                    // border={"1px solid"}
                    height={["200px"]}
                    width={["300px"]}
                    src={img}
                    borderRadius={"md"}
                  />
                </Box>
                {/* title */}
                <Box p={".5rem"} my={"5%"}>
                  <Text
                    textStyle="Gentona Medium"
                    fontWeight={"100"}
                    fontSize={["3xl", "4xl"]}
                    lineHeight={"20px"}
                  >
                    {title}
                  </Text>
                </Box>
                {/* content */}
                <Box p={".5rem"} my={"5%"}>
                  <Text
                    // noOfLines={"4"}
                    textStyle="Gentona_Book"
                    fontWeight={"400"}
                    lineHeight={"170%"}
                    fontSize={["lg", "xl"]}
                    opacity={"0.6"}
                  >
                    {content}
                  </Text>
                </Box>
                {/* range */}
                <HStack p={".5rem"} my={"5%"} justifyContent={"center"}>
                  {/* <Text color={"#16AA51"} textStyle="Gentona">
                    {range}
                  </Text> */}
                  <Button
                    backgroundColor={"rgba(0,0,0,0.8)"}
                    textStyle="Gentona"
                    color={"white"}
                    borderRadius={"sm"}
                    size={"lg"}
                    _hover={{
                      boxShadow: "3px 3px 3px 2px #92c83e",
                    }}
                    as={"a"}
                    href="https://drive.google.com/file/d/1vJyZP2gOoh5jJHvajZJJo5JKS-YJeLuQ/view?usp=sharing"
                    target="_blank"
                  >
                    Know more
                  </Button>
                </HStack>
              </Stack>
            );
          })}
        </Flex>
      </HStack>
    </>
  );
};
