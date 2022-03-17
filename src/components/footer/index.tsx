import React from "react";
import {
  Container,
  Center,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Link
} from "@chakra-ui/react";
import discord from "assets/images/discord.svg";
import twitter from "assets/images/twitter.svg";

const Footer = () => {
  return (
    <Box h='200px' bg='#b01022' pt='50px'>
      <Center>
        <Stack spacing={3}>
          <HStack gap={2}>
            <Link isExternal href="https://twitter.com/AkaiNft">
              <Image boxSize='30px' src={twitter} />
            </Link>
            <Link isExternal href="https://discord.gg/fNR5TBrxbH">
            <Image boxSize='30px' src={discord} />
            </Link>
          </HStack>
          {/* <Text>Policy: </Text> */}
        </Stack>
      </Center>
    </Box>
  );
};
export default Footer;
