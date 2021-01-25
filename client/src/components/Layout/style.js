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

export const Content = styled(AntdContent)`
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  padding-right: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};

  ${({ theme }) => theme.media.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  ${({ withoutHeader, theme }) =>
    withoutHeader &&
    `
      padding-top: 80px;

      ${theme.media.mobile} {
        padding-top: ${theme.spacings[5]};
      }
    `}
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

export const WithBlocksContentWrapper = styled.div`
  padding-top: ${({ theme }) => theme.constants.colouredBlockTopPaddingDesktop};
  width: 50%;
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    width: 80%;
  }

  ${({ theme }) => theme.media.mobile} {
    padding-top: ${({ theme }) =>
      theme.constants.colouredBlockTopPaddingMobile};
    padding-right: ${({ theme }) => theme.spacings[5]};
    padding-left: ${({ theme }) => theme.spacings[5]};
    width: 100%;
  }
`;
