import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const UnderConstruction = () => {
  return (
    <Box textAlign="center" mt={10}>
      <Heading as="h2" size="lg" mb={4}>
        Under Construction
      </Heading>
      <Text fontSize="xl">This page is currently under construction. Please check back later.</Text>
    </Box>
  );
};

export default UnderConstruction;
