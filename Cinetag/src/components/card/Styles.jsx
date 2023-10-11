import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
    padding: 0 0 1em 0;
    margin-top: .5em;
    width: 282px;
    background-color: var(--cinza);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        padding: 0 1em;
    }
`;

const StyledCover = styled.img`
    width: 100%;
`;

const StyledFavorite = styled.img`
    padding: 0 1em;
    width: 25px;

    &:hover {
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    color: var(--preto);
    font-size: 18px;
    font-weight: 400;
    padding: 1em;
    text-decoration: none;
`;

export {
  CardContainer,
  StyledCover,
  StyledFavorite,
  StyledLink,
};
