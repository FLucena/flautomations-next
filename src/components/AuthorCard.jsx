import {
  Box,
  Text,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function AuthorCard(props) {
  const { authorName, authorImg, authorDescription } = props;

  return (
    <Box
      maxW="700px"
      margin="20px"
      display="flex"
      alignItems="center"
      p="2rem"
      borderRadius="12px"
      backgroundColor="white"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
    >
      <Avatar
        mr="2rem"
        borderRadius="50%"
        overflow="hidden"
        w="50vw"
        h="55vw"
        maxW="100px"
        maxH="111px"
      >
        <Image
          src={authorImg}
          alt="Author Avatar"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Avatar>
      <Flex direction="column" flex="50%">
        <Text fontSize="1.8rem" mb="1rem">
          {authorName}</Text>
        <Text fontSize="1.2rem" lineHeight="1.5" color="#555">
          {authorDescription}
        </Text>
      </Flex>
    </Box>
  );
}