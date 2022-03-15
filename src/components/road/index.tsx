import React from "react";
import { Container, Center, Box, Image, Text, Stack, VStack } from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";

const RoadMap = () => {
  return (
    <>
      <ScrollText text="ROAD MAP" />
      <Center>
        <Stack direction={['column', 'row']} spacing="30px">
          <Box w="250px" h="250px">
            <VStack>
                <Box fontFamily={`'Acme', sans-serif;`}>Phase 1</Box>
                <Box>Launch Twitter</Box>
                <Box>Launch Discord</Box>
                <Box>Launch Website</Box>
                <Box>Cnft Calendar Listing</Box>
            </VStack>
          </Box>
          <Box w="250px" h="250px">
          <VStack>
                <Box fontFamily={`'Acme', sans-serif;`}>Phase 2</Box>
                <Box>Mint 3500 Akai</Box>
                <Box>Secondary Market Listing</Box>
                <Box>Blueship Cnft Giveaway</Box>
                <Box>Cnft.tools Listing</Box>
            </VStack>
          </Box>
          <Box w="250px" h="250px">
          <VStack>
                <Box fontFamily={`'Acme', sans-serif;`}>Phase 3</Box>
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
export default RoadMap;
