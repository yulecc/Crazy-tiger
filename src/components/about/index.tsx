import React from "react";
import { Container, Center, Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "./index.css";
import ScrollText from "../../components/scrollText";
import n1 from "assets/images/n1.png"
import n2 from "assets/images/n2.png"
import n3 from "assets/images/n3.png"
import n4 from "assets/images/n4.png"
import n5 from "assets/images/n5.png"
import n6 from "assets/images/n6.png"

const About = () => {
  return (
    <>
      <Box id='about'>
        <ScrollText text="ABOUT-AKAI" />
      </Box>
      <Container maxW='4xl' py='100px'>
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
                  src={n1}
                  alt="n1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={n2}
                  alt="n2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={n3}
                  alt="n3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={n4}
                  alt="n4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={n5}
                  alt="n5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={n6}
                  alt="n6"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 16 }}>
            <Center h="100%">
              <Text mt={2} color="#fff" fontSize='20px' lineHeight="32px">
                Akai is a collection of 3500 anime nfts made by anime
                lovers. We're committed to building something for the long
                term. Our vision is to build the best anime community on the
                Cardano blockchain. 40% of the royalties on secondary sales will
                be used to support the development of the project.
                Follow us on Twitter and Join us on Discord for up-to-date
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
