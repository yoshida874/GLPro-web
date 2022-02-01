import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Image, Text } from '@chakra-ui/react';
import TopCard from 'src/components/top/TopCard';

const Home: NextPage = () => {
  return (
    <>
      <Box position="relative">
        <Image src="/top.jpg" alt="" width="100%" maxH="600" />
        <Text position="absolute" bottom="18%" color="white" fontSize="6xl" left="5%">
          Is there anyone who wants to
        </Text>
        <Text position="absolute" bottom="9%" color="white" fontSize="6xl" left="20%">
          move with genuine satisfaction?
        </Text>
        <Text position="absolute" bottom="5%" color="white" fontSize="2xl" left="15%" as="samp">
          心から満足できる引っ越しをしたい方いませんか？
        </Text>
      </Box>

      <Box mr="40" ml="40" mt="10" mb="20">
        <Box maxW="1400px" ml="auto" mr="auto">
          <TopCard title="Purpose" subtitle="各地域の総合レビュー" img="top_tokyo.jpg">
            東京、引っ越しの際に東京がどんな場所なのか東京に住んでる方の素直な意見を見ることができ、地域についてのイメージをつかめます
          </TopCard>
          <TopCard title="Review" subtitle="様々な観点からの素直な意見" img="top_review.png">
            治安、物価、交通など項目に分けてその地域に住んでる皆さんの様々な意見や感想など確認できます。
          </TopCard>
          <TopCard title="Quesiton" subtitle="疑問を解消する" img="top_question.jpg">
            あなたの疑問、不安なところを質問できます。住んでいる方から回答を得られます。
          </TopCard>
        </Box>
      </Box>
    </>
  );
};

export default Home;
