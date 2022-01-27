import { VFC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { AiFillClockCircle, AiFillTag } from 'react-icons/ai';

interface Props {}

const QuestionBox: VFC<Props> = () => {
  return (
    <Box borderBottom="medium solid #FAFAFA" p="1">
      <Flex ml="2" alignItems="left" flexDirection="column">
        <Text fontSize="4xl" ml="" mt="2">
          治安ってどうですか？
        </Text>
        <Flex ml="3">
          <Flex alignItems="center">
            <BiMap color="red" />
            <Text>渋谷区</Text>
          </Flex>
          <Flex ml="4" alignItems="center">
            <AiFillTag color="blue" />
            <Text>治安</Text>
          </Flex>

          <Flex ml="4" justifyContent="center" alignItems="center">
            <AiFillClockCircle />
            <Text>2022/10/10</Text>
          </Flex>
        </Flex>
        <Box mt="2" ml="2" mb="2">
          <Text>渋谷区の治安ってどうですか？</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default QuestionBox;
