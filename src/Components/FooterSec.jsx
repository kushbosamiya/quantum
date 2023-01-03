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
import { BsLinkedin, BsTwitter } from "react-icons/bs";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// images
import Logos from "../Assets/Logo/new-logo.png";

const Logo = () => {
  return (
    <>
      <Image src={Logos} width={["50%", "30%", "20%"]} />
    </>
  );
};

const SocialButton = ({ children, href, label }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
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
  let currYear = new Date().getFullYear();

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
          <ScrollLink
            to="navbar"
            // spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Link href={"/"} fontSize={["lg"]}>
              Home
            </Link>
          </ScrollLink>

          <ScrollLink
            to="aboutsection"
            // spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Link href={"#"} fontSize={["lg"]}>
              About
            </Link>
          </ScrollLink>
          {/* <Link href={"#"} fontSize={["lg"]}>
            Blog
          </Link> */}
          <ScrollLink
            to="contactsection"
            // spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Link href={"#"} fontSize={["lg"]}>
              Contact
            </Link>
          </ScrollLink>
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
            © {currYear} Quantum Ev-Tech All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/14harsheel"}
            >
              <BsTwitter />
            </SocialButton>
            <SocialButton
              label={"Linkedin"}
              href={
                "https://www.linkedin.com/company/quantum-ev-tech/?viewAsMember=true"
              }
            >
              <BsLinkedin />
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
