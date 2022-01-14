import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Image, Text } from '@chakra-ui/react';
import TopCard from 'src/components/top/TopCard';

const Home: NextPage = () => {
  return (
    <>
      <Box position="relative">
        <Image src="/top.jpg" alt="" Width="100%" maxH="600" />
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
        <TopCard title="Purpose" subtitle="各地域の総合レビュー" img="tokyo.jpg">
          東京、引っ越しの際に東京がどんな場所なのか東京に住んでる方の素直な意見を見ることができ、地域についてのイメージをつかめます
        </TopCard>
        <TopCard title="Review" subtitle="様々な観点からの素直な意見" img="review.jpg">
          治安、物価、交通など様々な項目に分けて住んでる皆さんの意見や感想など確認できます。
        </TopCard>
        <TopCard title="Quesiton" subtitle="疑問を解消する" img="review.jpg">
          治安、物価、交通など様々な項目に分けて住んでる皆さんの意見や感想など確認できます。
        </TopCard>
      </Box>
    </>
  );
};

export default Home;
