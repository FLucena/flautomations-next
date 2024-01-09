import React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import * as contentEn from './content-en';
import * as contentEs from './content-es';

export default function AboutUs({ lang }) {
    const content = lang === 'en' ? contentEn : contentEs;  
    return (
        <Box p="6" maxW="600px" mx="auto">
        {/* Encabezado */}
        <Heading as="h2" size="xl" mb="4">
            {content.aboutUs.heading}
        </Heading>
        {/* Texto descriptivo */}
        <Text fontSize="lg">
           {content.aboutUs.text1}
        </Text>
        {/* Mensaje adicional */}
        <Text fontSize="lg" mt="4">
        {content.aboutUs.text2}
        </Text>
        </Box>
    );
}