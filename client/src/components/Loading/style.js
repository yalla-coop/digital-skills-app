import styled from '@emotion/styled';
import { Spin } from 'antd';
import setMargin from '../../helpers/set-margin';

export const Loading = styled(Spin)`
  ${setMargin}
  span {
    line-height: 112%;
    color: ${({ theme, color }) => theme.colors[color]};
  }
  width: ${({ w }) => w || 'auto'};
`;
