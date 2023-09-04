import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Stack, Spacer, Input, Text } from '@chakra-ui/react';
import * as contentEn from './content-en';
import * as contentEs from './content-es';

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
        <FormTitle>{content.login.headingText}</FormTitle>
          <InputContainer>
            <Input mt={5} placeholder={content.login.emailLabel} type="email" />
            <Span>
              <SVG stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              </SVG>
            </Span>
          </InputContainer>
        <InputContainer>
            <Input mt={5} placeholder={content.login.passwordLabel} type={showPassword ? 'text' : 'password'} />
            <Span onClick={handlePasswordToggle}>
            {showPassword ? (
              <SVG
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              </SVG>
            ) : (
              <SVG stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" d="M1.60603 6.08062C2.11366 5.86307 2.70154 6.09822 2.9191 6.60585L1.99995 6.99977C2.9191 6.60585 2.91924 6.60618 2.9191 6.60585L2.91858 6.60465C2.9183 6.604 2.91851 6.60447 2.91858 6.60465L2.9225 6.61351C2.92651 6.62253 2.93339 6.63785 2.94319 6.65905C2.96278 6.70147 2.99397 6.76735 3.03696 6.85334C3.12302 7.02546 3.25594 7.27722 3.43737 7.58203C3.80137 8.19355 4.35439 9.00801 5.10775 9.81932C5.28532 10.0105 5.47324 10.2009 5.67173 10.3878C5.68003 10.3954 5.68823 10.4031 5.69633 10.4109C7.18102 11.8012 9.25227 12.9998 12 12.9998C13.2089 12.9998 14.2783 12.769 15.2209 12.398C16.4469 11.9154 17.4745 11.1889 18.3156 10.3995C19.2652 9.50815 19.9627 8.54981 20.4232 7.81076C20.6526 7.44268 20.8207 7.13295 20.9299 6.91886C20.9844 6.81192 21.0241 6.72919 21.0491 6.67538C21.0617 6.64848 21.0706 6.62884 21.0758 6.61704L21.0808 6.60585C21.2985 6.0985 21.8864 5.86312 22.3939 6.08062C22.9015 6.29818 23.1367 6.88606 22.9191 7.39369L22 6.99977C22.9191 7.39369 22.9192 7.39346 22.9191 7.39369L22.9169 7.39871L22.9134 7.40693L22.9019 7.43278C22.8924 7.4541 22.879 7.48354 22.8618 7.52048C22.8274 7.59434 22.7774 7.69831 22.7115 7.8275C22.5799 8.08566 22.384 8.44584 22.1206 8.86844C21.718 9.5146 21.152 10.316 20.4096 11.1241L21.2071 11.9215C21.5976 12.312 21.5976 12.9452 21.2071 13.3357C20.8165 13.7262 20.1834 13.7262 19.7928 13.3357L18.9527 12.4955C18.3884 12.9513 17.757 13.3811 17.0558 13.752L17.8381 14.9544C18.1393 15.4173 18.0083 16.0367 17.5453 16.338C17.0824 16.6392 16.463 16.5081 16.1618 16.0452L15.1763 14.5306C14.4973 14.7388 13.772 14.8863 13 14.9554V16.4998C13 17.0521 12.5522 17.4998 12 17.4998C11.4477 17.4998 11 17.0521 11 16.4998V14.9556C10.2253 14.8864 9.50014 14.7386 8.82334 14.531L7.83814 16.0452C7.53693 16.5081 6.91748 16.6392 6.45457 16.338C5.99165 16.0367 5.86056 15.4173 6.16177 14.9544L6.94417 13.7519C6.24405 13.3814 5.61245 12.9515 5.04746 12.4953L4.20706 13.3357C3.81654 13.7262 3.18337 13.7262 2.79285 13.3357C2.40232 12.9452 2.40232 12.312 2.79285 11.9215L3.59029 11.1241C2.74529 10.2043 2.12772 9.292 1.71879 8.605C1.5096 8.25356 1.35345 7.95845 1.2481 7.74776C1.19539 7.64234 1.15529 7.55783 1.12752 7.49771C1.11363 7.46765 1.10282 7.44366 1.09505 7.42618L1.08566 7.4049L1.08267 7.39801L1.0816 7.39553L1.08117 7.39453C1.08098 7.39409 1.08081 7.39369 1.99995 6.99977L1.08117 7.39453C0.863613 6.8869 1.0984 6.29818 1.60603 6.08062Z" fill="#1C274C"/>
              </SVG>
              )}
            </Span>
          </InputContainer>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'#008080'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              marginTop="1rem">
              {content.login.loginButtonLabel}
            </Button>
          </Stack>

        <SignupLink >
        {content.login.signUpLinkText}
          <A href="/register">{content.login.signUpLink}</A>
        </SignupLink>
        <Stack mt={5}>
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