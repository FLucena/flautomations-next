import { useSession } from "next-auth/react";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { getFavorites } from './api/posts/getFavorites';
import { getData } from './api/posts/getData';
import * as contentEn from '../components/content-en';
import * as contentEs from '../components/content-es';
import { Button, Flex } from '@chakra-ui/react';

const SearchPage = ({ favoritesData, postsData }) => {
  const defaultLang = 'es';
  const content = defaultLang === 'en' ? contentEn : contentEs;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { data: session } = useSession();
  const filteredRowValuesList = [1, 2]
  const totalPages = Math.ceil(filteredRowValuesList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = [1, 2];

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
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '3rem'
          }}
        >
          {currentItems.map((rowValues) => (
            <li key={rowValues[13]} style={{ margin: '10px' }}>
              <Card
                title={decodeURIComponent("")}
                description={decodeURIComponent("")}
                imageUrl={decodeURIComponent("")}
                id={""}
              />
            </li>
          ))}
        </ul>

        <Flex align="center" justify="center" mt={4}>
          {currentPage > 1 && (
            <Button onClick={handlePreviousPage} leftIcon="<" variant="outline">
              {content.pagination.previousPage}
            </Button>
          )}
          {currentPage < totalPages && (
            <Button onClick={handleNextPage} rightIcon=">" variant="outline">
              {content.pagination.nextPage}
            </Button>
          )}
        </Flex>
      </div>
      <Footer lang={defaultLang} />
    </>
  );
};

export async function getServerSideProps() {
  const favoritesData = await getFavorites();
  const postsData = await getData();

  return {
    props: { 
      favoritesData: favoritesData, 
      postsData: postsData 
    },
  };
}

export default SearchPage;