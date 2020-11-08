import React from 'react';

const SearchBox = ({handleChange,placeholder}) => {
    console.log('search',handleChange)
    console.log('search',placeholder)
    return (
        <input type="search" placeholder={placeholder} onChange={ e =>handleChange(e) }  className="custom-input"/>
    );
};

export default SearchBox;