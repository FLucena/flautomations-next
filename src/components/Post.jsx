import Image from "next/image";
import AuthorCard from './AuthorCard';
import CustomPagination from "./CustomPagination";
import { useRouter } from 'next/router'; // Import the useRouter hook
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  max-width: 1200px;
  margin: 2rem auto; /* Horizontally center the component */
  
  @media (max-width: 768px) {
    /* Adjust as needed for mobile layout */
  }
};`;

const ImageWrapper = styled.div`
  width: 100%;
  padding: 1vh;
  max-width: 500px;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

const ImageWrapperP = styled.p`
  margin: 0;
  padding: 10px;
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  border: none;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: red;
  font-weight: bold;
`;

const PaginationWrapper = styled.div`
  margin: 20px;
`;

export default function Post(props) {
  const { id, pageCount, lang } = props;
  const [currentPage, setCurrentPage] = useState(parseInt(id));
  const router = useRouter();

  const handlePageChange = (newPage) => {
    router.push(`./${newPage}`);
  };

  useEffect(() => {
    setCurrentPage(parseInt(id));
  }, [id]);

  try {
    const decodedProps = Object.keys(props).reduce((decoded, key) => {
      decoded[key] = decodeURIComponent(props[key]);
      return decoded;
    }, {});

    return (
      <Wrapper>
        <h1>{decodedProps[0]}</h1>
        <p>{decodedProps[1]}</p>
        {decodedProps[3] !== '' ? (
          <ImageWrapper>
            <Image
              src={decodedProps[3]}
              alt="Post image"
              className={'image'}
              width="1000"
              height="1000"

            />
          </ImageWrapper>
        ) : (
          <ImageWrapper>
            <Image
              src={decodedProps[4]}
              alt="No image"
              className={'image'}
              width="1000"
              height="1000"
            />
            <ImageWrapperP>No image available</ImageWrapperP>
          </ImageWrapper>
        )}
        <br />
        <VideoWrapper>
          {decodedProps[2] !== '' ? (
            <iframe src={decodedProps[2]} width="640" height="352"></iframe>
          ) : (
            <Message>No video available</Message>
          )}
        </VideoWrapper>

        <AuthorCard
          authorName={decodedProps[6]}
          authorImg={decodedProps[8]}
          authorDescription={decodedProps[11]}
        />
        <PaginationWrapper>
          <CustomPagination
            currentPage={parseInt(id)}
            totalPages={parseInt(pageCount)}
            onPageChange={handlePageChange}
            lang={lang}
          />
        </PaginationWrapper>
      </Wrapper>
    );
  } catch (error) {
    // Handle the error here
    console.error('An error occurred while rendering the Post component:', error);
    // You can return a fallback UI or an error message here if needed
    return <div>Oops! Something went wrong while rendering this post.</div>;
  }
}