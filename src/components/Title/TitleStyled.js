import styled from "styled-components"

// Import helpers
import { setFlex, setShadow } from "theme"

// Export Styles for the component
export const TitleWrapper = styled.div`
  ${setFlex()};
  text-align: center;
  margin-bottom: ${props => props.marBtm || "1rem"};
  text-shadow: ${setShadow("dark")};

  ${({ notPadding }) =>
    notPadding &&
    `
      padding-bottom: 0 !important;
  `}

  ${({ hidden }) =>
    hidden &&
    `
      display:none !important;
  `}

  ${({ notShadow }) =>
    notShadow &&
    `
    text-shadow: none !important;
  `}
`
