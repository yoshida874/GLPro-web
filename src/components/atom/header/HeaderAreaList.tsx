import { VFC, memo } from 'react';
import { Box, Link, Flex, MenuGroup } from '@chakra-ui/react';

interface Props {
  region: {
    name: string;
    area: {
      id: string;
      name: string;
    }[];
  };
}

const HeaderAreaList: VFC<Props> = ({ region }) => {
  return (
    <>
      <MenuGroup title={region.name}>
        <Flex flexWrap="wrap" gridGap="6px">
          {region.area.map((element, index) => (
            <Box key={index} w="29%">
              <Link>{element.name}</Link>
            </Box>
          ))}
        </Flex>
      </MenuGroup>
    </>
  );
};

export default memo(HeaderAreaList);
