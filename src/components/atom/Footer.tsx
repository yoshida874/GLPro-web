import React, { VFC } from 'react';
import { Flex, Text, HStack } from '@chakra-ui/react';

const Footer: VFC = () => {
  return (
    <Flex
      bg="#48BB78"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      <HStack spacing={8} mb={8}>
        <Text>Privacy</Text>
        <Text>Terms of Use</Text>
      </HStack>
      <Flex width="100%" justifyContent="center" wrap="wrap">
        <Text width="50%" textAlign="center" fontSize="sm">
          @.2021.GLPro
        </Text>
      </Flex>
    </Flex>
  );
};

export default React.memo(Footer);
