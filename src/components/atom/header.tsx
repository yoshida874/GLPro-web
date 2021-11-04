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
import HeaderArealist from './headerArealist';

const Header: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    span: {
      color: '#053e62',
      fontSize: '13px',
    },
    link: {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 700,
      textAlign: 'center',
    },
    login: {
      marginRight: '10px',
      listStyle: 'none',
    },
  };

  return (
    <>
      <Flex bg="#48BB78" px={4} h="74px" w="100%" spacing={3}>
        <Flex>
          <Image src="/logo.png" alt="ロゴ画像です" />
        </Flex>
        <Flex ml={50} py={3}>
          <Menu>
            <Box style={styles.link}>
              <span style={styles.span}>district</span>
              <MenuButton fontWeight="700">地区一覧</MenuButton>
            </Box>
            <MenuList border="0" mt="3" bg="rgba(198, 246, 213, 0.5)" w="xl">
              <Flex>
                <Box flex="1">
                  <HeaderArealist />
                </Box>
                <Box flex="1">
                  <HeaderArealist />
                </Box>
              </Flex>

              <MenuDivider />

              <Flex>
                <Box flex="1">
                  <HeaderArealist />
                </Box>
                <Box flex="1">
                  <HeaderArealist />
                </Box>
              </Flex>
            </MenuList>
          </Menu>

          <Box style={styles.link} ml="5">
            <span style={styles.span}>district</span>
            <Link fontWeight="700">質問一覧</Link>
          </Box>
        </Flex>
        <Spacer />
        <Flex py={3} style={styles.link} ml="5">
          <span style={styles.span}>login</span>
          <Link fontWeight="700">ログイン</Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
