import { VFC } from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';
import dayjs from 'dayjs';
import { FaTag } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';
import { Review } from 'src/types/review';

interface Props {
  review: Review;
  categories: {
    id: number;
    category_name: string;
  }[];
}

const ReviewBox: VFC<Props> = ({ review, categories }) => {
  const createdDay = dayjs(review.created_at).format('YYYY-MM-DD');
  const category = categories.filter((category) => category.id === review.category_id);
  return (
    <Box bg="white" borderBottom="medium solid #FAFAFA" w="100%" pl="4">
      <HStack flexWrap="wrap">
        <StarRatings
          rating={review.evaluation}
          starRatedColor="#ffd500"
          numberOfStars={5}
          starDimension="32px"
          starSpacing="4px"
        />
      </HStack>
      <Flex>
        <Flex flexWrap="wrap" alignItems="center">
          <FaTag color="blue" />
          {category[0].category_name}
        </Flex>
        <Flex flexWrap="wrap" ml="2" alignItems="center">
          <BsStopwatch />
          {createdDay}
        </Flex>
      </Flex>
      <Box mt="3">{review.review_content}</Box>
    </Box>
  );
};

export default ReviewBox;
