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
        <Text fontSize="20px">{category.name}</Text>
      </Box>
      <StarRatings
        rating={Number(category.status)}
        starRatedColor="#ffd500"
        numberOfStars={5}
        starDimension="35px"
        starSpacing="4px"
      />
      <Text ml="4" fontSize="20px">
        {category.status}
      </Text>
    </>
  );
};

export default CategoryRate;
