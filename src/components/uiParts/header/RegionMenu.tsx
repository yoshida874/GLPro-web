import { VFC, memo } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Flex, Box, MenuList } from '@chakra-ui/react';
import AreaList from './AreaList';
import { Region } from 'src/types/Header';

const fetcher = async () => {
  const res = await axios.get('http://localhost:8080/region');
  return res.data;
};

/**
 * 地区一覧をクリックした際に開くBox
 * @returns
 */
const RegionMenu: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    hr: {
      margin: '10px 0px',
      height: '1px',
      backgroundColor: 'white',

      border: 'none',
    },
  };

  const { data } = useSWR('http://localhost:8080/region', fetcher);

  if (!data) return <div></div>;

  // DBから取得した地区データを2個ずつに分割し二次元配列に格納する
  const regionSlice = (regions: Region[]): Region[][] => {
    const regionLength = Math.ceil(regions.length / 2);

    return new Array(regionLength).fill(0).map((_, i) => regions.slice(i * 2, (i + 1) * 2));
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
