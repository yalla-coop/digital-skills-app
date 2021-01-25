import styled from '@emotion/styled';
import { Spin } from 'antd';
import * as T from '../Typography';
import setMargin from './../../helpers/set-margin';

const heights = {
  small: 48,
  large: 56,
};

export const Button = styled.button`
  ${setMargin};
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

  /* for disabled style */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  :focus {
    outline: none;
  }
`;

export const Loading = styled(Spin)`
  span {
    line-height: 24px;
    color: ${({ variant, theme }) =>
      variant === 'outlined' ? theme.colors.teal : 'white'};
  }
`;

export const Label = styled(T.BodyB)`
  color: ${({ variant, theme }) =>
    variant === 'outlined' ? theme.colors.teal : 'white'};
  margin-left: ${({ isLoading, theme }) =>
    isLoading ? theme.spacings['3'] : 0};
`;
