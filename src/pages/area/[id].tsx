import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Box, Image, Flex, Text, Divider, Button, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';

import ReviewBox from 'src/components/areaDetail/ReviewBox';
import CategoryRate from 'src/components/areaDetail/CategoryRate';
import { Category } from 'src/types/category';
import { Review } from 'src/types/review';
import CategoryBtnGroup from 'src/components/areaDetail/CategoryBtnGroup';

interface Props {
  props: {
    name: string;
    areaDetails: Review[];
    category: Category[];
  };
}

const Area: NextPage<Props> = ({ props }) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(999);
  const [displayingReview, setDisplayingReview] = useState<Review[]>([]);

  useEffect(() => {
    // category選択時のレビュー切り替え
    const reviews = props.areaDetails.filter((element) => {
      return element.category_id === selectedCategory || 999 === selectedCategory;
    });
    setDisplayingReview(reviews);
  }, [props.areaDetails, selectedCategory]);

  const categories = [
    { name: '物価', status: '1.0' },
    { name: '品揃え', status: '1.0' },
    { name: '子育て', status: '4.0' },
    { name: '家賃', status: '2.0' },
    { name: '治安', status: '3.0' },
    { name: '交通', status: '1.0' },
  ];

  const movePostEvent = () => {
    router.push({
      pathname: '../reviewpost',
      query: { id: router.query.id },
    });
  };

  return (
    <>
      <Box mr="40" ml="40" mt="8" mb="8">
        <Flex height="200px" flexWrap="wrap" justifyContent="center" alignItems="center">
          <Image src="/Emblem_Shibuya.png" alt="" w="auto" height="180px" objectFit="cover" />
          <Box textAlign="center" ml="4">
            <Text fontSize="52px">{props.name}</Text>
            <Text fontSize="24px">Sibuya City</Text>
          </Box>
        </Flex>

        <Divider mt="4" mb="4" />

        <Flex flexWrap="wrap" justifyContent="center" gridGap="3" alignItems="center">
          {categories.map((category, index) => (
            <Flex key={index} w="44%" justifyContent="center" alignItems="center">
              <CategoryRate category={category} />
            </Flex>
          ))}
        </Flex>

        <Box w="85%" ml="auto" mr="auto">
          <Box mt="16">
            <CategoryBtnGroup
              categories={props.category}
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
          </Box>

          <Flex mt="12" alignItems="center">
            <Text fontSize="3xl">件数</Text>
            <Text fontSize="2xl" ml="4">
              {displayingReview.length}件
            </Text>
            <Spacer />
            <Button bg="#48BB78" color="white" onClick={() => movePostEvent()}>
              レビュー投稿
            </Button>
          </Flex>
          <Box ml="auto" mr="auto" mt="1">
            {displayingReview.map((review, index) => (
              <Box key={index}>
                <ReviewBox review={review} categories={props.category} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

interface Area {
  id: number;
  name?: string;
}

export async function getStaticPaths() {
  const res = await axios.get('http://localhost:8080/area');
  const data = res.data;
  const path: Array<Object> = [];
  data.map((area: Area) => {
    path.push({
      params: {
        id: area.id.toString(),
      },
    });
  });
  return { paths: path, fallback: 'blocking' };
}

export async function getStaticProps({ params }: { params: Area }) {
  const res = await axios.get(`http://localhost:8080/area/${params.id}`);
  return {
    props: {
      props: res.data,
      id: params.id,
    },
    revalidate: 3,
  };
}

export default Area;
