import { VFC, memo } from 'react';
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, Link, Image } from '@chakra-ui/react';
import useSWR from 'swr';
import axios from 'axios';
import HeaderAreaList from './HeaderAreaList';

const Header: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    span: {
      color: '#053e62',
      fontSize: '13px',
    },
    hr: {
      margin: '10px 0px',
      height: '1px',
      backgroundColor: 'white',

      border: 'none',
    },
  };

  const fetcher = async () => {
    const res = await axios.get('https://9c0d98f3-468f-4409-ad83-7839a6c9cce9.mock.pstmn.io/area');
    return res.data;
  };

  const { data, error } = useSWR(
    'https://9c0d98f3-468f-4409-ad83-7839a6c9cce9.mock.pstmn.io/area',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const RegionSliceByNumber = (array: any, number: number) => {
    const length = Math.ceil(array.length / number);

    return new Array(length).fill().map((_, i) => array.slice(i * number, (i + 1) * number));
  };

  const splitRegion = RegionSliceByNumber(data.region, 2);
  const splitRegionLength = splitRegion.length;

  return (
    <>
      <Flex bg="#48BB78" px={4} h="74px" w="100%" spacing={3}>
        <Flex>
          <Image src="/logo.png" alt="ロゴ画像です" />
        </Flex>
        <Flex ml={50} py={3}>
          <Menu id="area-btn">
            <Flex textAlign="center" direction="column" fontWeight="700">
              <span style={styles.span}>district</span>
              <MenuButton fontWeight="700">地区一覧</MenuButton>
            </Flex>
            <MenuList border="0" mt="3" bg="rgba(198, 246, 213, 0.8)" w="xl">
              {splitRegion.map((obj, index) => (
                <div key={index}>
                  <Flex>
                    <Box flex="1" key={obj[0].id}>
                      <HeaderAreaList region={obj[0]} />
                    </Box>

                    {obj.length === 2 && (
                      <Box flex="1" key={obj[1].id}>
                        <HeaderAreaList region={obj[1]} />
                      </Box>
                    )}
                  </Flex>
                  {splitRegionLength !== index + 1 && <hr style={styles.hr} />}
                </div>
              ))}
            </MenuList>
          </Menu>

          <Flex textAlign="center" ml="5" direction="column" fontWeight="700">
            <span style={styles.span}>question</span>
            <Link fontWeight="700">質問一覧</Link>
          </Flex>
        </Flex>
        <Spacer />
        <Flex py={3} textAlign="center" ml="5" direction="column" fontWeight="700">
          <span style={styles.span}>login</span>
          <Link fontWeight="700">ログイン</Link>
        </Flex>
        <hr />
      </Flex>
    </>
  );
};

export default memo(Header);
