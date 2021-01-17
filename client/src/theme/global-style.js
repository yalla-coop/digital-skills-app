import { css } from '@emotion/react';

const style = css`
  @import url('https://use.typekit.net/clt4lxm.css');

  pre {
    font-family: 'canada-type-gibson';
    font-size: 1em;
  }

  code,
  kbd,
  samp {
    font-family: 'canada-type-gibson';
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'canada-type-gibson', 'sans-serif';
    overflow-x: hidden;
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
  }
`;

export default style;
