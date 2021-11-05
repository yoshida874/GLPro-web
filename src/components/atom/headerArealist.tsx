import { VFC } from 'react';
import { Box, Link, Flex, MenuGroup } from '@chakra-ui/react';

type Props = {
  area: { id: number; tiku: { id: number; name: string }[] };
};

const headerArealist: VFC<Props> = ({ area }) => {
  let title = '';

  if (area.id == 1) {
    title = '都心・副都心エリア';
  } else if (area.id == 2) {
    title = '城東エリア';
  } else if (area.id == 3) {
    title = '城南エリア';
  } else if (area.id == 2) {
    title = '城西エリア';
  } else if (area.id == 2) {
    title = '城北エリア';
  }

  return (
    <>
      <MenuGroup title={title}>
        <Flex flexWrap="wrap" gridGap="6px">
          {area.tiku.map((element, index) => (
            <Box key={index} w="29%">
              <Link>{element.name}</Link>
            </Box>
          ))}
        </Flex>
      </MenuGroup>
    </>
  );
};

export default headerArealist;
