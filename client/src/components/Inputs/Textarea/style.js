import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';
import * as CS from '../style';

export const Input = styled.input`
  ${setMargin};
  ${CS.placeholderStyle};
  border: ${({ theme }) => theme.borders.primary};
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray};
  width: 100%;
  padding: 1rem;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.white : theme.colors.gray};
  font-size: 16px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  background: ${({ outline }) => outline && 'none'};

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }

  ${({ big }) =>
    big &&
    `
  border: none;
  border-bottom: 1px solid;
  font-size: 23.3px;
  padding-left: 0.25rem;

  :focus {
    border-color: ${({ theme }) => theme.colors.white};
    border-bottom: 3px solid;
  }
  `}
`;

export const Textarea = styled.textarea`
  ${setMargin};
  ${CS.placeholderStyle};
  border: ${({ theme }) => theme.borders.primary};
  border-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.gray};
  width: 100%;
  padding: 1rem;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.white : theme.colors.gray};
  font-size: 16px;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
  background: ${({ outline }) => outline && 'none'};

  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue};
  }

  ${({ big }) =>
    big &&
    `
  border: none;
  border-bottom: 1px solid;
  font-size: 23.3px;
  padding-left: 0.25rem;

  :focus {
    border-color: ${({ theme }) => theme.colors.white};
    border-bottom: 3px solid;
  }
`}
`;
