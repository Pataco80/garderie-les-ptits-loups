import styled, { css } from "styled-components"

// Import helpers
import { layout, media, setColor } from "../../theme/utils"

// Styled CSS
const SectionCss = css`
  background-color: ${(props) =>
    props.background ? props.background : `${setColor.white}`};
  padding: ${(props) =>
    props.padding ? props.padding : `var(--space-xl) var(--space-xs-s)`};

  ${media.greaterThan("tablet")`
    padding: ${(props) =>
      props.padding ? props.padding : `var(--space-2xl) var(--space-xl)`};
  `}

  ${media.greaterThan("desktop")`
    padding: ${(props) => (props.padding ? props.padding : `5rem`)};
  `}
`

// Export Styles for the component
export const Section = styled.section`
  ${SectionCss}
  width: 100vw;
`
export const SectionContent = styled.div`
  padding: ${(props) => (props.padding ? props.padding : `0`)};
  width: 100%;
`

export const SectionCenter = styled.section`
  ${SectionCss}
  ${layout()};
  width: 100%;
`

export const SectionContentCenter = styled.div`
  ${layout()};
  padding: ${(props) => (props.padding ? props.padding : `0`)};
  width: 100%;
`
