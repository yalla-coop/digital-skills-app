import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

export const Input = styled.input`
  ${setMargin}
  ${CS.placeholderStyle};
  border: none;
  border-bottom: ${({ theme, outline }) => theme.borders.primary};
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray};
  width: 50%;
  padding: 1rem 0 0 4px;
  font-size: 1rem;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  background: none;

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const InputWrapper = styled.div`
  ${setMargin}
  display: flex;
  align-items: flex-end;
`;
