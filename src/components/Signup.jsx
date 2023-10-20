import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Spacer,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as contentEn from './content-en';
import * as contentEs from './content-es';
import styled from 'styled-components';



import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import axios from 'axios';

const A = styled.a`
  text-decoration: underline;
`;

export default function Signup({ lang }) {
    const content = lang === 'en' ? contentEn : contentEs;  
    const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
          {content.signup.headingText}
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          {content.signup.subheadingText}
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
           
            <Stack mt={5}>
              <Button isLoading={false} onClick={() => signIn('google')} display="flex" maxW={55} ml={20} >
                <Image src="/google-logo.png" height={20} width={20} alt={'Google Logo'}/>
                <Spacer px={1} />
                <Box bg="blue.500" color="white" p={3} borderRadius="md" w={52}>
                  Sign up with Google
                </Box>
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
              {content.signup.loginLinkText} <A href="/login">{content.signup.loginLink}</A>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}