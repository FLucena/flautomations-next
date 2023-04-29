import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import styles from './CustomPagination.module.css';

export default function CustomPagination(props) {
  const { currentPage, pageCount } = props;
  const renderPaginationItem = (item) => {
    const isCurrentPage = item.page === currentPage;
    const pageLink = `/api/posts/${item.page}`;
    return (
      <div className={styles.container}>
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
    <div className={styles.container}>
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={pageCount}
          color="primary"
          defaultPage={currentPage}
          renderItem={renderPaginationItem}
        />
      </Stack>
    </div>
  );
}
