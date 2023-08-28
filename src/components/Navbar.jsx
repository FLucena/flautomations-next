'use strict';

import React from 'react';
import Link from 'next/link';
import * as contentEn from './content-en';
import * as contentEs from './content-es';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
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
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['', '', ''];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

// ... (other imports)

export default function Navbar({ lang }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const content = lang === 'en' ? contentEn : contentEs;

  return (
    <React.Fragment>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <Link href="/">FL Automations</Link>
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Button
              variant="solid"
              colorScheme="teal"
              size="sm"
              mr={4}
              leftIcon={<AddIcon />}
            >
              {content.navbar.buttonText}
            </Button>
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
                  <Link href="/register">💾 {content.navbar.register}</Link>
                </MenuItem>
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
