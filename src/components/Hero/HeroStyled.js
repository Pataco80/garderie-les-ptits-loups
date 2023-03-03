import styled from "styled-components"
// Import helpers
import { setFlex } from "../../theme/utils"
import { SectionContentCenter } from "../StyledElements/SectionStyled"

// Export Styles for the component
export const HeroWrapper = styled.section`
  min-height: ${props =>
    props.home || props.error ? "calc(100vh - 56px)" : "50vh"};
  position: relative;
  ${setFlex({ flDir: "column", wrap: "nowrap" })};
  width: 100vw;
  overflow: hidden;
  padding-bottom: ${props => (props.error ? "10rem" : 0)};

  position: relative;
  .bgImageWrapper {
    position: absolute;
    height: 100vh;
  }
`

export const HeroContent = styled(SectionContentCenter)`
  z-index: 2;
`

export const SectionButtons = styled(SectionContentCenter)`
  ${setFlex({ x: "space-around" })};
  margin-top: var(--space-l);

  a {
    margin: var(--space-l) var(--space-l) 0 var(--space-l);
  }
`
