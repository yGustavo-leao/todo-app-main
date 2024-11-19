'use client'
import StyledComponentsRegistry from '../lib/registry'
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@/styles/theme";
import { useState } from "react";
import { DarkThemeContext } from "@/context/DarkThemeContext";
import { GlobalStyle } from '@/styles/GlobalStyle';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(true)
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
              <GlobalStyle />
              {children}
            </DarkThemeContext.Provider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}