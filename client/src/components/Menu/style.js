import styled from '@emotion/styled';

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;

  a:not(:last-child) {
    margin-bottom: ${({ theme: { spacings } }) => `${spacings[4]} !important`};
  }

  a.menu__item {
    background-color: none;
    color: ${({ theme: { colors } }) => colors.white};
    padding: 0 !important;
    font-weight: normal;
    font-size: 18.66px;
    line-height: 143%;
    margin-top: 0 !important;
  }

  a.menu__item__selected {
    font-weight: bold;

    &:after {
      margin-left: ${({
        theme: {
          constants: {
            navBar: { active },
          },
        },
      }) => active};
      content: ' ';
      width: ${({
        theme: {
          constants: {
            navBar: { active },
          },
        },
      }) => active};
      height: ${({
        theme: {
          constants: {
            navBar: { active },
          },
        },
      }) => active};
      display: inline-block;
      background: ${({ theme: { colors } }) => colors.white};
      transform: rotate(45deg);
    }
  }
`;

export const Divider = styled('div')`
  width: ${({
    theme: {
      constants: {
        navBar: { divider },
      },
    },
  }) => divider.width};
  height: ${({
    theme: {
      constants: {
        navBar: { divider },
      },
    },
  }) => divider.height};
  background-color: ${({ theme: { colors } }) => colors.white};
  margin-top: ${({
    theme: {
      constants: {
        navBar: { divider },
      },
    },
  }) => divider.top};
  margin-bottom: ${({
    theme: {
      constants: {
        navBar: { divider },
      },
    },
  }) => divider.bottom};
`;
