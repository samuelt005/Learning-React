import styled from "styled-components";
import searchIcon from "/src/assets/search.png";

const StyledSearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  height: 56px;
  width: 600px;
`;

const StyledSearchInput = styled.input`
  padding: 12px 16px;
  background: transparent;
  border: none;
  width: 566px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  outline: none;
  &::placeholder {
    color: #D9D9D9;
    opacity: 1;
  }
`;

const SearchIcon = styled.img`
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const SearchInput = () => {
    return (
        <StyledSearchContainer>
            <StyledSearchInput placeholder="O que você procura?"/>
            <SearchIcon src={searchIcon}/>
        </StyledSearchContainer>
    )
}

export default SearchInput