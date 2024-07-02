import styled from "styled-components"

export interface NavButtonProps {
    name: string,
}

const StyledNavButton = styled.button`
    width: 80%;
    height: 10%;

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

export const NavButton = function({ name }: NavButtonProps){
    return (
        <StyledNavButton>{ name }</StyledNavButton>
    )
}