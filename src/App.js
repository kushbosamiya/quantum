import React from 'react';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';
// external styles with fonts
import './App.css';

// components
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <HeroSection />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
