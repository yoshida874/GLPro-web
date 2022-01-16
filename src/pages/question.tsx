import { NextPage } from 'next';
import { Box, Flex, Text, Button, HStack, Spacer } from '@chakra-ui/react';
import QuestionBox from 'src/components/question/QuestionBox';

const Question: NextPage = () => {
  return (
    <Box mr="40" ml="40" mt="8" mb="8">
      <Button>質問を投稿する</Button>
      <QuestionBox />
    </Box>
  );
};

export default Question;
