import { NextPage } from 'next';
// import Image from 'next/image';
import {
  Box,
  Flex,
  Text,
  Button,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  Input,
} from '@chakra-ui/react';
import SelectCategory from 'src/components/question/SelectCategory';

const Home: NextPage = () => {
  return (
    <>
      <Box mr="20%" ml="20%" mt="8" mb="8">
        <Text fontSize="4xl">質問投稿</Text>
        <Flex mt="4">
          <Text mr="4" fontSize="2xl">
            地区
          </Text>
          <SelectCategory />
        </Flex>

        <Flex mt="6" direction="column">
          <Text mr="4" fontSize="2xl">
            分類
          </Text>
          <RadioGroup mt="2">
            <Stack direction="row">
              <Radio value="1">治安</Radio>
              <Radio value="2">子育て</Radio>
              <Radio value="3">交通</Radio>
              <Radio value="4">物価</Radio>
              <Radio value="5">治安</Radio>
              <Radio value="6">Third</Radio>
            </Stack>
          </RadioGroup>
        </Flex>

        <Flex direction="column" mt="6">
          <Text fontSize="2xl">タイトル</Text>
          <Input mt="2" w="500px"></Input>
        </Flex>
        <Flex direction="column" mt="6">
          <Text fontSize="2xl">質問内容</Text>
          <Textarea mt="2" h="200"></Textarea>
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
