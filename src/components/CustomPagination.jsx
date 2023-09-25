import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';
import * as contentEn from './content-en';
import * as contentEs from './content-es';

const CustomPagination = ({ currentPage, totalPages, onPageChange, lang }) => {
  const content = lang === 'en' ? contentEn : contentEs;
  const fontSize = useBreakpointValue({ base: 'xs', md: 'md', lg: 'lg' });

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          variant={currentPage === page ? 'solid' : 'outline'}
          fontSize={fontSize} // Apply responsive font size
        >
          {page}
        </Button>
      );
    }
    return pageButtons;
  };

  return (
    <Flex align="center" justify="center" mt={4}>
      {currentPage > 1 && (
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          leftIcon={'<'}
          variant="outline"
          fontSize={fontSize} // Apply responsive font size
        >
        </Button>
      )}
      {renderPageButtons()}
      {currentPage < totalPages && (
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          rightIcon={'>'}
          variant="outline"
          fontSize={fontSize} // Apply responsive font size
        >
        </Button>
      )}
    </Flex>
  );
};

export default CustomPagination;