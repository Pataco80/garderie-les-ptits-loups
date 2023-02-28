import { css } from "styled-components"
const gridScale = css`
  /* @link https://utopia.fyi/grid/calculator?c=320,18,1.2,1488,24,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

  :root {
    --grid-max-width: 93rem;
    --grid-gutter: var(
      --space-s-l,
      clamp(1.13rem, calc(0.61rem + 2.57vw), 3rem)
    );
    --grid-columns: 12;
  }

  .u-container {
    max-width: var(--grid-max-width);
    padding-inline: var(--grid-gutter);
    margin-inline: auto;
  }

  .u-grid {
    display: grid;
    gap: var(--grid-gutter);
  }
`

export default gridScale
