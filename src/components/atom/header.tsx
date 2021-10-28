import { VFC } from 'react';
import { Flex, Button, Heading, Spacer } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header: VFC = () => {
  return (
    <Flex bg="#48BB78" px={4} py={2} h="64px" w="100%">
      <Heading>GL pro</Heading>
      <Spacer />
      <Button color="black" bg="transparent" _hover={{ bg: '#50E090' }}>
        <HamburgerIcon h="36px" w="32px" />
      </Button>
    </Flex>
  );
};

export default Header;
