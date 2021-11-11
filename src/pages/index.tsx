import { NextPage } from 'next';
// import Image from 'next/image';
import { Box, Image, Flex } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Image src="/tokyo.jpg" alt="" minW="100%" height="500px" />
      </Box>

      <Box mr="16" ml="16" mt="8" mb="8">
        <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
          <Image src="/tokyo.jpg" alt="" display="block" w="48%" height="auto" />
          <Box w="48%" textAlign="center">
            <p>みんなの声が聴けるよ</p>
          </Box>
        </Flex>

        <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
          <Box w="48%" textAlign="center">
            <p>みんなの疑問を解決するよ</p>
          </Box>
          <Image src="/tokyo.jpg" alt="" display="block" w="48%" height="auto" />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
