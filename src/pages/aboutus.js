import React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const AboutUs = ({ initialData }) => {

  return (
    <Box p="6" maxW="600px" mx="auto">
      {/* Encabezado */}
      <Heading as="h2" size="xl" mb="4">
        Sobre Nosotros
      </Heading>
      {/* Texto descriptivo */}
      <Text fontSize="lg">
        ¡Bienvenido a FL Automations! Somos un equipo apasionado dedicado a proporcionar soluciones para emprendimientos, pequeñas a medianas empresas e incluso herramientas para tu vida cotidiana! valiosa y contenido a nuestros usuarios. Nuestra misión es brindar automatizaciones y facilidades para tu día a día.
      </Text>
      {/* Mensaje adicional */}
      <Text fontSize="lg" mt="4">
        Conócenos y explora el increíble contenido que hemos preparado para ti.
      </Text>
    </Box>
  );
};

export async function getServerSideProps() {
  return {
    props: { initialData: null },
  };
}

export default AboutUs;