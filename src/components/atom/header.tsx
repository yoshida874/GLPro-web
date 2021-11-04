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
  HStack,
  MenuItem,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Image,
} from '@chakra-ui/react';
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
      <Flex Flex bg="#48BB78" px={4} h="74px" w="100%" spacing={3}>
        <Flex>
          <Image src="/logo.png" alt="ロゴ画像です" />
        </Flex>
        <Flex ml={50} py={3}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <Menu>
                <div style={styles.link}>
                  <span style={styles.span}>district</span>
                  <MenuButton fontWeight="700">地区一覧</MenuButton>
                </div>
                <MenuList border="0" mt="3" bg="rgba(198, 246, 213, 0.5)" w="xs">
                  <HStack spacing="24px" mt="1">
                    <Box flexBasis="350">
                      <Link>新宿区</Link>
                    </Box>
                    <Box flexBasis="350">
                      <Link>中央区</Link>
                    </Box>
                    <Box flexBasis="350">
                      <Link>港区</Link>
                    </Box>
                  </HStack>

                  <Spacer />
                  <HStack spacing="24px" mt="1">
                    <Box flexBasis="350">
                      <Link>台東区</Link>
                    </Box>
                    <Box flexBasis="350">
                      <Link>文京区</Link>
                    </Box>
                    <Box flexBasis="350">
                      <Link>千代田区</Link>
                    </Box>
                  </HStack>

                  <Box>
                    <HStack spacing="24px" mt="1">
                      <Box flexBasis="350">
                        <Link>新宿区</Link>
                      </Box>
                      <Box flexBasis="350">
                        <Link>中央区</Link>
                      </Box>
                      <Box flexBasis="350">
                        <Link>港区</Link>
                      </Box>
                    </HStack>
                  </Box>
                </MenuList>
              </Menu>
            </li>
            <li style={styles.li}>
              <a href="" style={styles.link}>
                <span style={styles.span}>Questions</span>質問一覧
              </a>
            </li>
          </ul>
        </Flex>
        <Spacer />
        <Flex py={3}>
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
