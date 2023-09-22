import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Custom404 = () => {
  return (
    <Box textAlign="center" p={4}>
      <Heading fontSize="4xl">404 - Page Not Found</Heading>
      <Text fontSize="lg" mt={2}>
        Sorry, the page you are looking for does not exist.
      </Text>
    </Box>
  );
};

export default Custom404;
