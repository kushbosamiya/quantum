// import "./App.css";
import React, { StrictMode, Suspense } from "react";
import { lazy } from "@loadable/component";

import {
  Box,
  Center,
  Spinner,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";


// analytics 
import { Analytics } from '@vercel/analytics/react';

// custom fonts
import CustomFonts from "../src/Assets/custom-fonts";

function App() {
  const Home = lazy(() => import("../src/Pages/HomePage"));

  // plse add gentona book fonts
  const theme = extendTheme({
    textStyles: {
      Gentona: {
        fontFamily: `'Gentona', sans-serif`,
      },
      Gentona_Medium: {
        fontFamily: `'Gentona Medium', sans-serif`,
      },
      Gentona_Book: {
        fontFamily: `'Gentona Book', sans-serif`,
      },
      Gentona_Book_italic: {
        fontFamily: `'Gentona Book italic', sans-serif`,
      },
      Gentona_Book_Bold: {
        fontFamily: `'Gentona Book Bold', sans-serif`,
      },
      Gentona_Thin: {
        fontFamily: `'Gentona Thin', sans-serif`,
      },
    },
  });

  // preloader
  const renderLoader = () => (
    <>
      <Box>
        <Center w="100%" minH="100vh">
          <Spinner size="xl" mt="12" />
        </Center>
      </Box>
    </>
  );
  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomFonts />

        <Suspense fallback={renderLoader()}>
          <>
            <Home />
            <Analytics />
          </>
        </Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;
