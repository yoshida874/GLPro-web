import { Select } from '@chakra-ui/react';
import { NextPage } from 'next';

interface Props {}

const SelectCategory: NextPage<Props> = () => {
  return (
    <Select w="60%" placeholder="選択してください">
      <option>治安</option>
    </Select>
  );
};

export default SelectCategory;
