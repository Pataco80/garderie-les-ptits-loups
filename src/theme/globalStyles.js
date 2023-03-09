import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import fontScale from "./fontScale"
import spaceScale from "./spaceScale.js"
import gridScale from "./gridScale.js"
import {
  setColor,
  setShadow,
  googleFonts,
  setFont,
  setLetterSpacing,
} from "./utils"

const GlobalStyles = createGlobalStyle`
${reset}
${googleFonts}
${fontScale}
${spaceScale}
${gridScale}

@font-face {
  font-family:"Depica Kids" ;
    font-weight: 900;
  font-display: swap;
  font-style: bold;
  src:url(/fonts/Depica-Kids.woff) format('woff');
}


  *, *:before, *:after {
    box-sizing: border-box;
  }

   html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    font-family: ${setFont.bodyFont};
    font-size: 1rem;
    line-height: 1.25; 
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
    font-family: "Depica Kids";
    color:${setColor.primary};
    ${setLetterSpacing(3.5)};
    font-weight: 900;
    text-shadow:${setShadow("dark")};
  }

 h1, .h1, h2, .h2, h3, .h3{
  margin: 0 0 var(--space-m-l);
 }
  h4, .h4, h5, .h5, h6, .h6{
  margin: 0 0 var(--space-s-m);
 }
  h1, .h1 {
    font-size: var(--step-5);
  }

  h2, .h2 {
    font-size: var(--step-4);
  }

  h3, .h3 {
    font-size: var(--step-3);
  }

  h4, .h4 {
    font-size: var(--step-2);
  }

  h5, .h5 {
    font-size: var(--step-1);
  }

  h6, .h6 {
    font-size: var(--step-0);
  }


  p {
    margin: 0 0 var(--space-xs-s) 0;
    font-size: var(--step-0);
  }

  small, .small {
    font-size: 80%;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`

export default GlobalStyles
