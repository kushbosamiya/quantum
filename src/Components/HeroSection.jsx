import React from 'react';
import { Box, Text, Image, Flex, Button } from '@chakra-ui/react';
import Motor from '../Assets/gear-icon-with-text-25.png';
import 'animate.css';

const HeroSection = () => {
  return (
    <>
      <Flex
        bg={'#1c1d1d'}
        // maxH={['80vh']}
        px={['1vmax']}
        py={['1vmax']}
        flexDirection={['column', 'row']}
        gap={['2rem', '1rem']}
      >
        <LeftComponent />
        <RightComponent />
      </Flex>
    </>
  );
};

export default HeroSection;

const LeftComponent = () => {
  const ResumePath =
    'https://drive.google.com/file/d/1vJyZP2gOoh5jJHvajZJJo5JKS-YJeLuQ/view?usp=sharing';
  return (
    <>
      <Flex
        className="animate__animated animate__fadeInLeft animate__delay-900ms"
        overflow={'hidden'}
        gap={['.75em', '1rem', '1.5rem']}
        pl={{ lg: '4rem' }}
        justifyContent={{ md: 'center' }}
        flexDirection={['column']}
        width={{ md: '50vw' }}
        my={['auto']}
      >
        {/* bold text */}
        <Box display={['flex']} alignItems={['center']}>
          <Text
            as={'span'}
            color={'white'}
            fontSize={['2.5rem', '2.75rem', '6xl']}
            mb={['auto']}
          >
            Q
          </Text>
          <Text
            color={'white'}
            // textTransform={'uppercase'}
            fontSize={['2rem', '2.5rem', '2.75rem', '6xl']}
          >
            {/* <span>Q</span> */}
            -Hub Motor
          </Text>
        </Box>
        <Text color={'white'} fontSize={['md', '2xl']} py={{ lg: '.5rem' }}>
          we got what you need to run your ev.
        </Text>
        <Box>
          {/* <Link to={'download'}> */}
          <Button
            size={['md', 'lg']}
            p={{ lg: '1.95rem' }}
            color={'white'}
            border={'2px solid #3a6d2b'}
            rounded={'full'}
            bg="linear-gradient(120deg, rgba(91,92,91,1) 0%, rgba(44,44,43,1) 100%)"
            _hover={{
              bg: 'linear-gradient(120deg, rgba(91,92,91,1) 0%, rgba(44,44,43,1) 100%)',
              color: 'white',
            }}
            as={'a'}
            href={ResumePath}
            target="_blank"
          >
            <Text fontSize={{ xl: '3xl', lg: '2xl', md: 'xl' }}>know more</Text>
          </Button>
          {/* </Link> */}
        </Box>
      </Flex>
    </>
  );
};
// bg
// 292929
// 1c1c1c

const RightComponent = () => {
  return (
    <>
      <Flex
        className="animate__animated animate__fadeInRight animate__delay-900ms"
        overflow={'hidden'}
        // h={{ xl: '30vmax' }}
        justifyContent={'center'}
        alignItems={'center'}
        width={{ md: '50vw' }}
      >
        <Image
          src={Motor}
          objectFit={'cover'}
          w={{ xl: '65%', lg: '60%', md: '55%' }}
        />
        {/* 1st box */}
      </Flex>
    </>
  );
};
