import styled from 'styled-components';
import Image from 'next/image';

const AuthorCardContainer = styled.div`
  max-width: 700px;
  margin: 20px;
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Avatar = styled.div`
  margin-right: 2rem;
  border-radius: 50% 0 50% 50%;
  overflow: hidden;
  width: 50vw;
  height: 55vw;
  max-width: 100px;
  max-height: 111px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
    border-radius: 50%;
  }
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Name = styled.div`
  flex: 50%;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Details = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function AuthorCard(props) {
  const { authorName, authorImg, authorDescription } = props;

  return (
    <AuthorCardContainer>
      <Avatar>
        <Image src={authorImg} alt="Author Avatar" width={100} height={110} />
      </Avatar>
      <Details>
        <Name>
          <h1>{authorName}</h1>
        </Name>
        <div>
          <Bio>{authorDescription}</Bio>
        </div>
      </Details>
    </AuthorCardContainer>
  );
}