import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    padding: 5%;


    background-image: url("embedded.webp");
    /* background: var(--main-gradient-transparent); */
    box-shadow: 0rem 0rem 3rem 1rem var(--main-blue-dark-transparent);

    overflow-y: scroll;

    animation: 0.25s grow;
    position: relative;
`

interface SectionProps {
    children: React.ReactNode;
}

export const Section = function({ children }:SectionProps){
    return (
        <StyledSection>
            { children }
        </StyledSection>
    )
}