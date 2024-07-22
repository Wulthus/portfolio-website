import styled from "styled-components";

const H2 = styled.h2`
    margin-bottom: 6%;
    color: var(--main-blue-lighter);
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
    text-shadow: 0px 0px 35px var(--main-blue);
`

interface TitleProps {
    children: React.ReactNode
}

export const Title = function({ children }: TitleProps){
    return (
        <H2>{ children }</H2>
    )
};