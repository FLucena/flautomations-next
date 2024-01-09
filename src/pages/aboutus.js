import React from 'react';
import AboutUs from '../components/AboutUs';

const AboutUsPage = ({ initialData }) => {
  return (
    <AboutUs />
  );
};

export async function getServerSideProps() {
  return {
    props: { initialData: null },
  };
}

export default AboutUsPage;