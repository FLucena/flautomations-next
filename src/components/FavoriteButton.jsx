import { useState } from 'react';
import { Button, Center, Icon } from '@chakra-ui/react';
import { AiFillStar , AiOutlineStar } from 'react-icons/ai';
import axios from 'axios';

const FavoriteButton = ({ itemId }) => {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = async () => {
    try {
      setFavorited(true);
      await axios.post('/api/favorites', { itemId: itemId, isFavorited: true });
    } catch (error) {
      console.error('Error favoriting item:', error);
    }
  };

  const handleUnfavorite = async () => {
    try {
      setFavorited(false);
      await axios.post('/api/favorites', { itemId: itemId, isFavorited: false });
    } catch (error) {
      console.error('Error unfavoriting item:', error);
    }
  };

  return (
    <div>
      {favorited ? (
        <Center>
            <Button
            colorScheme="red"
            leftIcon={<Icon as={AiFillStar} />}
            onClick={handleUnfavorite}
            >
            Unfavorite
            </Button>
        </Center>
      ) : (
        <Center>
            <Button
            colorScheme="blue"
            leftIcon={<Icon as={AiOutlineStar} />}
            onClick={handleFavorite}
            >
            Favorite
            </Button>
        </Center>
      )}
    </div>
  );
};

export default FavoriteButton;