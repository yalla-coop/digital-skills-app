import styled from '@emotion/styled';
import * as T from '../../Typography';

const heights = {
  small: 48,
  large: 56,
};

export const BtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => `${heights[size]}px`};
  width: ${({ w }) => w || '100%'};
  background: ${({ bgColor, variant, theme }) => {
    let color = bgColor ? theme.colors[bgColor] : theme.colors.blue;

    if (variant === 'outlined') {
      color = 'none';
    }

    return color;
  }};
  border: ${({ variant, theme }) =>
    variant === 'outlined'
      ? `4px solid ${theme.colors.teal}`
      : `4px solid ${theme.colors.white}`};

  :focus {
    outline: none;
  }

  font-size: 16px;
`;

export const Label = styled(T.BodyB)`
  color: ${({ variant, theme }) =>
    variant === 'outlined' ? theme.colors.teal : 'white'};
  margin-left: ${({ isLoading, theme }) =>
    isLoading ? theme.spacings['3'] : 0};
`;
