import Image from "next/image";
import AuthorCard from './AuthorCard';
import CustomPagination from "./CustomPagination";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled-components definitions
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
  @media (max-width: 768px) {
    left: 50%;
  }
`;

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
  const { id, pageCount } = props;
  const keys = Object.keys(props);
  const values = keys.map((key) => decodeURIComponent(props[key]));
  const encodedValues = values.map((val) => encodeURI(val));
  const [currentPage, setCurrentPage] = useState(parseInt(id));
  useEffect(() => {
    setCurrentPage(parseInt(id));
  }, [id]);

  return (
    <>
      <Wrapper>
        <h1>{decodeURI(encodedValues[0])}</h1>
        <p>{decodeURI(encodedValues[1])}</p>
        {encodedValues[3] !== '' ? (
          <ImageWrapper>
            <Image src={decodeURI(encodedValues[3])} alt="Post image" layout="fill" className={'image'} />
          </ImageWrapper>
        ) : (
          <ImageWrapper>
            <Image src={decodeURI(encodedValues[4])} alt="No image" layout="fill" className={'image'} />
            <ImageWrapperP>No image available</ImageWrapperP>
          </ImageWrapper>
        )}
        <br />
        <VideoWrapper>
          {encodedValues[2] !== '' ? (
            <iframe src={encodedValues[2]} width="640" height="352"></iframe>
          ) : (
            <Message>No video available</Message>
          )}
        </VideoWrapper>
        <div>
          <AuthorCard
            authorName={decodeURI(encodedValues[6])}
            authorImg={decodeURI(encodedValues[8])}
            authorDescription={decodeURI(encodedValues[11])}
          />
        </div>
        <PaginationWrapper>
          <CustomPagination pageCount={parseInt(pageCount)} currentPage={parseInt(id)} />
        </PaginationWrapper>
      </Wrapper>
    </>
  );
}