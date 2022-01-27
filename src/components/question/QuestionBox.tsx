import { VFC } from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { AiFillClockCircle, AiFillMessage, AiFillTag } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

interface Props {}

const QuestionBox: VFC<Props> = () => {
  return (
    <Box borderBottom="medium solid #FAFAFA" p="1">
      <Flex ml="2" alignItems="left" flexDirection="column">
        <Link href="questiondetail">
          <Text fontSize="2xl" ml="" mt="2">
            治安ってどうですか？
          </Text>
        </Link>
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
            <AiFillMessage />
            <Text>2</Text>
          </Flex>
          <Flex ml="4" justifyContent="center" alignItems="center">
            <AiFillClockCircle />
            <Text>2022/10/10</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box mt="2" ml="2" mb="2">
        <Text>渋谷区の治安ってどうですか？</Text>
      </Box>
    </Box>
  );
};

export default QuestionBox;
