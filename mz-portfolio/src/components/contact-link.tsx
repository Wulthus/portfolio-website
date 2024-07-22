import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`


    display: block;

    width: 25px;
    height: 25px;

    border-radius: 50%;
    border: var(--main-border-sm);
    color: var(--main-blue);
    
    padding: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

interface LinkProps {
    href: string,
    children: React.ReactNode | string,
}


export const ContactLink = function({ href, children }: LinkProps){
    return (
        <StyledLink href={href}>{children}</StyledLink>
    )
}