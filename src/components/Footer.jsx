import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Logo = styled.h1`
  margin-bottom: 2px;
`;

const Desc = styled.p`
  margin-bottom: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Title = styled.h3`
  margin-top: 2px;
  margin-bottom: 2px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 10px;
  }
`;

const PaymentImage = styled(Image)`
  width: 50%;
  align-self: center;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FL Automations.</Logo>
        <Desc></Desc>
        <SocialContainer>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces útiles</Title>
        <List>
          <ListItem><HomeIcon/></ListItem>
          <ListItem><AccountCircleIcon/></ListItem>
          <ListItem><InstagramIcon/></ListItem>
          <ListItem><TwitterIcon/></ListItem>
          <ListItem><LinkedInIcon/></ListItem>
          <ListItem><FacebookIcon/></ListItem>
          <ListItem><MailIcon/></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
        </ContactItem>
        <ContactItem>
        </ContactItem>
        <ContactItem>
        </ContactItem>
        <PaymentImage src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" width={232} height={25} />
      </Right>
    </Container>
  );
};

export default Footer;