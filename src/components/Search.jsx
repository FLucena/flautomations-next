import React, { useState, useCallback } from 'react';

const Search = ({ onInputChange }) => {

  const [searchText, setSearchText] = useState('');

  const handleInputChange = useCallback((event) => {
    const { value } = event.target;
    onInputChange(value);
    setSearchText(value);
  }, [onInputChange]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
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
      color: '#9e9ea7',
      transition: '.3s ease',
    },
    icon: {
      position: 'absolute',
      left: '1rem',
      fill: '#9e9ea7',
      width: '1rem',
      height: '1rem',
      marginLeft: '1rem'
     },
    group: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '190px',
      marginTop: '2rem',
      marginLeft: '1rem'
    },
  };

  return (
    <>
        <form style={styles.group} onSubmit={handleFormSubmit}>
            <svg style={styles.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Buscar" type="search" onChange={handleInputChange} style={styles.input} />
        </form>
    </>
  );
};

export default Search;