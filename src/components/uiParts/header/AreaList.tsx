import { VFC, memo } from 'react';
import { Box, Link, Flex, MenuGroup } from '@chakra-ui/react';
import { Region } from 'src/types/Header';

interface Props {
  region: Region;
}

/**
 * RegionMenuから呼び出される
 * 地区一覧のMenu
 * @param region
 * @returns
 */
const AreaList: VFC<Props> = ({ region }) => {
  return (
    <>
      <MenuGroup title={region.name}>
        <Flex flexWrap="wrap" gridGap="6px">
          {region.area.map((element, index) => (
            <Box key={index} w="29%">
              <Link href={`area/${element.id}`}>{element.name}</Link>
            </Box>
          ))}
        </Flex>
      </MenuGroup>
    </>
  );
};

export default memo(AreaList);
