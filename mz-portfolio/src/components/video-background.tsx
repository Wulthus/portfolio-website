import styled from "styled-components"


const VideoWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    background-color: #000;
`

const StyledVideo = styled.video`
    position: absolute;
    
    width: 1900px;

    object-fit: cover;

    filter: hue-rotate(247deg) brightness(85%);

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);


`

interface VideoBackgroundProps {
  children: React.ReactNode
}

export const VideoBackground = function({ children }: VideoBackgroundProps){
    return (
        <VideoWrapper>
          <StyledVideo autoPlay={true} muted loop>
            <source src="nodes.webm" type='video/mp4' />
          </StyledVideo>
          { children }
        </VideoWrapper>
      )
}