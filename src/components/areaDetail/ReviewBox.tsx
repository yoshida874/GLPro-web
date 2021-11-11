import { VFC } from 'react';
import { Box, Flex, HStack, Spacer } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';
import { FaMapMarker, FaTag } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';

const ReviewBox: VFC<any> = ({ createDate, areaName, category, content }) => {
  return (
    <Box bg="white" borderBottom="medium solid #FAFAFA" w="100%">
      <HStack flexWrap="wrap">
        <StarRatings
          rating={5}
          starRatedColor="#ffd500"
          numberOfStars={5}
          starDimension="40px"
          starSpacing="4px"
        />
        <Spacer />
        <Flex flexWrap="wrap" pr="4" alignItems="center">
          <BsStopwatch />
          {createDate}
        </Flex>
        <Flex flexWrap="wrap" pr="4" alignItems="center">
          <FaMapMarker color="red" />
          {areaName}
        </Flex>
        <Flex flexWrap="wrap" pr="12" alignItems="center">
          <FaTag color="blue" />
          治安
        </Flex>
      </HStack>
      <Box mt="4">{content}</Box>
    </Box>
  );
};

export default ReviewBox;
