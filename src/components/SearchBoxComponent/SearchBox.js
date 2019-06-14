import React from 'react';
import './SearchBox.css';

const SearchBox = ({filterFunction}) => {
    return (
        <input 
        className="sbox" 
        type="search" 
        placeholder="Search Bots"
        onChange={filterFunction} 
        />
    );
}

export default SearchBox;