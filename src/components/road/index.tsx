import React from "react";
import { Center, Box, Text, Stack, VStack } from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";

const RoadMap = () => {
  return (
    <>
      <Box id="roadmap">
        <ScrollText text="AKAI ROADMAP" />
      </Box>
      <Center py="50px">
        <Stack direction={["column", "row"]} spacing="30px">
          <Box w="250px">
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
              <Box textAlign="left">Launch Twitter</Box>
              <Box textAlign="left">Launch Discord</Box>
              <Box textAlign="left">Launch Website</Box>
              <Box textAlign="left">Cnft Calendar Listing</Box>
            </VStack>
          </Box>
          <Box w="250px">
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
              <Box>Mint 3500 Akai</Box>
              <Box>Secondary Market Listing</Box>
              <Box>Blueship Cnft Giveaway</Box>
              <Box>Cnft.tools Listing</Box>
            </VStack>
          </Box>
          <Box w="250px">
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
