import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Search from '../components/Search';
import { getData } from './api/posts/getData';
import * as contentEn from '../components/content-en';
import * as contentEs from '../components/content-es';
import { Button, Flex } from '@chakra-ui/react';

const SearchPage = ({ initialData }) => {
  const defaultLang = 'es';
  const content = defaultLang === 'en' ? contentEn : contentEs;
  const [filteredRowValuesList, setFilteredRowValuesList] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

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
      <Navbar lang={defaultLang} />
      <div style={{ margin: '10px' }}>
      </div>
      <Footer lang={defaultLang} />
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