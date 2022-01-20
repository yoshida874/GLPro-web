import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Flex, Text, Button, Select, Link } from '@chakra-ui/react';
import { AiFillClockCircle, AiFillMessage, AiFillTag } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

const Question: NextPage = () => {
  return (
    <>
      <Box mr="16" ml="16" mt="8" mb="8">
        <Flex wrap="wrap" justifyContent="center" alignItems="center" flexDirection="column">
          <Text fontSize="3xl">あなたの疑問、不安を解決しよう！</Text>
          <Box mt="4">
            <Link href="questionpost">
              <Button w="50" bg="#48BB78">
                質問を投稿する
              </Button>
            </Link>
          </Box>
        </Flex>

        <Flex mt="10" alignItems="center" justifyContent="center">
          <Flex alignItems="center" justifyContent="center" border="10px">
            <Text mr="5" w="20%">
              地区
            </Text>
            <Select w="70%" placeholder="選択してください">
              <option value="option1">渋谷区</option>
              <option value="option2">港区</option>
              <option value="option3">大田区</option>
            </Select>
          </Flex>
          <Flex ml="5" alignItems="center" justifyContent="center">
            <Text mr="5" w="20%">
              分類
            </Text>
            <Select w="70%" placeholder="選択してください">
              <option value="option1">治安</option>
              <option value="option2">交通</option>
              <option value="option3">子育て</option>
            </Select>
          </Flex>
        </Flex>

        <Flex mt="20" alignItems="center" justifyContent="center">
          <Flex w="60%" justifyContent="center" bg="white" direction="column">
            <Box borderBottom="medium solid #FAFAFA">
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" ml="2" mt="2">
                  治安ってどうですか？
                </Text>

                <Flex mr="2" mt="2">
                  <Flex ml="2" alignItems="center">
                    <BiMap color="red" />
                    <Text>渋谷区</Text>
                  </Flex>
                  <Flex ml="2" alignItems="center">
                    <AiFillTag color="blue" />
                    <Text>治安</Text>
                  </Flex>

                  <Flex ml="4" justifyContent="center" alignItems="center">
                    <AiFillClockCircle />
                    <Text>2022/10/10</Text>
                  </Flex>
                  <Flex ml="4" mr="2" justifyContent="center" alignItems="center">
                    <AiFillMessage />
                    <Text>2</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box mt="2" ml="2" mb="2">
                <Text>渋谷区の治安ってどうですか？</Text>
              </Box>
            </Box>

            <Box borderBottom="medium solid #FAFAFA">
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" ml="2" mt="2">
                  Question Title
                </Text>

                <Flex mr="2" mt="2">
                  <Flex ml="2" alignItems="center">
                    <BiMap color="red" />
                    <Text>渋谷区</Text>
                  </Flex>
                  <Flex ml="2" alignItems="center">
                    <AiFillTag color="blue" />
                    <Text>治安</Text>
                  </Flex>

                  <Flex ml="4" justifyContent="center" alignItems="center">
                    <AiFillClockCircle />
                    <Text>2022/10/10</Text>
                  </Flex>
                  <Flex ml="4" mr="2" justifyContent="center" alignItems="center">
                    <AiFillMessage />
                    <Text>2</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box mt="2" ml="2" mb="2">
                <Text>contentあああああいうえいてあいうえんづえぎえ</Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Question;
