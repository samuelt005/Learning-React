import styled from "styled-components";
import PropTypes from "prop-types";

const StyledNavItem = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${ props => props.$active ? "#7B78E5" : "#D9D9D9"};
  font-family: ${ props => props.$active ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`

const NavItem = ({ children, activeIcon, inactiveIcon, active }) => {
    return (
        <StyledNavItem $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt="Item Menu"/>
            {children}
        </StyledNavItem>
    )
}

NavItem.propTypes = {
    children: PropTypes.string,
    activeIcon: PropTypes.string,
    inactiveIcon: PropTypes.string,
    active: PropTypes.bool
}

NavItem.defaultProps = {
    active: false
}

export default NavItem