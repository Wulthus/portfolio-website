import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/nav-bar";
import { VideoBackground } from "../../components/video-background";
import { initReactI18next } from "react-i18next";
import { translations } from "../../framework/i18n/translations";
import { LanguageSelect } from "../../components/language-select/language-select";

import styled from "styled-components";
import i18next from "i18next";





//----------------------------------------------------------INITIALISE INTERNATIONALISATION

i18next.use(initReactI18next).init({
  resources: translations,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    }
})

//----------------------------------------------------------ADD STYLES

const StyledRoot = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;

  position: relative;
  z-index: 1;

`

const StyledAside = styled.aside`
  width: 30%;
  min-height: 100%;

`

const StyledMain = styled.main`
  width: 70%;
  min-height: 90%;

  padding: 2% 5%;

  display: flex;
  align-items: center;
  justify-content: center;
`

//----------------------------------------------------------COMPONENT FUNCTION


export const RootPage = function(){


    return (
        <>
        <VideoBackground>
          <StyledRoot>
            <LanguageSelect />
            <StyledAside>
              <NavBar />
            </StyledAside>
            <StyledMain>
              <Outlet />
            </StyledMain>
          </StyledRoot>
        </VideoBackground>

        </>
      )
}