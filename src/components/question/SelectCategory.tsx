import { Select } from '@chakra-ui/react';
import { NextPage } from 'next';

interface Props {}

const SelectCategory: NextPage<Props> = () => {
  return (
    <Select w="70%" placeholder="選択してください" focusBorderColor="#48BB78">
      <option>治安</option>
      <option>交通</option>
      <option>物価</option>
      <option>子育て</option>
      <option>家賃</option>
      <option>品揃え</option>
    </Select>
  );
};

export default SelectCategory;
