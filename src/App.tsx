import React, { lazy, Suspense } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  extendTheme
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Container, Center } from "@chakra-ui/react";

const Home = lazy(() => import("./views/Home"));

const overrides = extendTheme({
  config: {
    cssVarPrefix: 'akai',
    initialColorMode: 'dark'
  },
})

export const App = () => (
  <ChakraProvider theme={overrides}>
    <Suspense fallback={<Center maxW='100%' minH="100vh">Welcome to AKAI.</Center>}>
          <Home />
      </Suspense>
  </ChakraProvider>
);
