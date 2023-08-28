import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Stack } from '@chakra-ui/react'; // Import Chakra UI Stack
import Link from 'next/link';

const styles = {
  container: {
    marginTop: '50px',
  },
};

export default function CustomPagination(props) {
  const { currentPage, pageCount } = props;
  const renderPaginationItem = (item) => {
    const isCurrentPage = item.page === currentPage;
    const pageLink = `/api/posts/${item.page}`;
    return (
      <div style={styles.container}>
        <Link key={item.page} href={pageLink} legacyBehavior>
          <a style={{ textDecoration: 'none' }}>
            <PaginationItem
              {...item}
              component="span"
              selected={isCurrentPage}
            />
          </a>
        </Link>
      </div>
    );
  };

  return (
    <div style={styles.container}>

    </div>
  );
}
