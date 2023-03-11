import styled from "styled-components"

import { setColor, setShadow, convertHexToRGBA, setRadius, layout } from "theme"

export const BlockInfoWrapper = styled.div`
  background-color: ${convertHexToRGBA(setColor.primaryL30, 90)};
  ${layout({ mW: 900 })};
  padding: var(--space-l);
  ${setRadius({ allPx: 48 })};
  text-align: center;

  .h5 {
    color: ${setColor.secondary};
    margin-bottom: 0;
    text-shadow: ${setShadow("light")};
  }
`
