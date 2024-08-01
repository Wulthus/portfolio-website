import styled from "styled-components";
// import { NavLink } from "../nav-link";
import { useTranslation } from "react-i18next";
import { NavWheelPhoto } from "./components/nav-wheel-photo";
import { NavLink } from "../nav-link";
import { LanguageSelect } from "../language-select";


const NavSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledNav = styled.nav`
    aspect-ratio: 1/1;
    width: 20%;
    padding: 5%;

    border-right: var(--main-border);
    border-left: var(--main-border);
    box-shadow: 0rem 0rem 10rem 1rem var(--main-blue-dark-transparent);
    
    background-color: var(--main-blue-dark-transparent);
    background-image: url("embedded.webp");

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8%;

    border-radius: 50%;

    transition: all .2s;

    animation: grow .25s;

    position: relative;

    &:hover {
        border-right: solid 3px var(--main-blue-very-light);
        border-left: solid 3px var(--main-blue-very-light);
        box-shadow: 0rem 0rem 10rem 3rem var(--main-blue-dark-transparent);
        color: var(--main-blue-very-light);
    }

`

const Name = styled.hgroup`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8%;

    text-align: center;

    border-radius: 50%;

    font-weight: 600;

    transition: all .2s;
`

const Title = styled.h1`
    font-size: 3.0rem;
`

const SubTitle = styled.p`
    font-size: 2.0rem;
`

const Buttons = styled.ul`
    width: 33%;
    height: 33%;

    position: absolute;
    left: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10%;
`

export const NavWheel: React.FC = function(){

    const { t } = useTranslation();


    return (
        <NavSection>
            <StyledNav>
                <NavWheelPhoto />
                <LanguageSelect />
                <Name>
                    <Title>Michał Żywicki</Title>
                    <SubTitle>{t('title')}</SubTitle>
                </Name> 
            </StyledNav>
            <Buttons>
                <NavLink to="/" name={t('welcome')}/>
                <NavLink to="/" name={t('portfolio')}/>
                <NavLink to="/" name={t('techstack')}/>
                <NavLink to="/contact" name={t('contact')}/>
            </Buttons>
        </NavSection>
    )
}