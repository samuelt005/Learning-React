import styled from "styled-components";
import SearchInput from "../inputs/SearchInput.jsx";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src="/images/logo.png" alt="Logo SpaceApp"/>
            <SearchInput></SearchInput>
        </StyledHeader>
    )
}

export default Header