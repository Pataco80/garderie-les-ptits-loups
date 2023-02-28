import { css } from "styled-components"
const fontScale = css`
  /* @link https://utopia.fyi/type/calculator?c=320,18,1.2,1488,24,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

  :root {
    --fluid-min-width: 320;
    --fluid-max-width: 1488;

    --fluid-screen: 100vw;
    --fluid-bp: calc(
      (var(--fluid-screen) - var(--fluid-min-width) / 16 * 1rem) /
        (var(--fluid-max-width) - var(--fluid-min-width))
    );
  }

  @media screen and (min-width: 1488px) {
    :root {
      --fluid-screen: calc(var(--fluid-max-width) * 1px);
    }
  }

  :root {
    --f--2-min: 12.5;
    --f--2-max: 13.51;
    --step--2: calc(
      ((var(--f--2-min) / 16) * 1rem) + (var(--f--2-max) - var(--f--2-min)) *
        var(--fluid-bp)
    );

    --f--1-min: 15;
    --f--1-max: 18;
    --step--1: calc(
      ((var(--f--1-min) / 16) * 1rem) + (var(--f--1-max) - var(--f--1-min)) *
        var(--fluid-bp)
    );

    --f-0-min: 18;
    --f-0-max: 24;
    --step-0: calc(
      ((var(--f-0-min) / 16) * 1rem) + (var(--f-0-max) - var(--f-0-min)) *
        var(--fluid-bp)
    );

    --f-1-min: 21.6;
    --f-1-max: 31.99;
    --step-1: calc(
      ((var(--f-1-min) / 16) * 1rem) + (var(--f-1-max) - var(--f-1-min)) *
        var(--fluid-bp)
    );

    --f-2-min: 25.92;
    --f-2-max: 42.65;
    --step-2: calc(
      ((var(--f-2-min) / 16) * 1rem) + (var(--f-2-max) - var(--f-2-min)) *
        var(--fluid-bp)
    );

    --f-3-min: 31.1;
    --f-3-max: 56.85;
    --step-3: calc(
      ((var(--f-3-min) / 16) * 1rem) + (var(--f-3-max) - var(--f-3-min)) *
        var(--fluid-bp)
    );

    --f-4-min: 37.32;
    --f-4-max: 75.78;
    --step-4: calc(
      ((var(--f-4-min) / 16) * 1rem) + (var(--f-4-max) - var(--f-4-min)) *
        var(--fluid-bp)
    );

    --f-5-min: 44.79;
    --f-5-max: 101.01;
    --step-5: calc(
      ((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) *
        var(--fluid-bp)
    );
  }
`

export default fontScale
