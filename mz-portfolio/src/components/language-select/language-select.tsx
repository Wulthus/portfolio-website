import i18next from "i18next";
import styled from "styled-components";

const setLanguage = (language: string) => {
    i18next.changeLanguage(language);
}

const SelectionBox = styled.article`

    padding: 1rem 0.5rem;

    position: absolute;
    top: 0%;
    right: 0%;
    background: var(--main-gradient-transparent);
    border: var(--main-border-sm);
    border-radius: 10% / 50%;
`

export const LanguageSelect = function(){
    return (
        <SelectionBox>
            <button onClick={()=>setLanguage('pl')}>PL</button>
            <button onClick={()=>setLanguage('en')}>EN</button>
        </SelectionBox>
    )
}