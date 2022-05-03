import React, { useEffect, useState } from 'react';
import { FlexBox, FlexColumn } from '../../styles/commonStyles';
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = ({ result }) => {
  const [sporting, setSporting] = useState([]);
  const [electron, setElectron] = useState([]);
  const [separatedData, setSeparatedData] = useState({
    sporting: [],
    electron: [],
  });

  console.log(result);

  useEffect(() => {
    result.map((item) => {
      console.log(item);
      return item.category === 'Sporting Goods'
        ? setSporting([...sporting, item])
        : item.category === 'Electronics'
        ? setElectron([...electron, item])
        : null;
    });

    setSeparatedData({
      sporting: sporting.length !== 0 && sporting,
      electron: electron.length !== 0 && electron,
    });
  }, [electron, result, sporting]);

  return (
    <FlexColumn>
      <FlexBox>
        <h4>Name</h4>&nbsp;
        <h4>Price</h4>
      </FlexBox>
      {separatedData !== null && (
        <ProductCategoryRow separatedData={separatedData} />
      )}
    </FlexColumn>
  );
};

export default ProductTable;
