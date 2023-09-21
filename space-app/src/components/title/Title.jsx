import styled from "styled-components";

const Title = styled.h2`
  color: #7B78E5;
  font-size: 32px;
  font-weight: 400;
  text-align: ${props => props.$alignment ? props.$alignment : "left"};
`;

export default Title