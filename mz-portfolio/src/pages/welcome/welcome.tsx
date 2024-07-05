import { useTranslation } from "react-i18next"
import styled from "styled-components";

const Title = styled.h2`
    margin-bottom: 6%;
    color: var(--main-blue-lighter);
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 0px 0px 35px var(--main-blue);
`

const StyledParagraph = styled.p`
    margin-top: 4%;
    color: var(--main-blue-lighter);
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 0px 0px 35px var(--main-blue);
`

const StyledSection = styled.section`
    padding: 5%;

    background: var(--main-gradient-transparent);
    box-shadow: 0rem 0rem 3rem 1rem var(--main-blue-dark-transparent);

    /* border-right: var(--main-border);
    border-bottom: var(--main-border); */

    animation: 0.25s grow;
`

export const WelcomePage: React.FC = function(){

    const { t } = useTranslation();

    return (
        <StyledSection>
            <Title>{t("welcome-h1")}</Title>
            <StyledParagraph>{t("welcome-p1")}</StyledParagraph>
            <StyledParagraph>{t('welcome-p2')}</StyledParagraph>
            <StyledParagraph>{t('welcome-p3')}</StyledParagraph>
        </StyledSection>
    )
}