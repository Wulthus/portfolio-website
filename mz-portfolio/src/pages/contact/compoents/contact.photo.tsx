import styled from "styled-components";

const PhotoWrapper = styled.article`

    position: absolute;
    left: 70%;
    top: -50%;
    transform: translate(50%, 50%);

    padding: 4.5%;
    
    z-index: 1;

    background-image: url("embedded.webp");

    border: var(--main-border);
    border-radius: 10% / 50%;

    animation: 0.25s grow;
`

const StyledPhoto = styled.img`
    width: 100%;
    border: var(--main-border);
    border-radius: 50%;
    box-shadow: 0px 0px 25px 0px var(--main-blue);
    
`

export const ContactPhoto = function(){
    return(
        <PhotoWrapper>
            <StyledPhoto src="mz.webp"/>
        </PhotoWrapper>

    )
}