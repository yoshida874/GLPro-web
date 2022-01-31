import { Select } from '@chakra-ui/react';
import { NextPage } from 'next';

interface Props {}

const SelectRegion: NextPage<Props> = () => {
  return (
    <Select w="70%" placeholder="選択してください" focusBorderColor="#48BB78">
      <option>渋谷区</option>
      <option>足立区</option>
      <option>葛飾区</option>
      <option>江戸川区</option>
      <option>荒川区</option>
      <option>台東区</option>
      <option>墨田区</option>
      <option>江東区</option>
      <option>中央区</option>
      <option>千代田区</option>
      <option>港区</option>
      <option>新宿区</option>
      <option>文京区</option>
      <option>北区</option>
      <option>板橋区</option>
      <option>豊島区</option>
      <option>練馬区</option>
      <option>杉並区</option>
      <option>中野区</option>
      <option>世田谷区</option>
      <option>目黒区</option>
      <option>品川区</option>
      <option>太田区</option>
    </Select>
  );
};

export default SelectRegion;
