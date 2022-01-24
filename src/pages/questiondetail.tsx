import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { AiFillClockCircle, AiFillTag } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';

const Questiondetail: NextPage = () => {
  return (
    <>
      <Box mr="16" ml="16" mt="8" mb="8">
        <Flex mt="20" alignItems="center" justifyContent="center" direction="column">
          <Flex w="60%" justifyContent="center" bg="white" direction="column">
            <Box borderBottom="medium solid #FAFAFA">
              <Flex justifyContent="space-between" alignItems="left" direction="column">
                <Text fontSize="3xl" ml="2" mt="2">
                  治安ってどうですか？
                </Text>

                <Flex mr="2">
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
                </Flex>
              </Flex>
              <Box mt="4" ml="2" mb="2">
                <Text>渋谷区の治安ってどうですか？</Text>
              </Box>
            </Box>
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
            <Box borderBottom="medium solid #FAFAFA">
              <Flex justifyContent="space-between" alignItems="left" flexDirection="column">
                <Text fontSize="2xl" ml="2" mt="2">
                  answerタイトル
                </Text>
                <Flex alignItems="center" ml="3">
                  <AiFillClockCircle />
                  <Text ml="1">2022/10/10</Text>
                </Flex>
              </Flex>
              <Box mt="2" ml="2" mb="2">
                <Text>
                  よくはないかもああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Text>
              </Box>
            </Box>
            <Box borderBottom="medium solid #FAFAFA">
              <Flex justifyContent="space-between" alignItems="left" flexDirection="column">
                <Text fontSize="2xl" ml="2" mt="2">
                  answerタイトル
                </Text>
                <Flex alignItems="center" ml="3">
                  <AiFillClockCircle />
                  <Text ml="1">2022/10/10</Text>
                </Flex>
              </Flex>
              <Box mt="2" ml="2" mb="2">
                <Text>
                  よくはないかもああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Questiondetail;
