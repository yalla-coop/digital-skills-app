import styled from '@emotion/styled';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;

  li:not(:last-child) {
    margin-bottom: ${({ theme: { spacings } }) => `${spacings[4]} !important`};
  }
`;

export const Item = styled(AntMenu.Item)`
  background-color: none;
  color: ${({ theme: { colors } }) => colors.white};
  padding: 0 !important;
  font-weight: normal;
  font-size: 18.66px;
  line-height: 143%;
  margin-top: 0 !important;

  &.ant-menu-item-selected {
    background-color: transparent !important;
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.white};
  }

  &:after {
    border: none !important;
    background: ${({ theme: { colors } }) => colors.white};
    margin-left: ${({
      theme: {
        constants: {
          navBar: { active },
        },
      },
    }) => active};
    position: static !important;
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
    transform: rotate(45deg) !important;
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
