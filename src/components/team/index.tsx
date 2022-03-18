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
import evan from 'assets/images/evan.png';
import moon from 'assets/images/moon.png';
import b from 'assets/images/b.png';

const Team = () => {
  return (
    <>
      <Box id="team">
        <ScrollText text="AKAI-TEAM" />
      </Box>
      <Center py="100px">
        <Stack direction={["column", "row"]} spacing="50px">
          <Box w="280px">
            <VStack>
              <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={evan}
                  alt="evan"
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
          <Box w="280px">
            <VStack>
              <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={moon}
                  alt="moon"
                />
              </Box>
              <Box>Moon</Box>
              <Box>Developer</Box>
            </VStack>
          </Box>
          <Box w="280px">
            <VStack>
              <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                <Image
                  boxSize="280px"
                  borderRadius="lg"
                  src={b}
                  alt="Broccoli"
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
