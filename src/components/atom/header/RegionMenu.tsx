import { VFC, memo } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Flex, Box, MenuList } from '@chakra-ui/react';
import AreaList from './AreaList';
import { Region } from 'src/types/Header';

const RegionMenu: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
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

  const { data } = useSWR(
    'https://9c0d98f3-468f-4409-ad83-7839a6c9cce9.mock.pstmn.io/area',
    fetcher
  );

  if (!data) return <div></div>;

  // DBから取得した地区データを2個ずつに分割し二次元配列に格納する
  const regionSlice = (array: Region[]): Region[][] => {
    const length = Math.ceil(array.length / 2);

    return new Array(length).fill(0).map((_, i) => array.slice(i * 2, (i + 1) * 2));
  };

  const splitRegion = regionSlice(data.region);

  return (
    <>
      <MenuList border="0" mt="3" bg="rgba(198, 246, 213, 0.8)" w="xl">
        {splitRegion.map((regions, index) => (
          <div key={index}>
            <Flex>
              <Box flex="1" key={regions[0].id}>
                <AreaList region={regions[0]} />
              </Box>
              {regions.length === 2 && (
                <Box flex="1" key={regions[1].id}>
                  <AreaList region={regions[1]} />
                </Box>
              )}
            </Flex>
            {splitRegion.length !== index + 1 && <hr style={styles.hr} />}
          </div>
        ))}
      </MenuList>
    </>
  );
};

export default memo(RegionMenu);
