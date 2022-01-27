import { VFC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { AiFillClockCircle } from 'react-icons/ai';

interface Props {}

const QuestionBox: VFC<Props> = () => {
  return (
    <Box borderBottom="medium solid #FAFAFA" p="1">
      <Flex alignItems="left" flexDirection="column">
        <Text fontSize="2xl" ml="2" mt="2">
          answerタイトル
        </Text>
        <Flex alignItems="center" ml="3">
          <AiFillClockCircle />
          <Text ml="1">2022/10/10</Text>
        </Flex>
      </Flex>
      <Box mt="2" ml="2" mb="2">
        <Text>
          よくはないかもああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      </Box>
    </Box>
  );
};

export default QuestionBox;
