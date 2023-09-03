'use strict';

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


const Links = ['', '', ''];

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
            <Box fontSize={[ 18, 30, 40 ]} w={[150, 280, 400]}>
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
          <Flex alignItems="center">
            <Button
              variant="solid"
              colorScheme="teal"
              size="xs"
              fontSize={[ 12, 14, 18 ]}
              w={[20, 100, 120]}
              h={10}
              mr={4}
              padding={6}
              leftIcon={<AddIcon />}
              as={Link}
              href="/register"
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