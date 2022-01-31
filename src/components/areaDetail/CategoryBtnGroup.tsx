import { VFC } from 'react';
import { Button, Flex, ButtonGroup } from '@chakra-ui/react';

import { Category } from 'src/types/category';

interface Props {
  categories: Category[];
  selected: number;
  setSelected: any;
}

const CategoryBtnGroup: VFC<Props> = ({ categories, selected, setSelected }) => {
  const onClickEvent = (id: number): void => {
    setSelected(id);
  };

  return (
    <Flex>
      <ButtonGroup display="flex" flexWrap="wrap" gridGap="4" size="md" variant="outline">
        <Button
          ml="8px"
          color="#48BB78"
          _hover={{ color: 'white', bg: '#48BB78' }}
          _disabled={{ color: 'white', bg: '#48BB78' }}
          isDisabled={999 === selected}
          onClick={() => onClickEvent(999)}
        >
          全て
        </Button>
        {categories.map((category, index) => (
          <Button
            ml="8px"
            color="#48BB78"
            _hover={{ color: 'white', bg: '#48BB78' }}
            key={index}
            onClick={() => onClickEvent(category.id)}
            isDisabled={category.id === selected}
            _disabled={{ color: 'white', bg: '#48BB78' }}
          >
            {category.category_name}
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default CategoryBtnGroup;
