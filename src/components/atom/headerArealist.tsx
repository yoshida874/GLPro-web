import React, { VFC } from 'react';
import { Box, Link, HStack, MenuGroup, MenuDivider } from '@chakra-ui/react';

const headerArealist: VFC = () => {
  return (
    <>
      <MenuGroup title="都心・副都心エリア">
        <HStack spacing="24px" width="100%" ml="4">
          <Box width="40%">
            <Link>千代田区</Link>
          </Box>
          <Box width="40%">
            <Link>中央区</Link>
          </Box>
          <Box width="40%">
            <Link>港区</Link>
          </Box>
        </HStack>
        <HStack spacing="24px" width="100%" ml="4">
          <Box width="40%">
            <Link>新宿区</Link>
          </Box>
          <Box width="40%">
            <Link>文京区</Link>
          </Box>
          <Box width="40%">
            <Link>豊島区</Link>
          </Box>
        </HStack>
      </MenuGroup>

      <MenuDivider />
    </>
  );
};

{
  /*
<MenuGroup title="城南エリア">
                    <HStack spacing="24px" width="100%" ml="4">
                      <Box width="40%">
                        <Link>品川区</Link>
                      </Box>
                      <Box width="40%">
                        <Link>大田区</Link>
                      </Box>
                      <Box width="40%">
                        <Link>港区</Link>
                      </Box>
                    </HStack>
                    <HStack spacing="24px" width="100%" ml="4">
                      <Box width="40%">
                        <Link>目黒区</Link>
                      </Box>
                    </HStack>
                  </MenuGroup>

                  
                <MenuGroup title="城西エリア">
                    <HStack spacing="24px" width="100%" ml="4">
                      <Box width="40%">
                        <Link>世田谷区</Link>
                      </Box>
                      <Box width="40%">
                        <Link>中野区</Link>
                      </Box>
                      <Box width="40%">
                        <Link>杉並区</Link>
                      </Box>
                    </HStack>
                    <HStack spacing="24px" ml="4">
                      <Box width="40%">
                        <Link>練馬区</Link>
                      </Box>
                    </HStack>
                  </MenuGroup> */
}
export default headerArealist;
