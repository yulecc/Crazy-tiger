import React from "react";
import Header from "../../components/header";
import About from "../../components/about";
import RoadMap from "../../components/road";
import { Container, Center, Box } from "@chakra-ui/react";


const Home = () => {
  return (
    <Container maxW='100%' minH="100vh">
        <Header />
        <About />
        <RoadMap />
    </Container>
  );
};
export default Home;
