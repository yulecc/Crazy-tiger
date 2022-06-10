import React, { lazy, Suspense } from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {  Center } from "@chakra-ui/react";
import Fonts from './fonts'
import theme from './theme'

const Home = lazy(() => import("./views/Home"));

export const App = () => (
  <ChakraProvider theme={theme}>
    <Suspense fallback={<Center maxW='100%' minH="100vh"><img src="./images/ball.gif" alt="" /></Center>}>
          <Fonts />
          <Home />
      </Suspense>
  </ChakraProvider>
);
