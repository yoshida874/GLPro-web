import { VFC } from 'react';
import { Box, Flex, Text, HStack, Spacer } from '@chakra-ui/react';
import { FaTag, FaRegCommentDots } from 'react-icons/fa';
import { BsStopwatch } from 'react-icons/bs';

interface Props {}

const QuestionBox: VFC<Props> = () => {
  return (
    <Box bg="white" borderBottom="medium solid #FAFAFA" w="100%" pl="4">
      <HStack>
        <Text fontSize="2xl" fontWeight="bold">
          質問があります
        </Text>
        <Spacer />
        <Flex flexWrap="wrap" pr="4" alignItems="center">
          <BsStopwatch />
          2022-02-01
        </Flex>
        <Flex flexWrap="wrap" pr="4" alignItems="center">
          <FaTag color="blue" />
          治安
        </Flex>
        <Flex flexWrap="wrap" pr="4" alignItems="center">
          <FaRegCommentDots />3
        </Flex>
      </HStack>
      <Box mt="4">繁華街が多いようですが治安はどうですか?</Box>
    </Box>
  );
};

export default QuestionBox;
