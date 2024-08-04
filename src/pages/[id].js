import Post from '../components/Post';
import { fetchPostData } from '../utils/fetchPostData';
import { useState, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Flex } from '@chakra-ui/react';

const PostPage = ({ rowData, id }) => {
  const defaultLang = "es";
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id, key]);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [id]);

  return (
    <>
      {loading ? (
        <Flex align="center" justify="center" height="500px">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </Flex>
      ) : (
        rowData && (
          <Post {...rowData} id={id} imageSRC={rowData[3]} pageCount={1000} lang={defaultLang} />
        )
      )}
    </>
  );
};

export async function getServerSideProps({ params }) {
  let rowData = [];
  try {
    rowData = await fetchPostData(parseInt(params.id) + 1);
    if (rowData === undefined) {
      rowData = await fetchPostData(parseInt(params.id) + 1);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  // Ensure rowData is properly serialized
  rowData = rowData || null;
  if (rowData && typeof rowData === 'object') {
    rowData = JSON.parse(JSON.stringify(rowData, (key, value) => (value === undefined ? null : value)));
  }

  return {
    props: {
      rowData,
      id: params.id,
    },
  };
}

export default PostPage;