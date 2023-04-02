import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  background: linear-gradient(to bottom, transparent, transparent 50%, #000000 50%, #000000);
  display: inline-block;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} alt="item image"  />
      <Info>
        <Title>{item.title}</Title>
        <Button>LEER MAS</Button>

      </Info>
    </Container>
  )
}

export default CategoryItem