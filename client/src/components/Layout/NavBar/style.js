import styled from '@emotion/styled';
import { Drawer as AntdDrawer, Button as AntButton } from 'antd';

export const Drawer = AntdDrawer;

export const Button = styled(AntButton)`
  border: none;
  margin: 0;
`;

export const Navbar = styled('nav')`
  background-color: ${({ theme }) => theme.colors.white};
  height: ${({ theme }) => theme.spacings[7]};
  padding-left: ${({ theme }) => theme.spacings[3]};
  padding-right: ${({ theme }) => theme.spacings[4]};
  display: none;
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const IconContainer = styled('div')`
  display: flex;
  & Button:last-child {
    margin-left: ${({ theme }) => theme.spacings[3]};
  }
`;
