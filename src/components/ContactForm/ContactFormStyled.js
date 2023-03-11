import styled, { css } from "styled-components"

// Import StyledElements for basic styles

import { Section, SectionContent } from "styledElements"

// Import helpers
import {
  setFlex,
  layout,
  media,
  setRadius,
  setBorder,
  setColor,
  setShadow,
  setFont,
} from "theme"

// Styled CSS
const ContactInput = css`
  font-family: ${setFont.bodyFont};
  font-size: var(--step--1);
  width: 100%;
  padding: var(--space-xs-s);
  margin: var(--space-xs) 0 var(--space-xs-m);
  ${setRadius({ allPx: 12 })};
  border: ${setBorder({
    size: 1,
    style: "solid",
    color: setColor.primary,
  })};

  &:focus {
    box-shadow: ${setShadow("light", { inset: "inset" })};
    outline: none;
  }
  &::placeholder {
    font-style: italic;
  }
`

// Export Styles for the component
export const FormSection = styled(Section)`
  padding: var(--space-xl-2xl) var(--space-s-xl);
`

export const FormContainer = styled(SectionContent)`
  ${layout({ mW: 800 })};
  ${setFlex({ flDir: "column" })};
`

export const ContactForm = styled.form`
  ${setFlex({ x: "space-between" })};
  width: 100%;

  input[type="submit"] {
    margin: 0 auto;
  }
`

export const ContactInfo = styled.article`
  width: 100%;

  ${media.greaterThan("smTablet")`
    ${setFlex({ x: "space-between" })};
  `}
`

export const ContactMessage = styled.section`
  width: 100%;
`

export const InputWrapper = styled.div`
  width: 100%;
  padding: var(--space-s) 0;

  ${media.greaterThan("smTablet")`
    width: 45%;
  `}
`

export const Label = styled.label`
  font-family: ${setFont.headingsFont};
  color: ${setColor.primary};
  font-size: var(--step-1);
  line-height: 0;
`

export const Input = styled.input`
  ${ContactInput}
`

export const TextArea = styled.textarea`
  ${ContactInput}
  resize: none;
`

export const Captcha = styled.div`
  margin-bottom: 3rem;
`
