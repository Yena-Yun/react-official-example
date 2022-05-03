import React from 'react';
import { FlexColumn } from '../../styles/commonStyles';
import ProductRow from './ProductRow';

const ProductCategoryRow = ({ separatedData }) => {
  console.log(separatedData);

  return (
    <>
      {separatedData['sporting'] ? (
        <FlexColumn>
          {separatedData['sporting'].map((res) => (
            <div key={`${res.name}_${res.price}`}>
              <h5>{res.category}</h5>
              <ProductRow res={res} />
            </div>
          ))}
        </FlexColumn>
      ) : separatedData['electron'] ? (
        <FlexColumn>
          {separatedData['electron'].map((res) => (
            <div key={`${res.name}_${res.price}`}>
              <h5>{res.category}</h5>
              <ProductRow res={res} />
            </div>
          ))}
        </FlexColumn>
      ) : null}
    </>
  );
};

export default ProductCategoryRow;
