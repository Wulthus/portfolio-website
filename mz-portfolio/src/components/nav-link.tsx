import { Link } from "react-router-dom";
import styled from "styled-components";


export interface NavLinkProps {
    name: string,
    to: string,
}

const StyledNavLink = styled(Link)`

    padding: 4% 25%;

    font-size: 2rem;
    font-weight: 500;
    color: var(--main-blue-light);
    text-shadow: 0px 0px 35px var(--main-blue);
    text-align: center;
    border-radius: 15px 70px 15px 70px;

    background-color: transparent;
    border: 2px solid var(--main-blue);

    transition: all .15s;

    &:hover{
        background-color: var(--main-blue);
        color: var(--main-blue-dark-transparent)
    }
`

export const NavLink = function({ name, to = "/" }: NavLinkProps){
    return (
        <StyledNavLink to={to}>{ name }</StyledNavLink>
    )
}