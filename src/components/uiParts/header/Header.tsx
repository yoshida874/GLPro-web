import { VFC, memo } from 'react';
import { Flex, Menu, MenuButton, Box, Image, Link } from '@chakra-ui/react';
import RegionMenu from './RegionMenu';

/**
 * Headerの親コンポーネント
 * @returns
 */
const Header: VFC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    span: {
      color: '#053e62',
      fontSize: '13px',
    },
  };

  return (
    <Box bg="#48BB78" h="74px" w="100%">
      <Flex
        maxW="1400px"
        m={[0, 'auto']}
        px={20}
        pt={1.5}
        justifyContent="space-between"
        align-items="center"
      >
        <Box>
          <Link href="/" _focus={{ outline: 'none' }}>
            <Image src="/logo.png" alt="ロゴ画像です" maxW="170px" />
          </Link>
        </Box>
        <Flex>
          <Menu id="area-btn">
            <Flex textAlign="center">
              <MenuButton fontWeight="700" _hover={{ textDecoration: 'underline' }}>
                <Flex wrap="wrap" direction="column">
                  <span style={styles.span}>district</span>
                  <span>地区一覧</span>
                </Flex>
              </MenuButton>
            </Flex>
            <RegionMenu />
          </Menu>

          <Flex textAlign="center" ml="5" alignItems="center">
            <Link fontWeight="700">
              <Flex wrap="wrap" direction="column">
                <span style={styles.span}>question</span>
                <span>質問一覧</span>
              </Flex>
            </Link>
          </Flex>

          <Flex textAlign="center" ml="5" alignItems="center">
            <Link fontWeight="700">
              <Flex wrap="wrap" direction="column">
                <span style={styles.span}>login</span>
                <span>ログイン</span>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(Header);
