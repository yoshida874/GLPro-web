import { VFC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { AiFillClockCircle } from 'react-icons/ai';

interface Props {
  title: string;

  date: string;
  content: string;
}

const QuestionBox: VFC<Props> = (props) => {
  const { title, date, content } = props;
  return (
    <Box borderBottom="medium solid #FAFAFA" p="1">
      <Flex alignItems="left" flexDirection="column">
        <Text fontSize="2xl" ml="2" mt="2">
          {title}
        </Text>
        <Flex alignItems="center" ml="3">
          <AiFillClockCircle />
          <Text ml="1">{date}</Text>
        </Flex>
      </Flex>
      <Box mt="2" ml="2" mb="2">
        <Text>{content} </Text>
      </Box>
    </Box>
  );
};

export default QuestionBox;
