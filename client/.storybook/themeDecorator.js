import React from "react"
import { ThemeProvider } from '@emotion/react';
import theme from "./../src/theme"

const style = {
  width: '100%',
  height: "100vh",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '"Nunito Sans", sans-serif',
}

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}><div style={style}>{storyFn()}</div></ThemeProvider>
)

export default ThemeDecorator
