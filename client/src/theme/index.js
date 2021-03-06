import globalStyle from './global-style';

const spacings = {
  0: '0', //        0
  1: '0.25rem', //  4px
  2: '0.5rem', //   8px
  3: '1rem', //     16px
  4: '1.5rem', //   24px
  5: '2rem', //     32px
  6: '3rem', //     48px
  7: '4rem', //     64px
  8: '5rem', //     80px
  9: '6rem', //     96px
};

const constants = {
  columns: { mobile: 4, tablet: 12, desktop: 12 },
  gridGutter: { mobile: '8px', tablet: '12px', desktop: '16px' },
  layout: {
    withoutHeader: {
      padding: { desktop: '48px', mobile: '16px' },
    },
    page: {
      desktop: {
        top: '80px',
        left: '62px',
        right: '38px',
      },
      mobile: {
        top: '26px',
        left: '16px',
        right: '16px',
        bottom: '24px',
      },
    },
    footer: {
      height: '110px',
      paddingTop: '100px',
    },
  },
  // side menu width
  sideBar: {
    width: 265,
  },
  navBar: {
    drawer: {
      headHeight: 110,
      width: '100%',
    },
    divider: {
      width: '55%',
      height: '1px',
      top: '56px',
      bottom: '24px',
    },
    active: '10px',
  },
  skillModal: {
    width: {
      desktop: 450,
      mobile: '100%',
    },
    contentWidth: '375px',
  },
  // header height
  headerHeight: { desktop: '300px', mobile: '180px' },
  blockWidth: '15.7%',
  general: { paddingLeft: '60px' },
  colouredBlockTopPaddingDesktop: spacings['9'],
  colouredBlockTopPaddingMobile: spacings['4'],
  // ...
};

export const colors = {
  pink: '#FFB4E5',
  blue: '#0061CE',
  liteBlue: '#E6EFFA',
  teal: '#00A794',
  mediumTeal: '#61C5BA',
  liteTeal: '#CCEDEA',
  purple: '#490499',
  medPurple: '#7413DC',
  lightPurple: '#9B51E0',
  navy: '#002F6C',
  black: ' #1E1E1E',
  gray: '#404040',
  liteGray: '#6E6E6E',
  error: '#E22E12',
  literGray: '#E5E5E5',
  litestGray: '#F1F1F1',
  white: '#FFFFFF',
  gray1: '#cccccc',
  blackDark: '#000',
};
const cardShadow = [
  '0px 4px 4px rgba(0, 0, 0, 0.03)',
  '0px 1px 8px rgba(0, 0, 0, 0.05)',
  '0px 3px 3px rgba(0, 0, 0, 0.03)',
];
const shadows = {
  card: `drop-shadow(${cardShadow[0]}) drop-shadow(${cardShadow[1]}) drop-shadow(${cardShadow[2]})`,
  light: `${cardShadow[0]}, ${cardShadow[1]}, ${cardShadow[2]}`,
};

export const screensWidth = {
  mobile: 768,
  tablet: 1152,
  desktop: 1440,
  menu: 991,
};

export const media = {
  mobile: `@media (max-width: ${screensWidth.mobile}px)`,
  tablet: `@media (max-width: ${screensWidth.tablet}px)`,
  desktop: `@media (max-width: ${screensWidth.desktop}px)`,
  menu: `@media (max-width: ${screensWidth.menu}px)`,
};

export const breakpoints = {
  mobile: `${screensWidth.mobile}px`,
  tablet: `${screensWidth.tablet}px`,
  desktop: `${screensWidth.desktop}px`,
};

export const borders = {
  primary: `2px solid`,
  emphasis: `5px solid`,
};

export const borderRadius = {
  card: '8px',
};

const theme = {
  name: 'default', // for storybook
  colors,
  spacings,
  shadows,
  screensWidth,
  media,
  breakpoints,
  constants,
  borders,
  borderRadius,
};

export { globalStyle };
export default theme;
