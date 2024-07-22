import { useTranslation } from "react-i18next";
import { Section } from "../../components/section";
import { Title } from "../../components/title";
import { ContactLink } from "../../components/contact-link";

import styled from "styled-components";


    // const Photo = styled.img`
    //     position: absolute;
    //     width: 25%;
    //     border: solid 1px var(--color-main-blue);
    // `

    const Socials = styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `

export const ContactPage = function(){

    const { t } = useTranslation();




    return (
        <Section>
            {/* <Photo src="mz.webp"></Photo> */}
            <Title>{t("contact-h1")}</Title>
            <address>
                <ul>
                    <li>
                        <a href="tel:+48799850255">(+48) 799 850 255</a>
                    </li>
                    <li>
                        <a href="mailto:michal.zywicki@protonmail.com">michal.zywicki@protonmail.com</a>
                    </li>
                </ul>
            </address>
            <Socials>
                <li>
                    <ContactLink href="#">1</ContactLink>
                </li>
                <li>
                    <ContactLink href="#">2</ContactLink>
                </li>
                <li>
                    <ContactLink href="#">3</ContactLink>
                </li>
            </Socials>
        </Section>

    )
}