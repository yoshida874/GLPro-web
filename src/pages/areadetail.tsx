import { NextPage } from 'next';

import { Box, Image, Flex, Text, Divider, Select, Button, Spacer } from '@chakra-ui/react';

import Header from 'src/components/atom/header/Header';
import Footer from 'src/components/atom/Footer';
import ReviewBox from 'src/components/areaDetail/ReviewBox';
import CategoryRate from 'src/components/areaDetail/CategoryRate';

const AreaDerail: NextPage = () => {
  const categories = [
    { name: '物価', status: '1.0' },
    { name: '品揃え', status: '1.0' },
    { name: '子育て', status: '4.0' },
    { name: '家賃', status: '2.0' },
    { name: '治安', status: '3.0' },
    { name: '交通', status: '1.0' },
  ];
  const reviews = [1, 2, 3];
  return (
    <>
      <Header />
      <Box mr="40" ml="40" mt="8" mb="8">
        <Flex height="200px" flexWrap="wrap" justifyContent="center" alignItems="center">
          <Image src="/Emblem_Shibuya.png" alt="" w="auto" height="180px" objectFit="cover" />
          <Box textAlign="center" ml="4">
            <Text fontSize="52px">渋谷区</Text>
            <Text fontSize="24px">Sibuya City</Text>
          </Box>
        </Flex>

        <Divider mt="4" mb="4" />

        <Flex flexWrap="wrap" justifyContent="center" gridGap="4" alignItems="center">
          {categories.map((category, index) => (
            <Flex key={index} w="40%" justifyContent="center" alignItems="center">
              <CategoryRate category={category} />
            </Flex>
          ))}
        </Flex>

        <Box w="85%" ml="auto" mr="auto">
          <Flex mt="16" flexWrap="wrap" alignItems="center">
            <Text>分類</Text>
            <Select placeholder="Select option" w="20%" pl="16px">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Spacer />
            <Button bg="#48BB78" color="white">
              レビュー投稿
            </Button>
          </Flex>

          <Flex mt="12" alignItems="center">
            <Text fontSize="5xl">件数</Text>
            <Text fontSize="3xl">(x)件</Text>
          </Flex>
          <Box ml="auto" mr="auto">
            {reviews.map((index) => (
              <Box key={index}>
                <ReviewBox />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AreaDerail;
