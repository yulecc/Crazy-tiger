import React from "react";
import { Center, Box, Text, Stack, VStack, HStack } from "@chakra-ui/react";
import "./index.css";
import ScrollText from "../../components/scrollText";

const RoadMap = () => {
  return (
    <>
      <Center py="100px" id="roadmap" bg='#000' px='20px'>
        <Stack direction={["column", "row"]} spacing="30px" h={['1400px', '900px']}>
          <Box  color='orange' h='full'>
            <Center><Text fontSize='30px' mb='30px'>ROADMAP</Text></Center>
            <HStack spacing={1} h={['1350px', '850px']} alignItems='space-between'>
              <Stack justify='space-between'  fontSize='18px'>
                <Text>Phase 1</Text>
                <Text>Phase 2</Text>
                <Text>Phase 3</Text>
                <Text>Phase 4</Text>
                <Text>Phase 5</Text>
                <Text>Phase 6</Text>
              </Stack>
              <Stack pos='relative' alignItems='space-between'>
                <Box className="sprite-line" h='full'></Box>
                <Stack className="dot-wrapper" h='full' pos='absolute' justify='space-between' alignItems='space-between'>
                  <Box className="dot"></Box>
                  <Box className="dot"></Box>
                  <Box className="dot"></Box>
                  <Box className="dot"></Box>
                  <Box className="dot"></Box>
                  <Box className="dot"></Box>
                </Stack>
                
              </Stack>
              <Stack fontSize='16px' h='auto' justify='space-between'>
                <Box>
                  <Text textAlign="left">Building a strong community </Text>
                  <Text textAlign="left">launch of the website, Twitter and Discord</Text>
                  <Text textAlign="left">Work with cnft projects to get that community growth. </Text>
                  <Text textAlign="left">Giveaway whitelist spots and more.</Text>
                </Box>
                <Box >
                  <Text textAlign="left">Minting day! </Text>
                  <Text textAlign="left">WL will mint in advance and the price will be discounted.</Text>
                  <Text textAlign="left">Post our rarity chart after minting</Text>
                </Box>
                <Box >
                  <Text textAlign="left">Collab with upcoming popular projects, </Text>
                  <Text textAlign="left">Whitelists giveaway of upcoming projects, </Text>
                  <Text textAlign="left">40% of the royalty income is distributed to the holders monthly </Text>
                </Box>
                <Box >
                  <Text textAlign="left">Start babytiger's nft project.</Text>
                  <Text textAlign="left">Free airdrop or low price to mint babytigers  </Text>
                </Box>
                <Box >
                  <Text textAlign="left">A launch pad for artists</Text>
                  <Text textAlign="left">Look for creative nft artists around the world to cooperate with us</Text>
                </Box>
                <Box>
                  <Text textAlign="left">Preparing for Roadmap 2.0</Text>
                </Box>
              </Stack>
            </HStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
};
export default RoadMap;
