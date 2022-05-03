import React, { useState } from 'react';
import { FlexBox, FlexColumn } from '../../styles/commonStyles';
import data from '../../db.json';

const SearchBar = ({ setResult }) => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleSearch = () => {
    console.log(keyword);
    const resultData = data.filter((item) =>
      item['name'].toLowerCase().includes(keyword.toLowerCase().slice(0, 4))
    );
    console.log(resultData);

    setResult([...resultData]);
    setKeyword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleCheck = (e) => {
    const { checked } = e.target;

    if (checked) {
      const stockedItems = data.filter((item) => item['stocked'] === true);
      setResult([...stockedItems]);
    } else {
      setResult([]);
    }
  };

  return (
    <FlexColumn>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search...'
          onChange={handleChange}
          value={keyword}
        />
      </form>
      <FlexBox>
        <input type='checkbox' htmlFor='in-stock' onClick={handleCheck} />
        <label id='in-stock'>Only show products in stock</label>
      </FlexBox>
    </FlexColumn>
  );
};

export default SearchBar;
