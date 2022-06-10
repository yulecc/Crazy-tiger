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
  Link,
} from "@chakra-ui/react";

const Team = () => {
  return (
    <>
      <Center py="100px" id="team" bg="#000" color='orange'>
        <Stack spacing="50px">
          <Center fontSize='30px' mb='16px'>TEAM</Center>
          <Stack direction={["column", "row"]} spacing="50px">
            <Box w="280px">
              <VStack spacing={1}>
                <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                  <Image
                    boxSize="280px"
                    
                    src='./images/team1.jpg'
                    alt="evan"
                  />
                </Box>
                <Box>
                  <HStack>
                    <Text fontSize="20px">Snowman</Text>{" "}
                  </HStack>
                </Box>
                <Box>Founder</Box>
                <Box>Project Manager</Box>
              </VStack>
            </Box>
            <Box w="280px">
              <VStack spacing={1}>
                <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                  <Image
                    boxSize="280px"
                    
                    src='./images/team2.jpg'
                    alt="Be Better"
                  />
                </Box>
                <Box fontSize="20px">
                  <HStack>
                    <Text fontSize="20px">Be Better</Text>{" "}
                  </HStack>
                </Box>
                <Box>Co-founder, Artist</Box>
                <Box>Creative Director</Box>
              </VStack>
            </Box>
            <Box w="280px">
              <VStack spacing={1}>
                <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                  <Image
                    boxSize="280px"
                    
                    src='./images/team3.jpg'
                    alt="Moon"
                  />
                </Box>
                <Box fontSize="20px">Jack</Box>
                <Box>Co-founder</Box>
                <Box>Developer</Box>
              </VStack>
            </Box>
          </Stack>
          <Stack direction={["column", "row"]} spacing="50px">
            <Box w="280px">
              <VStack spacing={1}>
                <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                  <Image
                    boxSize="280px"
                    
                    src='./images/team4.jpg'
                    alt="LaiLoLaiLo"
                  />
                </Box>
                <Box>
                  <HStack>
                    <Text fontSize="20px">LaiLoLaiLo</Text>{" "}
                  </HStack>
                </Box>
                <Box>Mod Manager</Box>
              </VStack>
            </Box>
            <Box w="280px">
              <VStack spacing={1}>
                <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                  <Image
                    boxSize="280px"
                    
                    src='./images/team5.jpg'
                    alt="Asta"
                  />
                </Box>
                <Box fontSize="20px">
                  <HStack>
                    <Text fontSize="20px">Asta</Text>{" "}
                  </HStack>
                </Box>
                <Box>Mod</Box>
              </VStack>
            </Box>
            <Box w="280px">
              <VStack spacing={1}>
                <Box fontFamily={`'Acme', sans-serif;`} mb="20px">
                  <Image
                    boxSize="280px"
                    
                    src='./images/team6.png'
                    alt="Hayayi"
                  />
                </Box>
                <Box fontSize="20px">Hayayi</Box>
                <Box>Mod</Box>
              </VStack>
            </Box>
          </Stack>
        </Stack>
      </Center>
    </>
  );
};
export default Team;
