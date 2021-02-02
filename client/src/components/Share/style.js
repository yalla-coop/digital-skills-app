import styled from '@emotion/styled';

export const Container = styled('div')`
  padding: ${({ theme }) => `0 ${theme.spacings[5]}`};
  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `0 ${theme.spacings[3]}`};
  }
  width: 100%;
  height: 70px;
  background: ${({ theme }) => `${theme.colors.gray}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Type = styled('span')``;

export const Icons = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`;
