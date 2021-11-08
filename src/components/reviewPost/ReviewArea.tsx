import { VFC, useState } from 'react';
import { Box, Flex, Text, Textarea } from '@chakra-ui/react';

import { Rating } from 'react-simple-star-rating';

type Props = {
  name: string;
};

const ReviewArea: VFC<Props> = (category) => {
  const [rating, setRating] = useState(1);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // Some logic
  };

  return (
    <>
      <Flex alignItems="center">
        <Box width="200px">
          <Text fontSize="36px">{category.name}</Text>
        </Box>
        <Flex className="App" alignItems="center" pt="2">
          <Rating onClick={handleRating} ratingValue={rating} fillColor="#ffd500" size={45} />
        </Flex>
      </Flex>
      <Flex>
        <Textarea
          placeholder="あなたの考えを入力してね"
          focusBorderColor="#48BB78"
          resize="vertical"
          height="150px"
        />
      </Flex>
    </>
  );
};

export default ReviewArea;
