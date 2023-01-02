import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react";

import { SiInstagram } from "react-icons/si";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

// images
import Logos from "../Assets/Logo/new-logo.png";

const Logo = () => {
  return (
    <>
      <Image src={Logos} width={["50%", "30%", "20%"]} />
    </>
  );
};

const SocialButton = ({ children }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      //   href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      {/* <VisuallyHidden>{label}</VisuallyHidden> */}
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"} fontSize={["lg"]}>
            Home
          </Link>
          <Link href={"#"} fontSize={["lg"]}>
            About
          </Link>
          <Link href={"#"} fontSize={["lg"]}>
            Blog
          </Link>
          <Link href={"#"} fontSize={["lg"]}>
            Contact
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text textAlign={"center"}>
            © 2022 Quantum Ev-Tech All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/14harsheel"}
            >
              <BsTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FiFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <SiInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
