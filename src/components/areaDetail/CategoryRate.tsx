import { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

interface Props {
  category: {
    name: string;
    status: string;
  };
}

const CategoryRate: VFC<Props> = ({ category }) => {
  return (
    <>
      <Box width="15%">
        <Text fontSize="24px">{category.name}</Text>
      </Box>
      <StarRatings
        rating={Number(category.status)}
        starRatedColor="#ffd500"
        numberOfStars={5}
        starDimension="40px"
        starSpacing="4px"
      />
      <Text ml="8" fontSize="24px">
        {category.status}
      </Text>
    </>
  );
};

export default CategoryRate;
