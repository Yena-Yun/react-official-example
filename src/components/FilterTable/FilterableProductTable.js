import React, { useState } from 'react';
import { FlexColumn } from '../../styles/commonStyles';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
  const [result, setResult] = useState([]);

  return (
    <FlexColumn>
      <SearchBar setResult={setResult} />
      <ProductTable result={result} setResult={setResult} />
    </FlexColumn>
  );
};

export default FilterableProductTable;
