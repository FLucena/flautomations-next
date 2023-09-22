import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import * as contentEn from './content-en';
import * as contentEs from './content-es';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer({ lang }) {
  const content = lang === 'en' ? contentEn : contentEs;
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
          <Stack align={['flex-start', 'center']} mx={['0', 'auto']}>
            <ListHeader>{content.companyContent.header}</ListHeader>
            <Box as="a" href={'./aboutus'}>
            {content.companyContent.aboutUs}
            </Box>
            <Box as="a" href={'./contactus'}>
            {content.companyContent.contactUs}
            </Box>
          </Stack>
          <Stack align={['flex-start', 'center']} mx={['0', 'auto']}>
            <ListHeader>{content.legalContent.header}</ListHeader>
            <Box as="a" href={'#'}>
            {content.legalContent.cookiesPolicy}
            </Box>
            <Box as="a" href={'#'}>
            {content.legalContent.privacyPolicy}
            </Box>
            <Box as="a" href={'#'}>
            {content.legalContent.termsOfService}
            </Box>
            <Box as="a" href={'#'}>
            {content.legalContent.lawEnforcement}
            </Box>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2023 FL Automations. {content.allRightsReserved.text}</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCl6GFLN8zi781evyvnUOc2g'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/flautomations/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 