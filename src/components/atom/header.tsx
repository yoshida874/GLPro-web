import React, { VFC } from 'react';
import {
  Flex,
  Heading,
  Spacer,
  Stack,
  Box,
  Menu,
  MenuButton,
  MenuList,
  Link,
} from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Text } from '@chakra-ui/react';
// import { HamburgerIcon } from '@chakra-ui/icons';

const Header: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    ul: {
      display: 'flex',
      justifyContent: 'flexEnd',
    },
    li: {
      marginRight: '50px',
      listStyle: 'none',
    },
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
      <Flex Flex bg="#48BB78" px={4} py={2} h="64px" w="100%" spacing={3}>
        <Flex>
          <Heading color="" size="2xl">
            GLpro
          </Heading>
        </Flex>

        <Flex ml={50}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <Menu>
                <div style={styles.link}>
                  <span style={styles.span}>Questions</span>
                  <MenuButton fontWeight="700">質問一覧</MenuButton>
                </div>
                <MenuList border="0" mt="1" bg="rgba(198, 246, 213, 0.5)">
                  <Table variant="unstyled" size="md">
                    <Tbody>
                      <Tr>
                        <Td>
                          <Link>渋谷区</Link>
                        </Td>
                        <Td>
                          <Link>台東区</Link>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Link>渋谷区</Link>
                        </Td>
                        <Td>
                          <Link>台東区</Link>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </MenuList>
              </Menu>
            </li>
            <li style={styles.li}>
              <a href="" style={styles.link}>
                <span style={styles.span}>district</span>地区一覧
              </a>
            </li>
          </ul>
        </Flex>
        <Spacer />
        <Flex>
          <ul>
            <li style={styles.login}>
              <a href="" style={styles.link}>
                <span style={styles.span}>Login</span>ログイン
              </a>
            </li>
          </ul>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
