import { css } from '@emotion/react';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

  pre {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
  }

  code,
  kbd,
  samp {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    word-wrap: break-word;
  }

  /* to override body margin from antd */
  .sb-show-main.sb-main-padded {
    margin: 0;
    padding: 0;
  }

  /* to override elipsis on dropdown options from antd */
  .ant-select-item-option-content {
    white-space: normal;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  html {
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'Nunito Sans', sans-serif;
  }

  *:focus {
    outline: none;
  }

  *:focus-visible {
    outline: #0061ce solid 2px;
  }

  *:active {
    outline: none;
  }
`;

export default style;
