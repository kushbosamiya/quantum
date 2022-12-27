import React from "react";
import {
  Box,
  HStack,
  Flex,
  Image,
  Divider,
  Heading,
  Text,
  Input,
  FormControl,
  Button,
} from "@chakra-ui/react";

// images

import Logo from "../Assets/Navbar_Assets/new-log-4-11-22.png";

const FooterSection = () => {
  return (
    <>
      <FooterSubcomponent />
    </>
  );
};

export default FooterSection;

const FooterSubcomponent = () => {
  return (
    <>
      <Box
        paddingX={{ md: "5%" }}
        paddingY={["2%", "1%"]}
        bg={"#F2F4F6"}
        borderTop={"1px solid red"}
      >
        <FooterInitialComponent />
        <FooterSecondaryComponent />
      </Box>
    </>
  );
};

const FooterInitialComponent = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        gap={"1rem"}
        padding={"1rem"}
      >
        <Box>
          <Image src={Logo} maxWidth={"15%"} />
        </Box>
        <Box>
          <Divider orientation="horizontal" />
        </Box>
      </Flex>
    </>
  );
};

const FooterSecondaryComponent = () => {
  return (
    <>
      <Flex>
        {/* container-1 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={".75rem"}
          width={"50%"}
          border={"1px solid"}
          padding={"1rem"}
        >
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
              Stay in touch with us{" "}
            </Text>
          </Heading>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={".75rem"}
            maxWidth={"md"}
          >
            <FormControl>
              <Input
                variant={"solid"}
                borderWidth={1}
                color={"gray.800"}
                _placeholder={{
                  color: "gray.400",
                }}
                id={"email"}
                type={"email"}
                required
                placeholder={"Your Email"}
                aria-label={"Your Email"}
              />
            </FormControl>
            <Button
              _hover={{
                boxShadow: "-3px 3px 0 #32c86e",
                bg: "radial-gradient(127.68% 2996.56% at 12.65% 127.68%,#000 0,#222 100%)",

                color: "white",
              }}
              boxShadow={"-3px 3px 0 #32c86e"}
              bg={
                "radial-gradient(127.68% 2996.56% at 12.65% 127.68%,#000 0,#222 100%)"
              }
              color={"white"}
            >
              <Text>SUBSCRIBE US TO GET UPDATES</Text>
            </Button>
          </Box>
        </Box>
        {/* container-2 */}
        <Box></Box>
      </Flex>
    </>
  );
};
