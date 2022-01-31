import { VFC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BiMap } from 'react-icons/bi';
import { AiFillClockCircle, AiFillTag } from 'react-icons/ai';

interface Props {
  title: string;
  region: string;
  category: string;
  date: string;
  content: string;
}

const QuestionBox: VFC<Props> = (props) => {
  const { title, region, category, date, content } = props;
  return (
    <Box borderBottom="medium solid #FAFAFA" p="1">
      <Flex ml="2" alignItems="left" flexDirection="column">
        <Text fontSize="4xl" ml="" mt="2">
          {title}
        </Text>
        <Flex ml="3">
          <Flex alignItems="center">
            <BiMap color="red" />
            {region}
          </Flex>
          <Flex ml="4" alignItems="center">
            <AiFillTag color="blue" />
            {category}
          </Flex>

          <Flex ml="4" justifyContent="center" alignItems="center">
            <AiFillClockCircle />
            {date}
          </Flex>
        </Flex>
        <Box mt="2" ml="2" mb="2">
          {content}
        </Box>
      </Flex>
    </Box>
  );
};

export default QuestionBox;
