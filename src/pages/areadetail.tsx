import { NextPage } from 'next';
import { useState } from 'react';

import StarRatings from 'react-star-ratings';

const AreaDerail: NextPage = () => {
  const [rating, setRating] = useState(3);
  return (
    <>
      <h1>地区詳細ページ</h1>
      <StarRatings
        rating={rating}
        changeRating={setRating}
        starRatedColor="yellow"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="4px"
      ></StarRatings>
    </>
  );
};

export default AreaDerail;
