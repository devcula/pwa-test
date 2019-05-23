import React from 'react';
import './SearchBox.css';

const SearchBox = ({filterFunction}) => {
    return (
        <input 
        className="sbox" 
        type="search" 
        placeholder="Search Robots"
        onChange={filterFunction}
        />
    );
}

export default SearchBox;