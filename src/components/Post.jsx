import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Alert,
  AlertIcon,
  Flex
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import AuthorCard from './AuthorCard';
import CustomPagination from './CustomPagination';
import LikeButton from './LikeButton';
import FavoriteButton from './FavoriteButton';

export default function Post(props) {
  const { id, pageCount, lang } = props;
  const [currentPage, setCurrentPage] = useState(parseInt(id));
  const router = useRouter();

  const handlePageChange = (newPage) => {
    router.push(`./${newPage}`);
  };

  useEffect(() => {
    setCurrentPage(parseInt(id));
  }, [id]);

  try {
    const decodedProps = Object.keys(props).reduce((decoded, key) => {
      decoded[key] = decodeURIComponent(props[key]);
      return decoded;
    }, {});

    return (
      <Box
        p="2rem"
        borderRadius="12px"
        backgroundColor="white"
        boxShadow="0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
        maxW="1200px"
        margin="2rem auto"
      >
          <Flex justify="center" align="center" width="100%" maxW="100%" my="20px" flexDirection="column">
            <Box textAlign="center" mb="2rem">
              <Heading as="h1" size="xl">{decodedProps[0]}</Heading>
            </Box>
            <Text fontSize="20px">{decodedProps[1]}</Text>
          </Flex>
          {decodedProps[3] !== '' ? (
            <Flex justify="center" align="center" width="100%" maxW="100%" my="20px" flexDirection="column">
              <Image
                src={decodedProps[3]}
                alt="Post image"
                objectFit="contain"
                width="100%"
                height="auto"
                my="1vh"
                maxW="500px"
                priority="true"
              />        
            </Flex>
        ) : (
            <Flex justify="center" align="center" width="100%" maxW="100%" my="20px" flexDirection="column">
              <Image
                src={decodedProps[4]}
                alt="No image"
                objectFit="contain"
                width="100%"
                height="auto"
                my="1vh"
                maxW="500px"
              />
              <Alert status="error" maxW="500px">
              <AlertIcon />
                No image available
              </Alert>       
            </Flex>
        )}
        <Flex justify="center" align="center" width="100%" maxW="100%" my="20px" flexDirection="column">
          {decodedProps[2] !== '' ? (
            <iframe src={decodedProps[2]} width="640" height="352"></iframe>
          ) : (
            <Alert status="error" maxW="500px">
              <AlertIcon />
              No video available
            </Alert>
          )}
        
          <AuthorCard
            authorName={decodedProps[6]}
            authorImg={decodedProps[8]}
            authorDescription={decodedProps[11]}
          />
        </Flex>
        <Box margin="20px">
          <Center>
            <Box mx="5">
              <LikeButton itemId={parseInt(id)} />
            </Box>
            <Box mx="5">
              <FavoriteButton itemId={parseInt(id)} />
            </Box>
          </Center>
          <CustomPagination
            currentPage={parseInt(id)}
            totalPages={parseInt(pageCount)}
            onPageChange={handlePageChange}
            lang={lang}
          />
        </Box>
      </Box>
    );
  } catch (error) {
    console.error('An error occurred while rendering the Post component:', error);
    return <div>Oops! Something went wrong while rendering this post.</div>;
  }
}