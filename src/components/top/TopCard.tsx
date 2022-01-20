import { VFC } from 'react';
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react';

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
            <Text fontSize="80px" fontWeight="bold">
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
                <Link
                  fontSize="xl"
                  textDecoration="underline"
                  _hover={{ color: 'red.500', fontSize: '2xl' }}
                >
                  View Question →
                </Link>
              </Box>
            )}
          </Box>
        </Flex>
        <Box mt="10%">
          <Image src={`/${img}`} alt="" w="470px" height="350px" />
        </Box>
      </Flex>
    </>
  );
};

export default TopCard;
