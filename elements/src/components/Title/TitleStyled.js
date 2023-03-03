import styled from "styled-components"

// Import helpers
import { setFlex, setColor, setShadow } from "../../theme/utils"

// Export Styles for the component
export const TitleWrapper = styled.div`
  ${setFlex()};
  text-align: center;
  margin-bottom: ${(props) => props.marBtm || `1rem`};
  text-shadow: 0 3px 12px rgba(116, 56, 120, 0.8);

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
