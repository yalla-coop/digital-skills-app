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
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.media.menu} {
    .ant-layout-sider {
      display: none;
    }
  }
`;

const AntdContentComponent = ({ withoutHeader, ...props }) => (
  <AntdContent {...props} />
);

export const Content = styled(AntdContentComponent)`
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  padding-right: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  max-width: 1200px;

  ${({ theme }) => theme.media.mobile} {
    padding-left: 5px;
    padding-right: 5px;
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

export const BackWrapper = styled.div`
  padding-left: ${({ theme }) => theme.constants.general.paddingLeft};
  ${({ theme }) => theme.media.mobile} {
    position: absolute;
    top: ${({ theme }) => theme.spacings[3]};
    left: ${({ theme }) => theme.spacings[3]};
    padding-left: 0;
  }
`;

export const HeaderWrapper = styled.header`
  position: relative;
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

export const PageContent = styled(AntdContent)`
  padding: ${({
    theme: {
      constants: {
        layout: {
          page: { desktop },
        },
      },
    },
  }) => `${desktop.top} ${desktop.right} 0 ${desktop.left}`};
  ${({ theme }) => theme.media.mobile} {
    padding: ${({
      theme: {
        constants: {
          layout: {
            page: { mobile },
          },
        },
      },
    }) => `${mobile.top} ${mobile.right} ${mobile.bottom} ${mobile.left}`};
  }
`;

export const FooterContainer = styled.div`
  display: block;
  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;
