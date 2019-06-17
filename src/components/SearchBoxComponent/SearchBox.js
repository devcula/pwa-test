import React from 'react';
import './SearchBox.css';

const SearchBox = ({filterFunction}) => {
    return (
        <input 
        aria-label="Search Bots" 
        className="sbox" 
        type="search" 
        placeholder="Search Bots"
        onChange={filterFunction} 
        />
    );
}

export default SearchBox;