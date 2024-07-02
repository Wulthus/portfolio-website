import { NavBar } from "../../components/nav-bar";
import { VideoBackground } from "../../components/video-background";

import styled from "styled-components";



const StyledRoot = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;

`

const StyledAside = styled.aside`
  width: 20%;
  min-height: 100%;

`

const StyledMain = styled.main`
  width: 80%;
  height: 100%;
`


export const RootPage = function(){
    return (
        <>
        <VideoBackground />
        <StyledRoot>
          <StyledAside>
            <NavBar />
          </StyledAside>
          <StyledMain>

          </StyledMain>
        </StyledRoot>

        </>
      )
}