import React, { lazy, Suspense } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Container, Center } from "@chakra-ui/react";

const Home = lazy(() => import("./views/Home"));

export const App = () => (
  <ChakraProvider theme={theme}>
    <Suspense fallback={<Center maxW='100%' minH="100vh">Welcome to AKAI.</Center>}>
          <Home />
      </Suspense>
  </ChakraProvider>
);
