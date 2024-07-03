import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/nav-bar";
import { VideoBackground } from "../../components/video-background";
import { initReactI18next } from "react-i18next";

import styled from "styled-components";
import i18next from "i18next";

//----------------------------------------------------------INITIALISE INTERNATIONALISATION

i18next.use(initReactI18next).init({
  resources: {
      en: {
        translation: {
          "title": "Web Developer",
          "contact": "Contact"
        }
      },
      pl: {
        translation: {
          "title": "Programista Aplikacji Sieciowych",
          "contact": "Kontakt",
        }
      }
    },
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

//----------------------------------------------------------COMPONENT FUNCTION


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