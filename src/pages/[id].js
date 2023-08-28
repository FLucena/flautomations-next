import Post from '../components/Post';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchPostData } from '../utils/fetchPostData'

const PostPage = ({ rowData, id }) => {
  const defaultLang = "es";

  return (
    <>
      <Navbar lang={defaultLang}/>
      <Post {...rowData} id={id} imageSRC={rowData[3]} pageCount={1000} />
      <Footer lang={defaultLang}/>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const rowData = await fetchPostData(params.id);
  return {
    props: {
      rowData,
      id: params.id,
    },
  };
}

export default PostPage;