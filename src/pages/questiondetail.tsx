import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

import AnswerBox from 'src/components/question/AnswerBox';
import QuestionTitle from 'src/components/question/QuestionTitle';

const Questiondetail: NextPage = () => {
  return (
    <>
      <Box mr="16" ml="16" mt="8" mb="8">
        <Flex mt="20" alignItems="center" justifyContent="center" direction="column">
          <Flex w="60%" justifyContent="center" bg="white" direction="column">
            <QuestionTitle />
          </Flex>

          <Flex alignItems="center" justifyContent="space-between" w="60%">
            <Text pt="10" fontSize="3xl">
              回答(x件)
            </Text>
            <Button w="50" bg="#48BB78" color="white">
              回答を投稿
            </Button>
          </Flex>

          <Flex w="60%" justifyContent="center" bg="white" direction="column">
            <AnswerBox />
            <AnswerBox />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Questiondetail;
