import React from "react"
import { ThemeProvider, Global } from '@emotion/react';
import theme, { globalStyle } from "./../src/theme";

import 'antd/dist/antd.css';

const style = {
  width: '100%',
  minHeight: "100vh",
  fontFamily: '"Nunito Sans", sans-serif',
}

const ThemeDecorator = storyFn => (
  <>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>
      <div style={style}>{storyFn()}</div>
    </ThemeProvider>
  </>
);

export default ThemeDecorator
