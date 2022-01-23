import { VFC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { Category } from 'src/types/category';
interface Props {
  category: Category;
  status: number;
}

const CategoryRate: VFC<Props> = ({ category, status }) => {
  return (
    <Flex>
      <Text fontSize="20px" w="16">
        {category.category_name}
      </Text>
      <Text ml="4" fontSize="20px" w="16" align="end">
        {status}
      </Text>
      <Text fontSize="20px" ml="1">
        点
      </Text>
      <Text fontSize="20px" ml="4" w="20">
        (10位)
      </Text>
    </Flex>
  );
};

export default CategoryRate;
