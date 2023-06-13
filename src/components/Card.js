import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Card = ({ astrologer }) => {
  const { name, specialty, price, rating, profileImg, bio } = astrologer;

  return (
    <Box
      bgImage={`url(${profileImg})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      h="300px"
      w="250px"
      mb="10px"
    >
      <Box
        position="absolute"
        bottom="0"
        bg="rgba(0,0,0,0.5)"
        w="100%"
        p="10px"
        color="white"
      >
        <Text fontSize="lg" fontWeight="bold" mb="5px">
          {name}
        </Text>
        <Text fontSize="sm" mb="10px">
          {specialty}
        </Text>
        <Box display="flex" justifyContent="space-between">
          <Text fontSize="sm">
            <b>Price:</b> ${price}
          </Text>
          <Text fontSize="sm">
            <b>Rating:</b> {rating}
          </Text>
        </Box>
        <Text fontSize="sm" mt="10px">
          {bio}
        </Text>
        <Box mt="10px">
          <Button colorScheme="orange" mr="5px" bg="#A95210">
            Chat
          </Button>
          <Button colorScheme="orange" bg="#A95210">Call</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
