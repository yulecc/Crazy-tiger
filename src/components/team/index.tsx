import React from "react";
import {
  Container,
  Center,
  Box,
  Image,
  Text,
  Stack,
  Flex,
  HStack,
  VStack,
  Link
} from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";
import twitter from 'assets/images/twitter.svg';

const Team = () => {
  return (
    <>
      <Box id="team">
        <ScrollText text="AKAI-TEAM" />
      </Box>
      <Center py="100px">
        <Stack direction={["column", "row"]} spacing="50px">
          <Box w="250px">
            <VStack>
              <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1112/20211112023309449.jpg.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box>
                <HStack>
                  <Text>EVAN</Text> <Link isExternal href="https://twitter.com/akai_evan"><Image src={twitter} boxSize={5}/></Link>
                </HStack>
              </Box>
              <Box>Founder&Marketing</Box>
            </VStack>
          </Box>
          <Box w="250px">
            <VStack>
              <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1112/20211112023309449.jpg.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box>Moon</Box>
              <Box>Developer</Box>
            </VStack>
          </Box>
          <Box w="250px">
            <VStack>
              <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src="https://img.syt5.com/2021/1112/20211112023309449.jpg.1080.1920.jpg"
                  alt="Woman paying for a purchase"
                />
              </Box>
              <Box>Broccoli</Box>
              <Box>Artist</Box>
            </VStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
};
export default Team;
