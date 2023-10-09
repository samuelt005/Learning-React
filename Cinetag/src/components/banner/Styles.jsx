import styled from 'styled-components';

const StyledBanner = styled.div`
    background-image: url("./images/banner-${(props) => props.image}.png");
    width: 100%;
    height: 347px;
    background-size: cover;
    background-repeat: no-repeat;
`;

export default StyledBanner;
