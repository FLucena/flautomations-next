'use strict';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";
import React from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import * as contentEn from './content-en';
import * as contentEs from './content-es';

const Links = [''];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
      fontSize="4xl"
    >
      {children}
    </Box>
  );
};

export default function Navbar({ lang }) {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const content = lang === 'en' ? contentEn : contentEs;

  

  return (
    <React.Fragment>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w="100%">
        <Flex
          h={20}
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <HStack
            spacing={8}
            alignItems="center"
            justifyContent="flex-start"
            w="full"
          >
            <Box fontSize={[10, 20, 40]} w={[59, 200, 300]}>
              <Link href="/">FL Automations</Link>
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex marginRight={5}>
            <a href='https://cafecito.app/flautomations' rel='noopener' target='_blank'>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src='/button_6.png'
                  alt='Invitame un café en cafecito.app'
                  width={210}
                  height={120}
                  minWidth={30}
                  srcSet={[
                    '/imgs/buttons/button_6.png 1x',
                    '/imgs/buttons/button_6_2x.png 2x',
                    '/imgs/buttons/button_6_3.75x.png 3.75x',
                  ]}
                />
              </motion.div>
            </a>
          </Flex>
          <Flex alignItems="center">
            {session ? (
              <>
                <Menu>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                  minW={0}
                >
                  <Avatar name={session.user.name} size="sm" src={session.user.image} />
                </MenuButton>
                <MenuList> 
                  <MenuItem>
                    <Link href="/searchPage">🔍 {content.navbar.search}</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link href="/favorites">❤️ {content.navbar.favorites}</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link onClick={() => signOut()} href="">✖️{content.navbar.signOut}</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              </>
            ) : (
              <Flex flexDirection="row">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    variant="solid"
                    colorScheme="#47B3E7"
                    bg={'#47B3E7'}
                    size="xs"
                    fontSize={[10, 12, 16]}
                    w={[20, 100, 100]}
                    h={[5,5,5]}
                    mr={4}
                    padding={4}
                    leftIcon={<AddIcon />}
                    as={Link}
                    href="/login"
                    display={{ base: "none", md: "inline-flex" }}
                  >
                    {content.navbar.buttonText}
                  </Button>
                </motion.div>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  cursor="pointer"
                  minW={0}
                >
                  <Avatar name="New User" size="sm" src="" />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="/login">🔑 {content.navbar.login}</Link>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Link href="/searchPage">🔍 {content.navbar.search}</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
          </Flex>
        </Flex>
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </React.Fragment>
  );
}