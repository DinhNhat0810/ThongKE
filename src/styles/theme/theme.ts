import { css, DefaultTheme } from "styled-components";

// Define colors, typography, and breakpoints types
interface Colors {
  blue: string;
  seasalt: string;
  gray700: string;
  ashgray: string;
  dodgerBlue: string;
  emerald: string;
  red: string;
  violet: string;
  yellow: string;
  pink: string;
  salmon: string;
  cadet: string;
  malachite: string;
  floralWhite: string;
  orange: string;
  white: string;
  black: string;
  columbiaBlue: string;
  latte: string;
  nyanza: string;
  palePurple: string;
  mistyRose: string;
  sunset: string;
  mauve: string;
  aquamarine: string;
  aliceBlue: string;
  frenchGray: string;
  slate: string;
}

interface Typography {
  fontFamily: string;
}

interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

// Define theme interface with colors, typography, and breakpoints
interface ThemeInterface {
  colors: Colors;
  typography: Typography;
  breakpoints: Breakpoints;
}

// Define theme object with types
export const theme: ThemeInterface = {
  colors: {
    blue: "#0254e6",
    seasalt: "#FAFBFC",
    gray700: "#737791",
    ashgray: "#a5aea3",
    dodgerBlue: "#0095FF",
    emerald: "#00E096",
    red: "#EF4444",
    violet: "#A700FF",
    yellow: "#FFCF00",
    pink: "#FA5A7D",
    salmon: "#FF947A",
    cadet: "#151D48",
    malachite: "#3CD856",
    floralWhite: "#FFFAF1",
    orange: "#FFA412",
    white: "#ffffff",
    black: "#000000",
    columbiaBlue: "#C3D3E2",
    latte: "#FFF4DE",
    nyanza: "#DCFCE7",
    palePurple: "#F3E8FF",
    mistyRose: "#FFE2E5",
    sunset: "#FFD5A4",
    mauve: "#C5A8FF",
    aquamarine: "#8CFAC7",
    aliceBlue: "#F0F9FF",
    frenchGray: "#bdc9d3",
    slate: "#f8fafc",
  },
  typography: {
    fontFamily: "'Public Sans', sans-serif",
  },
  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1440px",
    xxxl: "1600px",
  },
};

// Reusable media query function with TypeScript typings
type MediaFunction = (
  ...args: Parameters<typeof css>
) => ReturnType<typeof css>;

interface MediaQueries {
  xs: MediaFunction;
  sm: MediaFunction;
  md: MediaFunction;
  lg: MediaFunction;
  xl: MediaFunction;
  xxl: MediaFunction;
  xxxl: MediaFunction;
}

// Media queries object with typed functions
export const media: MediaQueries = {
  xxxl: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.xxxl}) {
      ${css(...args)}
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.xxl}) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.xl}) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.lg}) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.md}) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.sm}) {
      ${css(...args)}
    }
  `,
  xs: (...args) => css`
    @media (max-width: ${(props: { theme: DefaultTheme }) =>
        props.theme.breakpoints.xs}) {
      ${css(...args)}
    }
  `,
};
