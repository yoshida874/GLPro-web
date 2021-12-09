import { VFC, useState, ChangeEvent } from 'react';
import { Box, Flex, Text, Textarea } from '@chakra-ui/react';
import { Rating } from 'react-simple-star-rating';
import { Category } from 'src/types/category';

interface Props {
  category: Category;
  result: { [key: string]: { rate: number; content: String } };
  setResult: any;
}

const ReviewArea: VFC<Props> = ({ category, result, setResult }) => {
  const [rating, setRating] = useState(1);
  const [text, setText] = useState('');

  const id = category.id;

  // 星の評価数変更
  const handleRating = (rate: number): void => {
    setRating(rate);
    const reviewChange = {
      rate: rate,
      content: result[id].content,
    };

    setResult({ ...result, [id]: reviewChange });
  };

  //　レビュー書き込み時state中身更新
  const InputContent = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const text = e.target.value;

    const reviewChange = {
      rate: result[id].rate,
      content: text,
    };

    setText(text);
    setResult({ ...result, [id]: reviewChange });
  };

  return (
    <>
      <Flex alignItems="center">
        <Box width="200px">
          <Text fontSize="36px" name="name">
            {category.category_name}
          </Text>
        </Box>

        <Flex className="App" alignItems="center" pt="2">
          <Rating onClick={handleRating} ratingValue={rating} fillColor="#ffd500" size={45} />
        </Flex>
      </Flex>

      <Flex>
        <Textarea
          id="content"
          placeholder="あなたの考えを入力してね"
          focusBorderColor="#48BB78"
          resize="vertical"
          height="150px"
          value={text}
          onChange={(e) => {
            InputContent(e);
          }}
        />
      </Flex>
    </>
  );
};

export default ReviewArea;
