import React from "react"

// Import Components for App
import { GlobalStyles } from "theme"

// Import styles from component styled file
import * as S from "./LayoutStyled"
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S.AppWrapper>
        <S.PageContainer>{children}</S.PageContainer>
      </S.AppWrapper>
    </>
  )
}
export default Layout
