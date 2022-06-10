import React from "react";
import { Container, Center, Box, Image, Text, Stack, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./index.css";

const About = () => {
  const slidesPerView = useBreakpointValue({ base: 1, md: 1, lg: 4, xl: 4, xxl: 4 });

  return (
    <Container id="about" py="100px" bg="#000" maxW="100%">
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 16 }} mb="20px">
        <Center h="100%">
          <Stack textAlign="center" color='orange'>
            <Text mt={2} fontSize="20px" lineHeight="32px">
              3000 unique Crazy Tigers on the Cardano blockchain
            </Text>
            <Text fontSize="20px">
              Membership to CTT and all of the benefits come from holding a CTT
              NFT{" "}
            </Text>
            <Text fontSize="20px">Let's build CTT together</Text>
          </Stack>
        </Center>
      </Box>
      <Center className="swiper-box">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          speed={500}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image src="./images/about1.png" alt="n1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about2.jpg" alt="n2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about3.jpg" alt="n3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about4.png" alt="n4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about5.jpg" alt="n5" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about6.png" alt="n6" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about7.jpg" alt="n7" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about8.png" alt="n8" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about9.png" alt="n9" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="./images/about10.png" alt="n10" />
          </SwiperSlide>
        </Swiper>
      </Center>
    </Container>
  );
};

export default About;
