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
  Heading,
  Link,
} from "@chakra-ui/react";
import ScrollText from "../../components/scrollText";
import twitter from "assets/images/twitter.svg";
import evan from "assets/images/evan.png";
import moon from "assets/images/moon.png";
import Broccoli from "assets/images/b.png";

const Team = () => {
  return (
    <>
      <Center py="100px" id="benefits" bg="#000" color="orange">
        <Stack spacing="50px">
          <Center fontSize="30px" mb="40px">
            BENEFITS
          </Center>

          <Flex direction={["column", "row"]} gap='50px' justify="space-between">
            <Box
              w="280px"
              border="1px solid orange"
              px="15px"
              h="260px"
              mb="20px"
              mx="10px"
            >
              <VStack spacing={4}>
                <Text fontSize="xl" mt="40px">
                  Royalty Revenue Sharing
                </Text>
                <Text mt={4}>
                  40% of the royalties will be distributed to the holders. If
                  the amount of royalties is not enough we will buy valuable
                  nfts for lottery.
                </Text>
              </VStack>
            </Box>
            <Box
              w="280px"
              border="1px solid orange"
              px="15px"
              h="260px"
              mb="20px"
              mx="10px"
            >
              <VStack spacing={4}>
                <Text fontSize="xl" mt="40px">
                  CNFT Whitelist
                </Text>
                <Text mt={4}>
                  We will collab with upcoming popular projects, choose which
                  project will be voted by holders, we will strive for the more
                  whitelists of the project
                </Text>
              </VStack>
            </Box>
            <Box
              w="280px"
              border="1px solid orange"
              px="15px"
              h="260px"
              mb="20px"
              mx="10px"
            >
              <VStack spacing={4}>
                <Text fontSize="xl" mt="40px">
                  CNFT Airdrops
                </Text>
                <Text mt={4}>
                  We want to bring more artists onto cardano. We will look for
                  creative nft artists around the world to airdrop nfts for
                  holders.{" "}
                </Text>
              </VStack>
            </Box>
          </Flex>
        </Stack>
      </Center>
    </>
  );
};
export default Team;
