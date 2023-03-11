import styled, { css } from "styled-components"

// Import Components for App
import { layout } from "theme"

// Styled CSS
const BannerCss = css`
  padding: ${props => (props.padding ? props.padding : `2rem`)};
`

// Export Styles for the component
export const BannerStyled = styled.div`
  ${BannerCss}
`

export const BannerStyledCenter = styled.div`
  ${BannerCss}
  ${layout()};
`
