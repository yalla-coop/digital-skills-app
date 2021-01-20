import styled from '@emotion/styled';
import { Layout as AntdLayout } from 'antd';

export const {
  Header: AntdHeader,
  Footer: AntdFooter,
  Sider: AntdSider,
  Content: AntdContent,
} = AntdLayout;

export const Layout = styled(AntdLayout)`
  max-width: initial;
  padding: 0;
  min-height: 100vh;
`;

export const Header = styled(AntdHeader)`
  height: ${({ theme }) => theme.constants.headerHeight.desktop};
  transition: 0.1s all;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.teal};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacings[5]};
    height: ${({ theme }) => theme.constants.headerHeight.mobile};
  }
`;
