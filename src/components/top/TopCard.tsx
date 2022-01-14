import { VFC } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle: string;
  children: string;
  img: string;
}

const TopCard: VFC<Props> = ({ title, children, subtitle, img }) => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="space-between" mt="10%">
        <Flex direction="column" w="60%">
          <Box>
            <Text fontSize="80px" fontWeight="bold" textDecoration="underline">
              {title}
            </Text>
          </Box>
          <Box mt="20" w="90%">
            <Box>
              <Text fontSize="3xl">{subtitle}</Text>
            </Box>
            <Box mt="7" ml="4">
              <Text fontSize="xl">{children}</Text>
            </Box>
            {title === 'Quesiton' && (
              <Box mt="10%" ml="70%">
                <Text fontSize="2xl" textDecoration="underline">
                  View Question →
                </Text>
              </Box>
            )}
          </Box>
        </Flex>
        <Image src={`/${img}`} alt="" display="block" w="40%" height="100%" mt="10%" />
      </Flex>
    </>
  );
};

export default TopCard;
