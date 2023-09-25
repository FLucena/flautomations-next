import React, { useState, useEffect } from 'react';
import { Button, Center, Icon } from '@chakra-ui/react';
import { AiFillStar , AiOutlineStar } from 'react-icons/ai';
import axios from 'axios';

const FavoriteButton = ({ itemId }) => {
  const [favorited, setFavorited] = useState(false);
  const [favoriteCounter, setFavoriteCounter] = useState(0);

  useEffect(() => {
    axios.get(`/api/favorites?itemId=${itemId}`)
      .then(response => {
       console.log(response);
        setFavoriteCounter(response.data.counter);
      })
      .catch(error => {
        console.error('Error fetching like count:', error);
      });
 }, [itemId]);

  const handleFavorite = async () => {
    try {
      setFavorited(true);
      setFavoriteCounter(favoriteCounter + 1);
      await axios.post('/api/favorites', { itemId: itemId, isFavorited: true });
      favoriteCounter = await axios.post('api/favorites', { itemId: itemId});
    } catch (error) {
      console.error('Error favoriting item:', error);
    }
  };

  const handleUnfavorite = async () => {
    try {
      setFavorited(false);
      setFavoriteCounter(favoriteCounter - 1);
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
            {favoriteCounter}
            </Button>
        </Center>
      ) : (
        <Center>
            <Button
            colorScheme="blue"
            leftIcon={<Icon as={AiOutlineStar} />}
            onClick={handleFavorite}
            >
            {favoriteCounter}
            </Button>
        </Center>
      )}
    </div>
  );
};

export default FavoriteButton;