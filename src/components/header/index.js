import React, { useEffect } from "react";
import { Box, Center, Container, Link, Flex, Button, Spacer, Image, HStack, Show } from "@chakra-ui/react";
import "./index.css";
import discord from 'assets/images/discord.svg'
import twitter from 'assets/images/twitter.svg'

const Header = () => {

  useEffect(()=>{

  },[])

  const heightToTop = (ele) => {
    let root = document.body;
    let height = 0;
    do{
      height += ele.offsetTop;
      ele = ele.offsetParent;
    } while(ele !== root);
    return height;
  }

  const handleClick = (e)=>{
    console.log(e,'eeeeeeeee')
    window.scrollTo({
      top: heightToTop(e.target),
      behavior: 'smooth'
    })
  }

  return (
    <Container maxW='100%'>
      <Flex h='80px' alignItems='center'>
        <Show above="lg">
          <Box p='2'>
            <HStack gap={2}>
              <Link isExternal href="https://twitter.com/AkaiNft">
                <Image boxSize='30px' src={twitter} />
              </Link>
              <Link isExternal href="https://discord.gg/fNR5TBrxbH">
                <Image boxSize='30px' src={discord} />
              </Link>
            </HStack>
          </Box>
        </Show>

        <Spacer />
        <Box>
          <Button onClick={()=>{
            document.getElementById('about').scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            })
          }} color='#fff' _hover={{ color: '#b01022' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} mr='4' variant='ghost'>
            ABOUT
          </Button>
          <Button onClick={()=>{
            document.getElementById('roadmap').scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            })
          }} color='#fff' _hover={{ color: '#b01022' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>ROADMAP</Button>
          <Button onClick={()=>{
            document.getElementById('team').scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            })
          }} color='#fff' _hover={{ color: '#b01022' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>TEAM</Button>
          <Button onClick={()=>{
            document.getElementById('faq').scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            })
          }} color='#fff' _hover={{ color: '#b01022' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>FAQ</Button>
        </Box>
      </Flex>
      <Center h='100vh'>
        <div className="sign" style={{ fontSize: '40vmin' }}>
          <span className="fast-flicker">A</span>k<span className="flicker">A</span>I
        </div>
      </Center>
    </Container>

  );
};
export default Header;
