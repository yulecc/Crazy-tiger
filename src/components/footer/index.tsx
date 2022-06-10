import React from "react";
import {
  Container,
  Center,
  Box,
  Image,
  Text,
  Stack,
  VStack,
  HStack,
  Link,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import discord from "assets/images/discord.svg";
import twitter from "assets/images/twitter.svg";

const Footer = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box h={['300px', '200px']} bg="orange" pt="90px" color="#000" px="20px">
      {isLargerThan768 ? (
        <Flex justify="space-around">
          <Text color="#000" fontWeight={600}>
            Policy: 02b299d863deb06171809f7c7393a1e2da199932f16e6c38f0185ebf
          </Text>
          <Text color="#000" fontWeight={600}>
            ©copyright Crazy Tiger Tribe 2022
          </Text>
          <HStack gap={2} justify="center">
            <Link isExternal href="https://twitter.com/CrazyTigerTribe">
              <Image boxSize="30px" src={twitter} />
            </Link>
            <Link isExternal href="https://discord.com/invite/4EtfYpjQ2c">
              <Image boxSize="30px" src={discord} />
            </Link>
          </HStack>
        </Flex>
      ) : (
        <VStack style={{ textAlign: "center" }} gap={2}>
          <Text color="#000" fontWeight={600}>
            Policy:
          </Text>
          <Text style={{ wordBreak: "break-all" }}>
            02b299d863deb06171809f7c7393a1e2da199932f16e6c38f0185ebf
          </Text>
          <Text color="#000" fontWeight={600}>
            ©Copyright Crazy Tiger Tribe 2022
          </Text>
          <HStack gap={2} justify="center">
            <Link isExternal href="https://twitter.com/CrazyTigerTribe">
              <Image boxSize="30px" src={twitter} />
            </Link>
            <Link isExternal href="https://discord.com/invite/4EtfYpjQ2c">
              <Image boxSize="30px" src={discord} />
            </Link>
          </HStack>
        </VStack>
      )}
    </Box>
  );
};
export default Footer;
