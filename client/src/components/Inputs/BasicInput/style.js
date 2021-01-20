import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

export const Input = styled.input`
  ${setMargin}
  ${CS.placeholderStyle}
border: ${({ theme }) => theme.borders.primary};
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray};
  width: 100%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;
