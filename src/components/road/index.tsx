import React from "react";
import { Center, Box, Text, Stack, VStack } from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";

const RoadMap = () => {
  return (
    <>
      <Box id="roadmap">
        <ScrollText text="AKAI-ROADMAP" />
      </Box>
      <Center py="100px">
        <Stack direction={["column", "row"]} spacing="30px">
          <Box w="300px">
            <VStack>
              <Box
                borderBottom="4px"
                fontSize={"30px"}
                fontFamily={`'Acme', sans-serif;`}
                mb="12px"
              >
                Phase{" "}
                <Text as="span" fontSize="50px">
                  1
                </Text>
              </Box>
              <Box fontSize='22px' textAlign="left">Launch Twitter</Box>
              <Box fontSize='22px' textAlign="left">Launch Discord</Box>
              <Box fontSize='22px' textAlign="left">Launch Website</Box>
              <Box fontSize='22px' textAlign="left">Cnft Calendar Listing</Box>
            </VStack>
          </Box>
          <Box w="300px">
            <VStack>
              <Box
                borderBottom="4px"
                fontSize={"30px"}
                fontFamily={`'Acme', sans-serif;`}
                mb="12px"
              >
                Phase{" "}
                <Text as="span" fontSize="50px">
                  2
                </Text>
              </Box>
              <Box fontSize='22px'>Mint 3500 Akai</Box>
              <Box fontSize='22px'>Secondary Market Listing</Box>
              <Box fontSize='22px'>Blueship Cnft Giveaway</Box>
              <Box fontSize='22px'>Cnft.tools Listing</Box>
            </VStack>
          </Box>
          <Box w="300px">
            <VStack>
              <Box
                borderBottom="4px"
                fontSize={"30px"}
                fontFamily={`'Acme', sans-serif;`}
                mb="12px"
              >
                Phase{" "}
                <Text as="span" fontSize="50px">
                  3
                </Text>
              </Box>
              <Box fontSize='22px'>Akai Series 2</Box>
              <Box fontSize='22px'>Akai Holders' Giveaway</Box>
              <Box fontSize='22px'>Cardano Stake Pool for Akai</Box>
              <Box fontSize='22px'>More plans in the future......</Box>
            </VStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
};
export default RoadMap;
