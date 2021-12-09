import { NextPage } from 'next';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Review } from 'src/types/review';
import ReviewArea from 'src/components/reviewPost/ReviewArea';

interface Result {
  [key: string]: { rate: number; content: string };
}

const ReviewPost: NextPage = () => {
  const router = useRouter();

  // areaid取得
  const areaId = Number(router.query.id);

  // userid取得していなから定数設定
  const USER_ID = 1;

  const [result, setResult] = useState<Result>({
    1: { rate: 1, content: '' },
    2: { rate: 1, content: '' },
    3: { rate: 1, content: '' },
    4: { rate: 1, content: '' },
    5: { rate: 1, content: '' },
    6: { rate: 1, content: '' },
  });

  const categories = [
    { id: 1, name: '治安' },
    { id: 2, name: '交通' },
    { id: 3, name: '物価' },
    { id: 4, name: '子育て' },
    { id: 5, name: '家賃' },
    { id: 6, name: '品揃え' },
  ];

  const submitEvent = async () => {
    const reviews: Review[] = [];
    // reviews配列に格納
    Object.keys(result).map((key) => {
      const onceData = result[key];

      const reviewData = {
        user_id: USER_ID,
        area_id: areaId,
        category_id: Number(key),
        review_content: onceData.content,
        evaluation: onceData.rate,
      };
      reviews.push(reviewData);
    });

    const body = { Reviews: reviews };

    // Post
    try {
      const res = await axios.post('http://localhost:8080/review/create', body, {
        headers: { 'content-type': 'application/json' },
      });
      console.log('成功: ' + res.data.text);
    } catch (e) {
      console.log('エラー' + e);
    }
  };

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
