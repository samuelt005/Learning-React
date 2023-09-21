import {Title} from "../Index.jsx";
import Tags from "./tags/Tags.jsx";
import Popular from "./popular/Popular.jsx";
import styled from "styled-components";
import Image from "./image/Image.jsx";
import PropTypes from "prop-types";

const GalleryContainer = styled.section`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0;
`;

const Gallery = ({ pictures = [], onSelectedImage, onChangeFavorite }) => {
    return (
        <>
            <Tags />
            <GalleryContainer>
                <FluidSection>
                    <Title>Navegue pela Galeria</Title>
                    <StyledUl>
                        {pictures.map( picture => <Image
                            onZoomRequested={onSelectedImage}
                            onChangeFavorite={onChangeFavorite}
                            key={picture.id}
                            picture={picture}
                        ></Image> )}
                    </StyledUl>
                </FluidSection>
                <Popular>

                </Popular>
            </GalleryContainer>
        </>
    )
}

Gallery.propTypes = {
    pictures: PropTypes.array,
    onSelectedImage: PropTypes.func,
    onChangeFavorite: PropTypes.func
}

export default Gallery