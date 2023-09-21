import tags from "./Tags.json";
import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  align-items: center;
`;

const TitleTag = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  margin-right: 30px;
`;

const Tag = styled.button`
  font-size: 24px;
  font-weight: 400;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = () => {
    return (
        <TagsContainer>
            <TitleTag>Busque por tags:</TitleTag>
            {tags.map(tag => <Tag key={tag.id}>{tag.title}</Tag>)}
        </TagsContainer>
    )
}

export default Tags