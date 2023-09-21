import styled from "styled-components";
import {ButtonIcon} from "../../Index.jsx";
import PropTypes from "prop-types";

const Figure = styled.figure`
  width: ${props => props.$expanded ? '90%' : '460px'};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;

    h3 {
      font-family: 'GandhiSansBold', sans-serif;
      font-weight: 700;
    }

    h4 {
      flex-grow: 1;
      font-weight: 400;
    }

    h3, h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Image = ({picture, expanded, onZoomRequested, onChangeFavorite }) => {

    const favoriteIcon = picture.favorite
        ? "/icons/favorito-ativo.png"
        : "/icons/favorito.png"

    return (
        <Figure $expanded={expanded} id={`foto-${picture.id}`}>
            <img src={picture.path} alt={picture.alt}/>
            <figcaption>
                <h3>{picture.title}</h3>
                <Footer>
                    <h4>{picture.source}</h4>
                    <ButtonIcon onClick={() => onChangeFavorite(picture)}>
                        <img src={favoriteIcon} alt="Icone de favorito"/>
                    </ButtonIcon>
                    {!expanded && <ButtonIcon aria-hidden={expanded} onClick={() => onZoomRequested(picture)}>
                        <img src="/icons/expandir.png" alt="Icone de expandir"/>
                    </ButtonIcon>}
                </Footer>
            </figcaption>
        </Figure>
    )
}

Image.propTypes = {
    picture: PropTypes.object,
    expanded: PropTypes.bool,
    onZoomRequested: PropTypes.func,
    onChangeFavorite: PropTypes.func
}

Image.defaultProps = {
    expanded: false,
};

export default Image