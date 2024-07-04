import { useTranslation } from "react-i18next"
import styled from "styled-components";

const Title = styled.h2`
    color: var(--main-blue-light);
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 0px 0px 35px var(--main-blue);
`

export const WelcomePage: React.FC = function(){

    const { t } = useTranslation();

    return (
        <Title>{t("welcome-h1")}</Title>
    )
}