import { NextPage } from 'next';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import ReviewArea from 'src/components/reviewPost/ReviewArea';

interface Result {
  [key: string]: { rate: number; content: string };
}

interface Reviews {
  evaluation: number;
  review_content: string;
  category_id: number;
  area_id: number;
  user_id: number;
}

const reviews: Reviews[] = [];

const ReviewPost: NextPage = () => {
  const [result, setResult] = useState<Result>({
    1: { rate: 1, content: '' },
    2: { rate: 1, content: '' },
    3: { rate: 1, content: '' },
    4: { rate: 1, content: '' },
    5: { rate: 1, content: '' },
    6: { rate: 1, content: '' },
  });

  // areaid取得
  const router = useRouter();
  // const areaId = router.query.id;
  const areaId = 1;

  const userid = 1;

  const submitEvent = async () => {
    Object.keys(result).map((key, index) => {
      const onceData = result[key];

      const data = {
        evaluation: onceData.rate,
        review_content: onceData.content,
        category_id: index + 1,
        area_id: areaId,
        user_id: userid,
      };
      reviews.push(data);
    });

    const body = JSON.stringify({
      Reviews: reviews,
    });

    // await axios
    //   .post('http://localhost:8080/review/create', body)
    //   .then((response) => {
    //     console.log('成功: ' + response.data.text);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
