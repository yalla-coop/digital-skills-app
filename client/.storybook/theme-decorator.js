import React from "react"
import { ThemeProvider } from '@emotion/react';
import theme from "./../src/theme"
import 'antd/dist/antd.css';

import 'antd/dist/antd.css';

const style = {
  width: '100%',
  minHeight: "100vh",
}

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}><div style={style}>{storyFn()}</div></ThemeProvider>
)

export default ThemeDecorator
