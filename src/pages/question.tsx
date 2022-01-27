import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Flex, Text, Button, Link, HStack } from '@chakra-ui/react';

import QuestionBox from '../components/question/QuestionBox';
import SelectCategory from 'src/components/question/SelectCategory';

const Question: NextPage = () => {
  return (
    <>
      <Box mr="16" ml="16" mt="8" mb="8">
        <Flex wrap="wrap" justifyContent="center" alignItems="center" flexDirection="column">
          <Text fontSize="4xl">あなたの疑問、不安を解決しよう！</Text>
          <Box mt="4">
            <Link href="questionpost">
              <Button w="50" bg="#48BB78" color="white">
                質問を投稿する
              </Button>
            </Link>
          </Box>
        </Flex>

        <Flex mt="10" alignItems="center" justifyContent="center" w="100%">
          <HStack spacing="10">
            <Flex alignItems="center" justifyContent="center" border="10px" w="70%">
              <Text fontSize="2xl" mr="5">
                分類
              </Text>
              <SelectCategory />
            </Flex>
            <Flex alignItems="center" justifyContent="center" border="10px" w="70%">
              <Text fontSize="2xl" mr="5">
                地区
              </Text>
              <SelectCategory />
            </Flex>
          </HStack>
        </Flex>

        <Flex mt="20" alignItems="center" justifyContent="center">
          <Flex w="60%" justifyContent="center" bg="white" direction="column">
            <Box borderBottom="medium solid #FAFAFA" p="1">
              <Flex ml="2" alignItems="left" flexDirection="column">
                <QuestionBox />
                <QuestionBox />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Question;
