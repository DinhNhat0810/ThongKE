"use client";

import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { theme } from "@/styles/theme/theme";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
