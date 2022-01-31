import { VFC } from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { AiFillClockCircle, AiFillMessage, AiFillTag } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

interface Props {
  title: string;
  region: string;
  category: string;
  date: string;
  content: string;
  comment: string;
}

const QuestionBox: VFC<Props> = (props) => {
  const { title, region, category, date, content, comment } = props;

  return (
    <Box borderBottom="medium solid #FAFAFA" p="1">
      <Flex ml="2" alignItems="left" flexDirection="column">
        <Link href="questiondetail">
          <Text fontSize="2xl" ml="" mt="2">
            {title}
          </Text>
        </Link>
        <Flex ml="3">
          <Flex alignItems="center">
            <BiMap color="red" />
            <Text>{region}</Text>
          </Flex>
          <Flex ml="4" alignItems="center">
            <AiFillTag color="blue" />
            <Text>{category}</Text>
          </Flex>
          <Flex ml="4" justifyContent="center" alignItems="center">
            <AiFillMessage />
            <Text>{comment}</Text>
          </Flex>
          <Flex ml="4" justifyContent="center" alignItems="center">
            <AiFillClockCircle />
            <Text>{date}</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box mt="2" ml="2" mb="2">
        <Text>{content}</Text>
      </Box>
    </Box>
  );
};

export default QuestionBox;
