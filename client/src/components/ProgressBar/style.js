import styled from '@emotion/styled';

export const Container = styled('div')`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  .ant-progress {
    width: calc(100% - 45px) !important;
  }

  .ant-progress-steps-item {
    background: ${({ theme }) => `${theme.colors.gray1} !important`};
    width: ${({ steps, theme }) =>
      `calc(${100 / steps}% - ${theme.spacings[1]}) !important`};

    margin-right: 4px !important;
  }

  .ant-progress-steps-item-active {
    background: ${({ theme }) => `${theme.colors.blue} !important`};
  }

  .ant-progress-text {
    font-weight: bold;
    font-size: 16px;
    text-align: right;
    width: 100%;
    color: ${({ theme }) => theme.colors.blackDark};
  }
`;

export const Content = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacings[2]} 0`};
`;
