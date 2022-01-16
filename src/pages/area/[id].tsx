import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Box, Image, Flex, Text, Divider, Button, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Radar } from 'recharts';

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

const fetcher = async () => {
  const res = await axios.get('http://localhost:8080/category');
  return res.data;
};

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

  // カテゴリーの種類DBから取得
  const { data } = useSWR('http://localhost:8080/category', fetcher);
  if (!data) return <div></div>;
  const category: Category[] = data;

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
  category.map((element, index) => {
    const areaByCategory = props.areaDetails.filter((area) => {
      return area.category_id === category[index].id;
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
        <Flex height="200px" flexWrap="wrap" justifyContent="center" alignItems="center">
          <Image src="/Emblem_Shibuya.png" alt="" w="auto" height="180px" objectFit="cover" />
          <Box textAlign="center" ml="4">
            <Text fontSize="52px">{props.name}</Text>
            <Text fontSize="24px">Sibuya City</Text>
          </Box>
        </Flex>

        <Divider mt="4" mb="4" />

        <RadarChart outerRadius={90} width={730} height={250} data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} />
          <Radar name="Mike" dataKey="status" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>

        <Flex flexWrap="wrap" justifyContent="center" gridGap="3" alignItems="center">
          {category.map((singleCategory, index) => (
            <Flex key={index} w="44%" justifyContent="center" alignItems="center">
              <CategoryRate category={singleCategory} status={statuses[index]} />
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
