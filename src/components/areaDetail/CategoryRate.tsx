import { VFC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

import { Category } from 'src/types/category';
interface Props {
  category: Category;
  status: number;
}

const CategoryRate: VFC<Props> = ({ category, status }) => {
  return (
    <>
      <Box width="15%">
        <Text fontSize="20px">{category.category_name}</Text>
      </Box>
      <StarRatings
        rating={status}
        starRatedColor="#ffd500"
        numberOfStars={5}
        starDimension="35px"
        starSpacing="4px"
      />
      <Text ml="5" fontSize="20px" w="10" align="center">
        {status}
      </Text>
    </>
  );
};

export default CategoryRate;
