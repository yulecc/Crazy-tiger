import React from "react";
import { Container, Center, Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./index.css";
import ScrollText from "../../components/scrollText";

const About = () => {
  return (
    <>
      <Box id='about'>
        <ScrollText text="ABOUT-AKAI" />
      </Box>
      <Container maxW='4xl' py='50px'>
        <Box display={{ md: "flex" }}>
          <Box flexShrink={0}>
            <Swiper
              modules={[Autoplay]}
              // width={500}
              spaceBetween={10}
              speed={500}
              // slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1112/20211112023309449.jpg.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1216/20211216084736236.jpg.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1216/20211216084736929.jpg.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1216/20211216084736802.png.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Center h="100%">
              <Text mt={2} color="#fff" lineHeight="28px">
                Akai is a collection of 3500 anime nfts made by anime
                lovers.We're committed to building something for the long
                term.Our vision is to build the best anime community on the
                Cardano blockchain. 40% of the royalties on secondary sales will
                be used to support the development of the project.
                <br />
                Follow us on Twitter and Join us Discord for up-to-date
                information.
              </Text>
            </Center>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default About;
