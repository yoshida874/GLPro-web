import { VFC, memo } from 'react';
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
      position="absolute"
      bottom="0"
    >
      <HStack spacing={8} mb={8}>
        <Text>プライバシー</Text>
        <Text>利用規約</Text>
      </HStack>
      <Flex width="100%" justifyContent="center" wrap="wrap">
        <Text width="50%" textAlign="center" fontSize="sm">
          @.2022.GLPro
        </Text>
      </Flex>
    </Flex>
  );
};

export default memo(Footer);
