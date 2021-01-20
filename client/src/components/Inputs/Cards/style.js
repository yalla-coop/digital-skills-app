import styled from '@emotion/styled';

export const Card = styled.button`
  width: 100%;
  opacity: ${({ notSelected }) => (notSelected ? '0.7' : '1')};
  background: ${({ theme, color }) => theme.colors[color]};
  border: ${({ theme, selected }) =>
    selected ? theme.borders.emphasis : theme.borders.primary};
  border-color: ${({ color, theme }) => theme.colors[color]};
  margin-bottom: ${({ theme }) => theme.spacings[5]};
  margin-left: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  padding: 0;
`;

export const Header = styled.header`
  padding: 1rem 3rem 1.5rem 1.5rem;
  text-align: left;
`;

export const Inner = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem 1rem 1.5rem;
  text-align: left;
`;
