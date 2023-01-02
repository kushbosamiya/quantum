import React from "react";
import {
  Image,
  Flex,
  Text,
  useDisclosure,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";

// use navigate
import { useNavigate } from "react-router-dom";

// logo
import Logo from "../Assets/Logo/new-logo.png";

// icons
import { BiMenu } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <NavBarContainer />
    </>
  );
};

export default NavBar;

const NavBarContainer = () => {
  const [SetOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!SetOpen);
  return (
    <Flex
      h={["12vh"]}
      alignItems={["center"]}
      justifyContent={["space-between"]}
      paddingX={["5%"]}
      paddingY={["2%", "1%"]}
      textStyle="Gentona"
    >
      <NavbarLogo />
      <NavLinks SetOpen={SetOpen} />
      <HamburgerMenu toggle={toggle} SetOpen={SetOpen} />
    </Flex>
  );
};

// logo
const NavbarLogo = () => {
  return (
    <>
      <Box textStyle="Gentona" flexBasis={["150px", "180px"]}>
        <Image h={"100%"} width={["100%"]} src={Logo} objectFit={"cover"} />
      </Box>
    </>
  );
};

// hamburger menu
const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        display={["inline-flex", "none"]}
        _active={{
          bg: "none",
          outline: "none",
        }}
        variant="ghost"
        _hover={{
          bg: "none",
        }}
        ref={btnRef}
        onClick={onOpen}
      >
        <BiMenu size={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay display={["flex", "none"]} />
        <DrawerContent
          bg="#121212"
          textStyle="Gentona"
          display={["flex", "none"]}
        >
          <DrawerCloseButton
            size={30}
            marginY={"2rem"}
            padding={"1rem"}
            _hover={{ bg: "none" }}
            color="white"
          />

          <DrawerBody
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-around"}
            h={"45%"}
            color={"white"}
            pos={"absolute"}
            top={"25%"}
            width="100%"
          >
            <NavLinks isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavLinks = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Box
        display={[isOpen ? "inline-flex" : "none", "flex"]}
        flexDirection={["column", "row"]}
        justifyContent={"space-around"}
        alignItems={["start", "center"]}
        flexBasis={["50%", "30%"]}
        gap={["1rem"]}
        minH={["100%"]}
      >
        <Box alignItems={"center"} gap={"1rem"}>
          <Text
            fontSize={["md", "lg"]}
            _hover={{ color: "#16AA51", cursor: "pointer" }}
          >
            Products
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <Text
            fontSize={["md", "lg"]}
            _hover={{ color: "#16AA51", cursor: "pointer" }}
          >
            Performance
          </Text>
        </Box>

        <Box alignItems={"center"} gap={"1rem"} display={["flex", "none"]}>
          <Text
            fontSize={["md", "lg"]}
            _hover={{ color: "#16AA51", cursor: "pointer" }}
          >
            Blogs
          </Text>
        </Box>

        <Box display={["flex", "none"]} alignItems={"center"} gap={"1rem"}>
          <Text
            fontSize={["md", "lg"]}
            _hover={{ color: "#16AA51", cursor: "pointer" }}
          >
            About Us
          </Text>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <Text
            fontSize={["md", "lg"]}
            _hover={{ color: "#16AA51", cursor: "pointer" }}
          >
            Contact
          </Text>
        </Box>
      </Box>
    </>
  );
};