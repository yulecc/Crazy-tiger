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
    <Box h='200px' bg='#b01022' pt='60px'>
      <Center>
        <Stack spacing={5} maxW='80%'>
          <HStack gap={2} justify='center'>
            <Link isExternal href="https://twitter.com/AkaiNft">
              <Image boxSize='30px' src={twitter} />
            </Link>
            <Link isExternal href="https://discord.gg/fNR5TBrxbH">
            <Image boxSize='30px' src={discord} />
            </Link>
          </HStack>
          <Text textAlign='center' color="#000" fontWeight={600}>Policy: 8f0b3775054e72679e7188df7583bf44c85ccde4b070eef2a10d0231</Text>
        </Stack>
      </Center>
    </Box>
  );
};
export default Footer;
