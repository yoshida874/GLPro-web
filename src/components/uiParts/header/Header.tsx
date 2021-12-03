import { VFC, memo } from 'react';
import { Flex, Spacer, Menu, MenuButton, Image, Link } from '@chakra-ui/react';
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
    <>
      <Flex bg="#48BB78" px={4} h="74px" w="100%" spacing={3}>
        <Flex>
          <Image src="/logo.png" alt="ロゴ画像です" />
        </Flex>
        <Flex ml={50} py={3}>
          <Menu id="area-btn">
            <Flex textAlign="center" direction="column">
              <MenuButton fontWeight="700">
                <Flex wrap="wrap" direction="column">
                  <span style={styles.span}>district</span>
                  <span>地区一覧</span>
                </Flex>
              </MenuButton>
            </Flex>
            <RegionMenu />
          </Menu>
          <Flex textAlign="center" ml="5" direction="column">
            <Link fontWeight="700">
              <Flex wrap="wrap" direction="column">
                <span style={styles.span}>question</span>
                <span>質問一覧</span>
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Spacer />
        <Flex py={3} textAlign="center" ml="5" direction="column">
          <Link fontWeight="700">
            <Flex wrap="wrap" direction="column">
              <span style={styles.span}>login</span>
              <span>ログイン</span>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default memo(Header);
