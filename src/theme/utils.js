import { css } from "styled-components"
import { generateMedia } from "styled-media-query"
// Colors Palette
export const setColor = {
  primary: "#8D4592",
  primaryL10: "#ab59b1",
  primaryL20: "#bd7cc1",
  primaryL30: "#ce9fd1",
  primaryL40: "#e0c1e2",
  primaryD10: "#6c356f",
  primaryD20: "#4a244d",
  primaryD30: "#29142a",

  secondary: "#F9A542",
  secondaryDark: "#ad7600",
  black: "#222222",
  white: "#fff",
}

// Convert Hex color to rgba function to box-shadow or text-shadow
export const convertHexToRGBA = (hex, opacity) => {
  const tempHex = hex.replace("#", "")
  const r = parseInt(tempHex.substring(0, 2), 16)
  const g = parseInt(tempHex.substring(2, 4), 16)
  const b = parseInt(tempHex.substring(4, 6), 16)

  return `rgba(${r},${g},${b},${opacity / 100})`
}

// Fonts Palette
export const googleFonts = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap");
`
export const setFont = {
  headingsFont: `"Depica Kids"`,
  bodyFont: `"Open Sans", sans-serif`,
  defaultFonts: `"system",
  "-apple-system",
  ".SFNSText-Regular",
  "San Francisco",
  "Roboto",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif"`,
}

// Unitie's Calc Functions
export const setPxToRem = (px = 16) => {
  return `${px / 16}rem`
}

export const setRem = x => {
  return `${x}rem`
}

export const media = generateMedia({
  mobile: "20rem",
  smTablet: "36rem",
  tablet: "48rem",
  lgTablet: "62rem",
  desktop: "93rem",
})

// Layout's Functions
export const layout = ({ mW = 1400, wTh = "100%" } = {}) => {
  return `
  width: ${wTh};
    max-width:${setPxToRem(mW)};
    margin: 0 auto;
  `
}

export const setFlex = ({
  flex = "auto",
  x = "center",
  y = "center",
  flDir = "row",
  wrap = "wrap",
} = {}) => {
  return `display: flex;
  flex:${flex};
  justify-content: ${x};
  align-items: ${y};
  flex-direction: ${flDir};
  flex-wrap: ${wrap}
  `
}

export const setGrid = ({
  x = "space-evenly",
  y = "space-evenly",
  xgap = 0,
  ygap = 0,
} = {}) => {
  return `display: grid;
  justify-content: ${x};
  align-content: ${y};
  grid-row-gap: ${xgap}rem;
  grid-column-gap: ${xgap}rem;
  `
}

// Images and Background's Functions
export const setLinearBcg = ({
  colStart = "rgba(0, 0, 0, 0)",
  colEnd = "rgba(0, 0, 0, 0)",
} = {}) => {
  return `background: linear-gradient(${colStart}, ${colEnd});
    opacity: 1 !important;
`
}

export const setImgBcg = ({
  size = "cover",
  position = "center",
  repeat = "no-repeat",
} = {}) => {
  return `background-size: ${size} !important;
  background-position: ${position} !important;background-repeat: ${repeat} !important;
`
}

// Effect's Functions or props Object's
export const setLetterSpacing = (number = 3.2) => {
  return `letter-spacing: ${setPxToRem(number)}`
}

export const setBorder = ({
  size = 2,
  style = "solid",
  color = "transparent",
} = {}) => {
  return `${setPxToRem(size)} ${style} ${color}`
}

export const setRadius = ({
  allPx = null,
  allPc = null,
  radius = 4,
  tl = radius,
  tr = radius,
  bl = radius,
  br = radius,
} = {}) => {
  if (allPx) {
    return `
    border-radius: ${setPxToRem(allPx)};
    `
  } else if (allPc) {
    return `
    border-radius: ${allPc}%;
    `
  } else {
    return `
    border-top-left-radius: ${setPxToRem(tl)};
    border-top-right-radius: ${setPxToRem(tr)};
    border-bottom-left-radius: ${setPxToRem(bl)};
    border-bottom-right-radius: ${setPxToRem(br)};
  `
  }
}

export const setTransition = ({
  property = "all",
  duration = 0.3,
  timing = "linear",
  delayTime = 0,
} = {}) => {
  return `
    transition-property: ${property};
    transition-duration: ${duration}s;
    transition-timing-function:${timing};
    transition-delay: ${delayTime}s;
  `
}

export const setShadow = (
  style = "",
  {
    inset = "",
    x = 0,
    y = 0,
    blur = 0,
    color = setColor.black,
    opacity = 100,
  } = {}
) => {
  if (style === "light") {
    return `${inset} 0 2px 8px ${convertHexToRGBA(setColor.black, 30)};`
  }
  if (style === "medium") {
    return `${inset} 0 3px 12px ${convertHexToRGBA(setColor.black, 50)};`
  }
  if (style === "dark") {
    return `${inset} 0 5px 15px ${convertHexToRGBA(setColor.black, 80)};`
  }
  if (style === "none") {
    return `none;`
  } else {
    return `${y}px ${x}px ${blur}px ${convertHexToRGBA(color, opacity)};`
  }
}
