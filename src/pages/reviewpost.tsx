import { NextPage } from 'next';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import ReviewArea from 'src/components/reviewPost/ReviewArea';

// import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ReviewPost: NextPage = () => {
  const [result, setResult] = useState({
    1: { rate: 1, content: '1です' },
    2: { rate: 1, content: '2です' },
    3: { rate: 1, content: '3です' },
    4: { rate: 1, content: '4です' },
    5: { rate: 1, content: '5です' },
    6: { rate: 1, content: '6です' },
  });

  const submitEvent = () => {
    console.log(result[1].content);
  };

  const categories = [
    { id: 1, name: '物価' },
    { id: 2, name: '品揃え' },
    { id: 3, name: '子育て' },
    { id: 4, name: '家賃' },
    { id: 5, name: '治安' },
    { id: 6, name: '交通' },
  ];

  return (
    <>
      <Box mr="40" ml="40" mt="8" mb="8">
        <form onSubmit={submitEvent}>
          <Flex height="80px" flexWrap="wrap" alignItems="left">
            <Box textAlign="center" ml="4">
              <Text fontSize="52px" fontWeight="bold">
                渋谷区
              </Text>
            </Box>
          </Flex>
          <Box>
            {categories.map((category, index) => (
              <Box w="90%" ml="auto" mr="auto" mt="10" key={index}>
                <ReviewArea category={category} result={result} setResult={setResult} />
              </Box>
            ))}
          </Box>
          <Flex w="90%" ml="auto" mr="auto" mt="10" justifyContent="flex-end">
            <Button
              type="submit"
              bg="#48BB78"
              color="#ffffff"
              colorScheme="green"
              size="md"
              width="10%"
            >
              投 稿
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default ReviewPost;
