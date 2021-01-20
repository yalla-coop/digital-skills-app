import styled from '@emotion/styled';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  width: fit-content;
  position: relative;
  .ant-progress-circle-path:last-child {
    stroke: ${({ theme }) => `${theme.colors.blue} !important`};
  }
`;

export const Content = styled('div')`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
