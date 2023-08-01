import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightblue;
  margin-bottom: 20px;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;

  /* Responsive styles for screen sizes up to 768px */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;

const RemoveStyle = styled.a`
  text-decoration: none;
  color: black;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align items in a row */
  flex: 1;

  /* Additional responsive styles for this component */
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 10px;
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align items in a row */
  flex: 1;

  /* Additional responsive styles for this component */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: white;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10px;
    display: none;
  }
`;

const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
`;

const SearchBoxContainer = styled.div`
  width: 20px;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: lightblue;
  padding: 10px;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Container>
        <Left>
          <span>EN</span>
          <Link href={`/searchPage`}>
            <SearchBoxContainer>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="2rem">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
            </SearchBoxContainer>
          </Link>
        </Left>
        <Center>
          <h1>
            <Link href="/" legacyBehavior>
              <RemoveStyle>FL Automations</RemoveStyle>
            </Link>
          </h1>
        </Center>
        <Right>
          <MenuItem>
            <Link href="/register">REGISTRARME</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/login">INICIAR SESION</Link>
          </MenuItem>
        </Right>
        <HamburgerContainer>
          <Hamburger onClick={toggleMenu}>
            <Bar></Bar>
            <Bar></Bar>
            <Bar></Bar>
          </Hamburger>
        </HamburgerContainer>
      </Container>
      <MenuList open={menuOpen}>
        <MenuItem>
          <Link href="/register">REGISTRARME</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/login">INICIAR SESION</Link>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default Navbar;