import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Flex, Text, Button, Textarea, Input } from '@chakra-ui/react';
import SelectCategory from 'src/components/question/SelectCategory';
import SelectRegion from 'src/components/question/SelectRegion';

const Home: NextPage = () => {
  return (
    <>
      <Box mr="20%" ml="20%" mt="8" mb="8">
        <Text fontSize="4xl">質問投稿</Text>
        <Flex mt="4" w="30%" direction="column">
          <Text mr="4" mb="2" fontSize="2xl">
            地区
          </Text>
          <SelectRegion />
        </Flex>

        <Flex mt="6" w="30%" direction="column">
          <Text mr="4" fontSize="2xl">
            分類
          </Text>
          <SelectCategory />
        </Flex>

        <Flex direction="column" mt="6">
          <Text fontSize="2xl">タイトル</Text>
          <Input mt="2" w="500px" focusBorderColor="#48BB78" placeholder="タイトル"></Input>
        </Flex>
        <Flex direction="column" mt="6">
          <Text fontSize="2xl">質問内容</Text>
          <Textarea
            mt="2"
            h="200"
            focusBorderColor="#48BB78"
            placeholder="質問内容を入力してください"
          ></Textarea>
        </Flex>
        <Flex justifyContent="right">
          <Button mt="4" bg="#48BB78" color="white">
            投稿
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
