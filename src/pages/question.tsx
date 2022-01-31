import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Flex, Text, Button, Link, HStack } from '@chakra-ui/react';

import QuestionBox from '../components/question/QuestionBox';
import SelectCategory from 'src/components/question/SelectCategory';
import SelectRegion from 'src/components/question/SelectRegion';

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
          <HStack spacing="10" w="40%">
            <Flex alignItems="center" justifyContent="center" border="10px" w="50%">
              <Text fontSize="2xl" mr="5">
                地区
              </Text>
              <SelectRegion />
            </Flex>
            <Flex alignItems="center" justifyContent="center" border="10px" w="50%">
              <Text fontSize="2xl" mr="5">
                分類
              </Text>
              <SelectCategory />
            </Flex>
          </HStack>
        </Flex>

        <Flex mt="20" alignItems="center" justifyContent="center">
          <Flex w="60%" justifyContent="center" bg="white" direction="column">
            <Box borderBottom="medium solid #FAFAFA" p="1">
              <Flex ml="2" alignItems="left" flexDirection="column">
                <QuestionBox
                  title="治安ってどうですか？"
                  region="渋谷区"
                  category="治安"
                  date="2022/1/28"
                  content="夜の渋谷の治安が知りたいです"
                  comment="2"
                />
                <QuestionBox
                  title="家賃って高いですか？"
                  region="大田区"
                  category="物価"
                  date="2022/1/29"
                  content="今度引っ越すんですけど家賃は高いですか？"
                  comment="0"
                />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Question;
