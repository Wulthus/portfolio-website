import styled from "styled-components"


const VideoWrapper = styled.div`
    position: relative;
`

const StyledVideo = styled.video`
    position: absolute;
    max-width: 100%;
    z-index: -1;
    filter: saturate(150%) brightness(90%);
`

export const VideoBackground: React.FC = function(){
    return (
        <VideoWrapper>
          <StyledVideo autoPlay={true} muted loop>
            <source src="earth.mp4" type='video/mp4' />
          </StyledVideo>
        </VideoWrapper>
      )
}