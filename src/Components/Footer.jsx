import React from 'react';
import {
  Box,
  Flex,
  Text,
  ListItem,
  UnorderedList,
  List,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      className="animate__animated animate__fadeInLeft animate__delay-900ms"
      bg={'#1c1d1d'}
      borderTop={'2px solid #3a6d2b'}
      color={'white'}
      p={'1vmax'}
    >
      <PrimaryComponent />
      <FooterLinks />
    </Box>
  );
};

export default Footer;

const PrimaryComponent = () => {
  return (
    <>
      <Flex
        className="animate__animated animate__fadeInLeft animate__delay-900ms"
        mt={['.5rem']}
        mb={['.5rem']}
        // mx={{ md: '5%' }}
        justifyContent={{ md: 'center' }}
      >
        <Text>contact us</Text>
      </Flex>
    </>
  );
};

const FooterLinks = () => {
  return (
    <>
      <Flex
        className="animate__animated animate__fadeInLeft animate__delay-900ms"
        flexDirection={['column', 'row']}
        flexWrap={{ md: 'wrap' }}
        gap={['.5rem']}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-around' }}
      >
        {/* mail and no. li */}
        {/* <Box display={['flex']}> */}
        <List>
          <UnorderedList
            display={{ md: 'flex' }}
            alignItems={{ md: 'center' }}
            gap={{ md: '.5rem' }}
          >
            <ListItem>
              <Text fontSize={['sm']}>quantumevtech@gmail.com</Text>
            </ListItem>
          </UnorderedList>
        </List>
        {/* </Box> */}

        <List>
          <UnorderedList display={{ md: 'flex' }} alignItems={{ md: 'center' }}>
            <ListItem my={['.5rem']}>
              <Text fontSize={['sm']}>90337 94951 | 74057 36538</Text>
            </ListItem>
          </UnorderedList>
        </List>
        {/* tnc */}
        <Box fontSize={['sm']} display={{ md: 'flex' }} gap={{ md: '1.5rem' }}>
          <Text>Terms</Text>
          <Text>privacy</Text>
          <Text>services</Text>
        </Box>
        {/* rights */}
        <Box>
          <Text fontSize={['sm']}>quantum ev-tech all rights are reserved</Text>
        </Box>
      </Flex>
    </>
  );
};
