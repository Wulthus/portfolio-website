import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/nav-bar";
import { VideoBackground } from "../../components/video-background";

import styled from "styled-components";



const StyledRoot = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  gap: 3%;

`

const StyledAside = styled.aside`
  width: 30%;
  min-height: 100%;

`

const StyledMain = styled.main`
  width: 70%;
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
            <Outlet />
          </StyledMain>
        </StyledRoot>

        </>
      )
}