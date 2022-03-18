import React from "react";
import {
  Container,
  Center,
  Box,
  Image,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";

const Team = () => {
  return (
    <>
      <Box id="team">
        <ScrollText text="AKAI-TEAM" />
      </Box>
      <Center py="50px">
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
              <Box>Launch Twitter</Box>
              <Box>Launch Discord</Box>
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
              <Box>Mint 3500 Akai</Box>
              <Box>Secondary Market Listing</Box>
              <Box>Blueship Cnft Giveaway</Box>
              <Box>Cnft.tools Listing</Box>
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
              <Box>Akai Series 2</Box>
              <Box>Akai Holders' Giveaway</Box>
              <Box>Cardano Stake Pool for Akai</Box>
              <Box>More plans in the future......</Box>
            </VStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
};
export default Team;
