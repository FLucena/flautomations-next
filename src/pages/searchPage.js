import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Search from '../components/Search';
import { getData } from './api/posts/getData';

const SearchPage = ({ initialData }) => {
  const [filteredRowValuesList, setFilteredRowValuesList] = useState(initialData);

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
  }, []);

  const handleSearchInputChange = (value) => {
    console.log('Search Input:', value);
    const filteredData = initialData.filter((rowValues) => {
      const title = decodeURIComponent(rowValues[0]).toLowerCase();
      const description = decodeURIComponent(rowValues[1]).toLowerCase();
      return title.includes(value.toLowerCase()) || description.includes(value.toLowerCase());
    });
    setFilteredRowValuesList(filteredData);
  };

  return (
    <>
      <Navbar />
      <Search onInputChange={handleSearchInputChange} />
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8vh',
        }}
      >
        {filteredRowValuesList.map((rowValues, index) => (
          <li key={index} style={{ flexBasis: '25%', maxWidth: '25%', padding: '10px' }}>
            <Card
              title={decodeURIComponent(rowValues[0])}
              description={decodeURIComponent(rowValues[1])}
              imageUrl={decodeURIComponent(rowValues[3])}
              id={index + 1}
            />
          </li>
        ))}
      </ul>
      <Footer />
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