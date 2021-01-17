import globalStyle from './global-style';

const constants = {
  columns: { mobile: 4, tablet: 6, desktop: 12 },
  gridGutter: { mobile: 8, tablet: 16, desktop: 16 },
  // side menu width
  // header height
  // ...
};

const colors = {
  pink: '#FFB4E5',
  blue: '#0061CE',
  liteBlue: '#E6EFFA',
  teal: '#00A794',
  mediumTeal: '#61C5BA',
  liteTeal: '#CCEDEA',
  purple: '#490499',
  lightPurple: '#9B51E0',
  navy: '#002F6C',
  black: ' #1E1E1E',
  gray: '404040',
};

const spacings = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '1.5rem',
  5: '2rem',
  6: '3rem',
  7: '4rem',
  8: '5rem',
};

export const screensWidth = {
  mobile: 768,
  tablet: 1152,
  desktop: 1440,
};

export const media = {
  mobile: `@media (max-width: ${screensWidth.mobile}px)`,
  tablet: `@media (max-width: ${screensWidth.tablet}px)`,
  desktop: `@media (max-width: ${screensWidth.desktop}px)`,
};

export const breakpoints = {
  mobile: `${screensWidth.mobile}px`,
  tablet: `${screensWidth.tablet}px`,
  desktop: `${screensWidth.desktop}px`,
};

const theme = {
  name: 'default', // for storybook
  colors,
  spacings,
  screensWidth,
  media,
  breakpoints,
  constants,
};

export { globalStyle };
export default theme;
