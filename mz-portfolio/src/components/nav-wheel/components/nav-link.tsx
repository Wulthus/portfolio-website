import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavTapIcon } from "./nav-tap-icon";


export interface NavLinkProps {
    name: string,
    to: string,
}

const StyledNavLink = styled(Link)`
    height: 10%;
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    color: var(--main-blue-light);
    text-shadow: 0px 0px 35px var(--main-blue);
    text-align: center;
    border-radius: 50%;

    display: flex;
    align-items: center;
    gap: 5%;

    &:hover {
        color: #fff;
        text-shadow: 0px 0px 35px #fff;
        animation: textBlink .2s;
        
    }
`

const StyledLabel = styled.label`
    
`

const LinkIcon = styled.figure`
    width: 20%;
`

export const NavLink = function({ name, to = "/" }: NavLinkProps){
    return (
        <StyledNavLink to={to}>
            <LinkIcon>
                <NavTapIcon />
            </LinkIcon>
            <StyledLabel>
                { name }
            </StyledLabel>
        </StyledNavLink>
    )
}