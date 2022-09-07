import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import Logo from '../Assets/Logo-3.png';

const Header = () => {
  return (
    <>
      <Flex
        bg={'#1c1d1d'}
        justifyContent={'center'}
        alignItems={'center'}
        p={['1vmax']}
        // maxH={['10vh', '15vh']}
        borderBottom={'2px solid #3a6d2b'}
      >
        <Image src={Logo} boxSize={['60%', '40%', '30%', '25%']} />
      </Flex>
    </>
  );
};

export default Header;
