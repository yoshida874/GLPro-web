import { VFC } from 'react';
import { Flex, Heading, Spacer, Stack,Box,Menu, MenuButton,MenuItem,MenuList} from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';

const Header: VFC = () => {
  return (
  
    <Flex bg="#48BB78" px={4} py={2} h="64px" w="100%">
      <Box>
        <Heading>GL pro</Heading>
      </Box>
      <Spacer />
      <Box py={4}>
        <Stack　direction={{ base: "column", md: "row" }} >
          <Box>
            <Menu isLazy>
              <MenuButton>地区一覧</MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem>New Window</MenuItem>
                  <MenuItem>Open Closed Tab</MenuItem>
                  <MenuItem>Open File</MenuItem>
                </MenuList>
            </Menu>
          </Box>
          <Box>質問一覧</Box>
          <Box>ログイン</Box>
        </Stack>
      </Box>
    </Flex>
    
  );
};

export default Header;
