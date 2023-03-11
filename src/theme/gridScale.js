import { css } from "styled-components"
const gridScale = css`
  /* @link https://utopia.fyi/grid/calculator?c=320,18,1.2,1240,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

  :root {
    --grid-max-width: 77.5rem;
    --grid-gutter: var(
      --space-s-l,
      clamp(1.13rem, calc(0.65rem + 2.39vw), 2.5rem)
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
