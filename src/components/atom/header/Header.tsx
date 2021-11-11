import React, { VFC } from 'react';
import {
  Flex,
  Spacer,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Link,
  MenuDivider,
  Image,
} from '@chakra-ui/react';

// import { HamburgerIcon } from '@chakra-ui/icons';
import HeaderAreaList from './HeaderAreaList';
import { AREA } from '../../../common/area';
const area = AREA;

const Header: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    span: {
      color: '#053e62',
      fontSize: '13px',
    },
  };

  return (
    <>
      <Flex bg="#48BB78" px={4} h="74px" w="100%" spacing={3}>
        <Flex id="title">
          <Image src="/logo.png" alt="ロゴ画像です" />
        </Flex>
        <Flex ml={50} py={3} id="test">
          <Menu id="area-btn">
            <Flex textAlign="center" direction="column" fontWeight="700">
              <span style={styles.span}>district</span>
              <MenuButton fontWeight="700">地区一覧</MenuButton>
            </Flex>
            <MenuList border="0" mt="3" bg="rgba(198, 246, 213, 0.5)" w="xl">
              <Flex>
                <Box flex="1">
                  <HeaderAreaList area={area[0]} />
                </Box>

                <Box flex="1">
                  <HeaderAreaList area={area[1]} />
                </Box>
              </Flex>
              <MenuDivider />
              <Flex>
                <Box flex="1">
                  <HeaderAreaList area={area[2]} />
                </Box>
                <Box flex="1">
                  <HeaderAreaList area={area[1]} />
                </Box>
              </Flex>
              <MenuDivider />
              <Flex>
                <Box flex="1">
                  <HeaderAreaList area={area[1]} />
                </Box>
                <Box flex="1">
                  <HeaderAreaList area={area[0]} />
                </Box>
              </Flex>
              <MenuDivider />
              <Flex>
                <Box flex="1">
                  <HeaderAreaList area={area[0]} />
                </Box>
                <Box flex="1"></Box>
              </Flex>
            </MenuList>
          </Menu>

          <Flex textAlign="center" ml="5" direction="column" fontWeight="700">
            <span style={styles.span}>district</span>
            <Link fontWeight="700">質問一覧</Link>
          </Flex>
        </Flex>
        <Spacer />
        <Flex py={3} textAlign="center" ml="5" direction="column" fontWeight="700">
          <span style={styles.span}>login</span>
          <Link fontWeight="700">ログイン</Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
