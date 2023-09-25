import { useState } from 'react';
import { Button, Center, Icon } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import axios from 'axios';

const LikeButton = ({ itemId }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      await axios.post('/api/likes', { itemId: itemId, isLiked: true });
      setLiked(true);
    } catch (error) {
      console.error('Error liking item:', error);
    }
  };

  const handleUnlike = async () => {
    try {
      await axios.post('/api/likes', { itemId: itemId, isLiked: false });
      setLiked(false);
    } catch (error) {
      console.error('Error unliking item:', error);
    }
  };

  return (
    <div>
      {liked ? (
        <Center>
            <Button
            colorScheme="red"
            leftIcon={<Icon as={AiFillHeart} />}
            onClick={handleUnlike}
            >
            Unlike
            </Button>
        </Center>
      ) : (
        <Center>
            <Button
            colorScheme="green"
            leftIcon={<Icon as={AiOutlineHeart} />}
            onClick={handleLike}
            >
            Like
            </Button>
        </Center>
      )}
    </div>
  );
};

export default LikeButton;