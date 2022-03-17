import React from "react";
import Header from "../../components/header";
import About from "../../components/about";
import RoadMap from "../../components/road";
import Team from "../../components/team";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
import { Container, Center, Box } from "@chakra-ui/react";


const Home = () => {
  return (
    <Box maxW='100%' minH="100vh">
        <Header />
        <About />
        <RoadMap />
        <Team />
        <Faq />
        <Footer />
    </Box>
  );
};
export default Home;
