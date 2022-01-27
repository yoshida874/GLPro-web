import { Select } from '@chakra-ui/react';
import { NextPage } from 'next';

const SelectCategory: NextPage = () => {
  return (
    <Select w="60%" placeholder="選択してください">
      <option value="option1">渋谷区</option>
      <option value="option2">港区</option>
      <option value="option3">大田区</option>
    </Select>
  );
};

export default SelectCategory;
