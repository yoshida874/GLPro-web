import { NextPage } from 'next';

import { Box, Flex, Text, Button } from '@chakra-ui/react';

import Header from 'src/components/atom/header/Header';
import Footer from 'src/components/atom/Footer';
import ReviewArea from 'src/components/reviewPost/ReviewArea';

const ReviewPost: NextPage = () => {
  const categories = [
    { name: '物価' },
    { name: '品揃え' },
    { name: '子育て' },
    { name: '家賃' },
    { name: '治安' },
    { name: '交通' },
  ];

  return (
    <>
      <Header />
      <Box mr="40" ml="40" mt="8" mb="8">
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
              <ReviewArea name={category.name} />
            </Box>
          ))}
        </Box>
        <Flex w="90%" ml="auto" mr="auto" mt="10" justifyContent="flex-end">
          <Button bg="#48BB78" color="#ffffff" colorScheme="green" size="md" width="10%">
            投 稿
          </Button>
        </Flex>
      </Box>

      <Footer />
    </>
  );
};

export default ReviewPost;
