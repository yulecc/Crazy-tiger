import React from "react";
import Header from "../../components/header";
import About from "../../components/about";
import RoadMap from "../../components/road";
import Team from "../../components/team";
import Footer from "../../components/footer";
import Benefits from "../../components/benefits";
import { Container, Center, Box } from "@chakra-ui/react";


const Home = () => {
  return (
    <Box maxW='100%' minH="100vh" bgColor="orange">
        <Header />
        <About />
        <RoadMap />
        <Benefits />
        <Team />
        <Footer />
    </Box>
  );
};
export default Home;
