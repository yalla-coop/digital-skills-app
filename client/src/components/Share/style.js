import styled from '@emotion/styled';

export const Container = styled('div')`
  padding: ${({ theme }) => `0 ${theme.spacings[5]}`};
  width: 100%;
  height: 70px;
  background: ${({ theme }) => `${theme.colors.gray}`};
`;

export const Type = styled('span')`
  position: absolute;
  margin-top 10px;
`;

export const Icons = styled('span')`
  margin-top: 15px;
  float: right;
`;
