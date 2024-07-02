import styled from "styled-components";
import { NavLink } from "./nav-link";

const StyledNav = styled.nav`
    width: 80%;
    height: 100%;

    position: relative;
    left: 20%;

    border-right: solid 3px var(--main-blue);
    border-left: solid 3px var(--main-blue);
    background-color: var(--main-blue-dark-transparent);
    box-shadow: 0rem 0rem 10rem 1rem var(--main-blue-dark-transparent);

    display: flex;
    flex-direction: column;
    gap: 10%;

    border-radius: 10% / 50%;

    transition: all .2s;

    &:hover {
        background-color: var(--main-blue-very-light);
        box-shadow: 0rem 0rem 10rem 3rem var(--main-blue-dark-transparent);
    }
`

const Name = styled.hgroup`
    font-size: 3rem;
    font-weight: 600;
    color: var(--main-blue-light);
    text-shadow: 0px 0px 35px var(--main-blue);
    text-align: center;
`

const Buttons = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;
`

export const NavBar: React.FC = function(){
    return (
        <StyledNav>
            <Name>
                <br></br>
                <h1>Michał Żywicki</h1>
                <p>Web Developer</p>
            </Name> 
            <Buttons>
                <NavLink to="/" name="1 Button"/>
                <NavLink to="/" name="2 Button"/>
                <NavLink to="/" name="3 Button"/>
                <NavLink to="/contact" name="Contact"/>
            </Buttons>
        </StyledNav>
    )
}