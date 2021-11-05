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

  {
    /* 23区
    { id: 3, name: ['城南エリア', '品川区', '目黒区'] },
    { id: 4, name: ['城西エリア', '世田谷区', '杉並区', '練馬区'] },
    { id: 5, name: ['城北エリア', '北区', '板橋区'] },
  */
  }
  const area = [
    {
      id: 1,
      tiku: [
        {
          id: 1,
          name: '千代田区',
        },
        {
          id: 2,
          name: '大田区',
        },
        {
          id: 3,
          name: '港区',
        },
        {
          id: 4,
          name: '目黒区',
        },
      ],
    },
    {
      id: 2,
      tiku: [
        {
          id: 1,
          name: '台東区',
        },
        {
          id: 2,
          name: '墨田区',
        },
        {
          id: 3,
          name: '荒川区',
        },
        {
          id: 4,
          name: '葛飾区',
        },
        {
          id: 5,
          name: '江東区',
        },
        {
          id: 6,
          name: '江戸川区',
        },
      ],
    },
  ];

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
                  <HeaderArealist area={area[0]} />
                </Box>

                <Box flex="1">
                  <HeaderArealist area={area[1]} />
                </Box>
              </Flex>
              <MenuDivider />
              <Flex>
                <Box flex="1">
                  <HeaderArealist area={area[0]} />
                </Box>
                <Box flex="1">
                  <HeaderArealist area={area[1]} />
                </Box>
              </Flex>
              <MenuDivider />
              <Flex>
                <Box flex="1">
                  <HeaderArealist area={area[0]} />
                </Box>
                <Box flex="1">
                  <HeaderArealist area={area[1]} />
                </Box>
              </Flex>
              <MenuDivider />
              <Flex>
                <Box flex="1">
                  <HeaderArealist area={area[0]} />
                </Box>
                <Box flex="1"></Box>
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
