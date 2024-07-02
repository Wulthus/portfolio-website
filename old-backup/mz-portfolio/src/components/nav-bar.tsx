import styled from "styled-components";

const StyledNav = styled.nav`
    width: 100%;
    height: 100%;

    clip-path: polygon(90% 0, 100% 10%, 100% 90%, 90% 100%, 0 100%, 0 0);

    border-right: solid 5px var(--main-blue);
    background-color: var(--main-blue-transparent);
    box-shadow: 0.3rem 0rem 2rem .5rem var(--main-blue);
`

export const NavBar: React.FC = function(){
    return (
        <StyledNav>Navbar</StyledNav>
    )
}