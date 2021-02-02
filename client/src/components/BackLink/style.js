import styled from '@emotion/styled';

export const Wrapper = styled.button`
  margin-bottom: ${({ mb, theme }) => theme.spacings[mb] || '0'};
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  padding-right: 3px;

  :focus-visible {
    outline: ${({ theme, color }) => `2px ${theme.colors[color]} solid`};
  }
`;
