import styled from "styled-components";

const PhotoWrapper = styled.article`

    width: 33%;
    z-index: 1;

    position: absolute;
    /* transform: translateX(-50%) translateY(-50%); */
    left: 75%;
    bottom: 0%;
`

const StyledPhoto = styled.img`
    width: 100%;
    border: var(--main-border);
    border-radius: 50%;
    box-shadow: 0px 0px 25px 0px var(--main-blue);
    
`

export const NavWheelPhoto = function(){
    return(
        <PhotoWrapper>
            <StyledPhoto src="mz.webp" alt="Photograph of Michal Zywicki - web developer"/>
        </PhotoWrapper>

    )
}