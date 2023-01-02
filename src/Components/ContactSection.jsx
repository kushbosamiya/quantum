import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Image,
} from "@chakra-ui/react";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

import Motor from "../Assets/productsection/prod-2.jpeg";

import { BsGithub, BsDiscord, BsPerson, BsTelephone } from "react-icons/bs";

const ContactSection = () => {
  return (
    <>
      <ContactSectionComponent />
    </>
  );
};

export default ContactSection;

const ContactSectionComponent = () => {
  return (
    <>
      <Box
        paddingX={["5%"]}
        paddingY={["2%", "1%"]}
        width={"100%"}
        borderRadius="lg"
      >
        {/* headline */}
        <HStack justifyContent={"center"} my={"1rem"} id="contactsection">
          <Text
            lineHeight={"170%"}
            fontWeight={"600"}
            fontSize={["2xl", "3xl", "4xl"]}
            textShadow={"1.728px 1.728px 0px rgba(146, 200, 62, 0.5)"}
          >
            Lets customise motors for your special requirements
          </Text>
        </HStack>

        {/* child one */}
        <Box
          display={["flex"]}
          flexDirection={["column", "row"]}
          justifyContent={["0", "center", "space-around"]}
          alignItems={["0", "center"]}
        >
          {/* image */}

          <Box maxW={["100%", "50%"]}>
            <Image src={Motor} />
          </Box>

          {/*form  */}
          <Stack
            width={["100%", "md"]}
            //    boxSize={"50%"}
          >
            <HStack>
              <Text
                textStyle="Gentona_Medium"
                fontSize={["0", "0", "0", "5xl"]}
                opacity={"0.6"}
              >
                Contact Us
              </Text>
            </HStack>
            <VStack
              spacing={2}
              p={"1rem"}
              justifyContent={"space-around"}
              //   gap={".85rem"}
            >
              <FormControl id="name">
                <FormLabel textStyle="Gentona_Medium">Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsPerson color="gray.800" />}
                  />
                  <Input type="text" size="md" textStyle="Gentona_Book" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel textStyle="Gentona_Medium">Mail</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineEmail color="gray.800" />}
                  />
                  <Input type="text" size="md" textStyle="Gentona_Book" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel textStyle="Gentona_Medium">Contact</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<BsTelephone color="gray.800" />}
                  />
                  <Input type="text" size="md" textStyle="Gentona_Book" />
                </InputGroup>
              </FormControl>
              <FormControl id="name">
                <FormLabel textStyle="Gentona_Medium">Message</FormLabel>
                <Textarea
                  textStyle="Gentona_Book"
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="message"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Button
                  backgroundColor={"rgba(0,0,0,0.8)"}
                  textStyle="Gentona"
                  color={"white"}
                  borderRadius={"sm"}
                  size={"lg"}
                  _hover={{
                    boxShadow: "3px 3px 3px 2px #92c83e",
                  }}
                >
                  Send Message
                </Button>
              </FormControl>
            </VStack>
            <Box
              p={"1rem"}
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={["column", "row"]}
            >
              <Text
                textStyle="Gentona_Medium"
                fontWeight={"bold"}
                opacity={"0.6"}
                textAlign={["center", "0"]}
              >
                info@quantumevtech.com
              </Text>
              <Text
                textStyle="Gentona_Medium"
                fontWeight={"bold"}
                opacity={"0.6"}
                textAlign={["center", "0"]}
              >
                9033794951
              </Text>
            </Box>

            {/* </Box> */}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
