import React from 'react';
import { Box, Link, Flex, MenuGroup } from '@chakra-ui/react';

type Props = {
  area: { id: number; tiku: { id: number; name: string }[] };
};

const headerArealist: React.VFC<Props> = (props) => {
  let title = '';

  if (props.area.id == 1) {
    title = '都心・副都心エリア';
  } else if (props.area.id == 2) {
    title = '城東エリア';
  }

  return (
    <>
      <MenuGroup title={title}>
        <Flex flexWrap="wrap" gridGap="6px">
          {props.area.tiku.map((element, index) => (
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
