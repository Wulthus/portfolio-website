import i18next from "i18next";
import styled from "styled-components";
import { Flag } from "./flags";

const setLanguage = (language: string) => {
    i18next.changeLanguage(language);
}

const SelectionBox = styled.article`

    aspect-ratio: 1/1;

    width: 17.5%;

    position: absolute;
    left: 50%;
    bottom: -10%;
    background: var(--main-gradient-transparent);
    border-left: var(--main-border-sm);
    border-right: var(--main-border-sm);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const SelectionButton = styled.button`
    width: 40px;
    height: 25px;
    padding: 5px;

    background-color: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    opacity: 0.7;

    transition: var(--main-transition);

    &:hover {
        opacity: 1;
        transform: translateY(-2px) scale(1.2);
    }
`

export const LanguageSelect = function(){
    return (
        <SelectionBox>
            <SelectionButton onClick={()=>setLanguage('pl')} title="Polski"><Flag country="Pl"/></SelectionButton>
            <SelectionButton onClick={()=>setLanguage('en')} title="English"><Flag country="Us"/></SelectionButton>
        </SelectionBox>
    )
}