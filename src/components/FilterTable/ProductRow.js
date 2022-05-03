import React from 'react';
import { FlexBox } from '../../styles/commonStyles';

const ProductRow = ({ category, res }) => {
  return (
    <FlexBox>
      <h6>{res.name}</h6>
      <p>{res.price}</p>
    </FlexBox>
  );
};

export default ProductRow;
