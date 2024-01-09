import React from 'react';

const CookiesPage = ({ initialData }) => {
  return (
    <>
      <div style={{ margin: '10px' }}>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { initialData: null },
  };
}

export default CookiesPage;