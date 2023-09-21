import styled from "styled-components";
import {Title} from "../../Index.jsx";
import pictures from "./popular-pictures.json";

const PicturesColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
  height: 160px;
  object-fit: cover;
`

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 24px;
  font-weight: 700;
`;


const Popular = () => {
    return (
        <section>
            <Title $alignment='center'>Populares</Title>
            <PicturesColumn>
                {pictures.map(picture => <Image key={picture.id} src={picture.path} alt={picture.alt}/>)}
            </PicturesColumn>
            <Button>Ver mais</Button>
        </section>
    )
}

export default Popular