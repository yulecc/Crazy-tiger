import React, { useEffect } from "react";
import {
  Box, Center, Container, Link, Flex, Button, Spacer, Image, HStack, Show, Stack, Heading,
  Menu, MenuButton, IconButton, MenuList, MenuItem
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import "./index.css";

import tigerBg from 'assets/images/tiger-bg.png'

const Header = () => {

  return (
    <Container h='100vh' maxW='100%' p={0} 
      background='url(./images/header-bg.jpg) no-repeat center'
      backgroundSize='contain'
    >
      <Flex h='80px' alignItems='center' justify='flex-end' pr='10px'>
        <Show above='md'>
          <Box>
            <Button onClick={() => {
              document.getElementById('home').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              })
            }} color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} mr='4' variant='ghost'>
              HOME
            </Button>
            <Button onClick={() => {
              document.getElementById('about').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              })
            }} color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} mr='4' variant='ghost'>
              ABOUT
            </Button>
            <Button onClick={() => {
              document.getElementById('roadmap').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              })
            }} color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>ROADMAP</Button>
            <Button onClick={() => {
              document.getElementById('benefits').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              })
            }} color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>BENEFITS</Button>
            <Button onClick={() => {
              document.getElementById('team').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              })
            }} color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>TEAM</Button>

          </Box>
        </Show>
        <Show below='sm'>
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
              <MenuList style={{background: 'orange'}}>
                <MenuItem onClick={() => {
                    document.getElementById('home').scrollIntoView({
                      block: 'start',
                      behavior: 'smooth'
                    })
                  }}>
                  <Button  color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} mr='4' variant='ghost'>
                    HOME
                  </Button>
                </MenuItem>
                <MenuItem onClick={() => {
                    document.getElementById('about').scrollIntoView({
                      block: 'start',
                      behavior: 'smooth'
                    })
                  }} >
                  <Button  color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} mr='4' variant='ghost'>
                    ABOUT
                  </Button>
                </MenuItem>
                <MenuItem onClick={() => {
                    document.getElementById('roadmap').scrollIntoView({
                      block: 'start',
                      behavior: 'smooth'
                    })
                  }}>
                  <Button  color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>ROADMAP</Button>
                </MenuItem>
                <MenuItem onClick={() => {
                    document.getElementById('benefits').scrollIntoView({
                      block: 'start',
                      behavior: 'smooth'
                    })
                  }}>
                  <Button  color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>BENEFITS</Button>
                </MenuItem>
                <MenuItem onClick={() => {
                    document.getElementById('team').scrollIntoView({
                      block: 'start',
                      behavior: 'smooth'
                    })
                  }}>
                  <Button  color='#000' _hover={{ color: '#fff' }} _focus={{ border: 'none' }} _active={{ background: 'none' }} variant='ghost'>TEAM</Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Show>

      </Flex>
      <Center>
        <Stack textAlign='center'>
          <Heading style={{ fontSize: '66px', color: '#000', marginTop: '100px' }}>CRAZY TIGER TRIBE</Heading>
          {/* <img className="tiger-bg" src={tigerBg} alt="" /> */}
        </Stack>
      </Center>
    </Container>

  );
};
export default Header;
