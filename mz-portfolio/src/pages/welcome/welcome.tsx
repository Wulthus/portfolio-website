import { useTranslation } from "react-i18next"
import { Title } from "../../components/title";

import styled from "styled-components";
import { WelcomePhoto } from "./components/welcome-photo";
import { WelcomeCta } from "./components/welcome-cta";


const StyledParagraph = styled.p`
    margin-top: 8%;
    color: var(--main-blue-lighter);
    font-size: 2.0rem;
    font-weight: 600;
    text-align: center;
    text-shadow: 0px 0px 35px var(--main-blue);
`

const WelcomeContent = styled.div`
    padding: 5%;

    background-image: url("embedded.webp");
    box-shadow: 0rem 0rem 3rem 1rem var(--main-blue-dark-transparent);
    border-radius: 5% / 40%;

    /* overflow-y: scroll; */
`

const WelcomeSection = styled.section`
    Width: 90%;
    animation: 0.25s grow;
    position: relative;

`

export const WelcomePage: React.FC = function(){

    const { t } = useTranslation();

    return (
        <WelcomeSection>
            <WelcomePhoto />
            <WelcomeContent>
                <Title>{t("welcome-h1")}</Title>
                <StyledParagraph>{t("welcome-p1")}</StyledParagraph>
                <StyledParagraph>{t('welcome-p2')}</StyledParagraph>
                <StyledParagraph>{t('welcome-p3')}</StyledParagraph>
            </WelcomeContent>
            <WelcomeCta />
        </WelcomeSection>

    )
}