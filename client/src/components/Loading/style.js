import styled from '@emotion/styled';
import { Spin } from 'antd';

export const Loading = styled(Spin)`
  span {
    line-height: 112%;
    color: ${({ theme, color }) => theme.colors[color]};
  }
`;
