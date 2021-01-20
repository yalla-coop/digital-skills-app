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
    overflow-x: hidden;

    // ANTD OVERRIDES
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: red !important;
    }

    .ant-select-item-group {
      color: red;
    }
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

    // ANTD OVERRIDES
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
      background-color: red !important;
    }

    .ant-select-item-group {
      color: red;
    }
  }
`;

export default style;
