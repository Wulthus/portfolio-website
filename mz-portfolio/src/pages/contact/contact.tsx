import { useTranslation } from "react-i18next";
import { Section } from "../../components/section";
import { Title } from "../../components/title";
import { ContactLink } from "./compoents/contact-link";
import { ContactIcon } from "./compoents/contact-icons";
import { ContactPhoto } from "./compoents/contact.photo";

import styled from "styled-components";

    const ContactLinks = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 5%;
    `

    const ContactWrapper = styled.div`
        position: relative;
    `

export const ContactPage = function(){

    const { t } = useTranslation();

    return (
        <ContactWrapper>
            <ContactPhoto />
            <Section>
                <Title>{t("contact-h1")}</Title>
                <address>
                    <ContactLinks>
                            <ContactLink href="tel:+48799850255">
                                <ContactIcon site="WhatsApp"/>
                            </ContactLink>
                            <ContactLink href="mailto:michal.zywicki@protonmail.com">michal.zywicki@protonmail.com</ContactLink>
                            <ContactLink href="https://www.linkedin.com/in/micha%C5%82-%C5%BCywicki-wulthus/">
                                <ContactIcon site="LinkedIn"/>
                            </ContactLink>
                    </ContactLinks>
                </address>
            </Section>
        </ContactWrapper>


    )
}