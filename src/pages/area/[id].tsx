import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Box, Flex, Text, Divider, Button, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  Radar,
  ResponsiveContainer,
} from 'recharts';

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

  // レビュー投稿画面へ遷移する際に使用するareaidの取得、クエリパラメータの設定
  const id = router.query.id;
  const movePostEvent = () => {
    router.push({
      pathname: '../reviewpost',
      query: { id: id },
    });
  };

  // カテゴリーの平均値計算,status配列に結果を代入
  const statuses: number[] = [];
  const radarData: any[] = [];
  props.category.map((element, index) => {
    const areaByCategory = props.areaDetails.filter((area) => {
      return area.category_id === props.category[index].id;
    });

    const total = areaByCategory.reduce((sum, element) => {
      return sum + element.evaluation;
    }, 0);

    // 平均評価点は少数第1位で四捨五入
    const average = Math.round((total / areaByCategory.length) * 10) / 10;
    radarData.push({ subject: element.category_name, status: average });
    statuses.push(average);
  });

  return (
    <>
      <Box mr="40" ml="40" mt="8" mb="8">
        <Box textAlign="center">
          <Text fontSize="60px" fontWeight="700" as="u">
            Review
          </Text>
          <Flex justifyContent="center" alignItems="baseline" mt="8">
            <Text fontSize="50px" fontWeight="700" color="#48BB78">
              {props.name}
            </Text>
          </Flex>
        </Box>

        <Divider mb="4" />

        {/* 評価項目 */}
        <Box
          bg="white"
          maxW="1200px"
          ml="auto"
          mr="auto"
          borderBottom="medium solid #FAFAFA"
          pl="4"
        >
          <Flex>
            <ResponsiveContainer width="50%" height={330}>
              <RadarChart outerRadius={130} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} />
                <Radar
                  name="Mike"
                  dataKey="status"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
            <Flex flexFlow="column" ml="12" mt="auto" mb="auto">
              {props.category.map((singleCategory, index) => (
                <Box key={index} mb={3}>
                  <CategoryRate category={singleCategory} status={statuses[index]} />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>

        <Box maxW="1000px" mt="16" ml="auto" mr="auto">
          <Flex mt="12" alignItems="center">
            <CategoryBtnGroup
              categories={props.category}
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />
            <Spacer />
            <Button bg="#48BB78" color="white" onClick={() => movePostEvent()}>
              レビュー投稿
            </Button>
          </Flex>
          <Box ml="auto" mr="auto" mt="4">
            <Flex ml="4">
              <Text fontSize="24">{displayingReview.length}件</Text>
            </Flex>
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
