import styled from '@emotion/styled';
import { Drawer as AntDrawer } from 'antd';

export const Drawer = styled(AntDrawer)`
  .ant-drawer-content-wrapper {
    box-shadow: none !important;
  }

  .ant-drawer-content {
    background: transparent;
  }

  .ant-drawer-body {
    background-color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    overflow-y: auto;
    ${({ theme }) => theme.media.mobile} {
      padding: 0;
    }
  }
`;

export const ContentWrapper = styled('div')`
  width: ${({
    theme: {
      constants: { skillModal },
    },
  }) => skillModal.contentWidth};
  height: auto;
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
    height: 100%;
  }
  background: ${({ theme }) => theme.colors.white};
  filter: ${({ theme }) => theme.shadows.card};
  padding: ${({ theme }) => `${theme.spacings[5]} ${theme.spacings[3]}`};
  svg {
    cursor: pointer;
  }
  margin-top: 200px;

  ${({ theme }) => theme.media.mobile} {
    margin-top: 0;
  }
`;

export const Head = styled('div')`
  display: flex;
  justify-content: space-between;
`;
