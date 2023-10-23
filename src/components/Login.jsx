import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Stack, Spacer, Input, Text } from '@chakra-ui/react';
import * as contentEn from './content-en';
import * as contentEs from './content-es';
import axios from 'axios';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;

  @media (max-width: 768px) {
    margin: 2rem 1rem 2rem 3rem;
  }
`;

const Form = styled.form`
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 350px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem 0.5rem;
  }
`;

const FormTitle = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Span = styled.span`
  display: grid;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding-right: 1rem;
  margin-top: 2rem;
`;

const SVG = styled.svg`
  color: #9CA3AF;
  width: 1rem;
  height: 1rem;
`;


const SignupLink = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-top: 1rem;
`;

const A = styled.a`
  text-decoration: underline;
`;

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return [showPassword, handlePasswordToggle];
};

const Login = ({ lang }) => {
  const { data: session } = useSession();
  const content = lang === 'en' ? contentEn : contentEs;  
  const [showPassword, handlePasswordToggle] = usePasswordToggle();

  useEffect(() => {
    const handleUserData = async () => {
      try {
        await axios.post('/api/setUserInfo', { id: session.user.email });
      } catch (error) {
        console.error('Error getting data: ', error);
      }
    };

    if (session) {
      handleUserData();
    }
  }, );

  if (session) {
    return (
      <FormContainer>
        <Form>
          <FormTitle>SESION YA INICIADA</FormTitle>
          <Stack spacing={2} align="center">
            <Text align="center" my={'1rem'}>Conectado como {session.user.email} </Text>
            <Button
              size="lg"
              bg={'#E53E3E'} // Red color for sign out button
              color={'white'}
              _hover={{
                bg: 'red.500', // Hover color
              }}
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </Stack>
        </Form>
      </FormContainer>
    )
  }

  return (
    <FormContainer>
      <Form>
        <Stack mt={5} w={215}>
          <FormTitle mb={20}>{content.login.headingText}</FormTitle>
          <Button isLoading={false} onClick={() => signIn('google')} display="flex" maxW={55} ml={20} >
            <Image src="/google-logo.png" height={20} width={20} alt={'Google Logo'}/>
            <Spacer px={1} />
            <Box bg="blue.500" color="white" p={3} borderRadius="md" w={52}>
              Sign in with Google
            </Box>
          </Button>
        </Stack>
      </Form>
    </FormContainer>
  );
};

export default Login;