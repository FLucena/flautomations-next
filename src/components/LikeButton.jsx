import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import { Button, Center, Icon } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

const LikeButton = ({ itemId }) => {
  const [liked, setLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(0);
  const { data: session } = useSession();
  let userEmail;
  session ? userEmail = session.user.email : '';

  useEffect(() => {
     axios.get(`/api/likes?itemId=${itemId}&userEmail=${userEmail}`)
       .then(response => {
        if (response.data.bool) {
          setLiked(response.data.bool);
        }
         setLikeCounter(response.data.counter);
       })
       .catch(error => {
         console.error('Error fetching like count:', error);
       });
  }, [itemId, userEmail]);

  const handleLike = async () => {
    try {
      setLiked(true);
      setLikeCounter(likeCounter + 1);
      await axios.post('/api/likes', { itemId: itemId, isLiked: true });
    } catch (error) {
      console.error('Error liking item:', error);
    }
  };

  const handleUnlike = async () => {
    try {
      setLiked(false);
      setLikeCounter(likeCounter - 1);
      await axios.post('/api/likes', { itemId: itemId, isLiked: false });
    } catch (error) {
      console.error('Error unliking item:', error);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div>
      {liked ? (
        <Center>
            <Button
            colorScheme="red"
            leftIcon={<Icon as={AiFillHeart} />}
            onClick={handleUnlike}
            >
            {likeCounter}
            </Button>
        </Center>
      ) : (
        <Center>
            <Button
            colorScheme="green"
            leftIcon={<Icon as={AiOutlineHeart} />}
            onClick={handleLike}
            >
            {likeCounter}
            </Button>
        </Center>
      )}
    </div>
  );
};

export default LikeButton;