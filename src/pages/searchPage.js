import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Search from '../components/Search';
import { getData } from './api/posts/getData';

const SearchPage = ({ initialData }) => {
  const defaultLang = "es";
  const [filteredRowValuesList, setFilteredRowValuesList] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setFilteredRowValuesList(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleSearchInputChange = (value) => {
    console.log('Search Input:', value);
    const filteredData = initialData.filter((rowValues) => {
      const title = decodeURIComponent(rowValues[0]).toLowerCase();
      const description = decodeURIComponent(rowValues[1]).toLowerCase();
      return title.includes(value.toLowerCase()) || description.includes(value.toLowerCase());
    });
    setFilteredRowValuesList(filteredData);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredRowValuesList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRowValuesList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <Navbar lang={defaultLang}/>
      <Search onInputChange={handleSearchInputChange} />
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {currentItems.map((rowValues) => (
          <li key={rowValues[13]} style={{margin: '10px' }}>
            <Card
              title={decodeURIComponent(rowValues[0])}
              description={decodeURIComponent(rowValues[1])}
              imageUrl={decodeURIComponent(rowValues[3])}
              id={rowValues[13]}
            />
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <Footer lang={defaultLang}/>
    </>
  );
};

export async function getServerSideProps() {
  const rowValuesList = await getData();
  return {
    props: { initialData: rowValuesList },
  };
}

export default SearchPage;