import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    width: 100%;
  }
`;

export const Option = styled.button`
  width: 100%;
  background: ${({ theme, selected, color }) =>
    selected ? theme.colors[color] : 'none'};
  border: ${({ theme }) => theme.borders.primary};
  border-color: ${({ color, theme }) => theme.colors[color]};
  margin-bottom: ${({ theme }) => theme.spacings[2]};
  margin-left: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: 1rem;
  height: 100%;

  :focus-visible {
    outline-color: ${({ theme, color }) => theme.colors[color]};
  }
`;
