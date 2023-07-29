import React, { useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { renderToString } from 'react-dom/server';


const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  const styles = {
    input: {
      width: '100%',
      lineHeight: '28px',
      padding: '0 1rem',
      paddingLeft: '2.5rem',
      border: '2px solid transparent',
      borderRadius: '8px',
      outline: 'none',
      backgroundColor: '#f3f3f4',
      color: '#0d0c22',
      transition: '.3s ease',
    },
    icon: {
      position: 'absolute',
      left: '1rem',
      fill: '#9e9ea7',
      width: '1rem',
      height: '1rem',
     },
    group: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      maxWidth: '190px',
      marginTop: '3vh',
    },
  };

  return (
    <>
        <form onSubmit={handleSearch} style={styles.group}>
            <svg style={styles.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Buscar" type="search" value={searchQuery} onChange={handleSearchInputChange} style={styles.input} />
        </form>
    </>
  );
};

export default Search;