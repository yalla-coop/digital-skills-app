import styled from '@emotion/styled';

export const Result = styled.a`
  padding: ${({ theme }) => `${theme.spacings[4]} 0`};
  border: none;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  display: block;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ResultContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: '0 0.5rem';
`;
