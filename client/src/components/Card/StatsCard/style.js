import styled from '@emotion/styled';
import { Spin } from 'antd';
import setMargin from '../../../helpers/set-margin';

export const CardWrapper = styled.div`
  ${setMargin};
  display: flex;
  padding: ${({ theme }) => `${theme.spacings[2]} ${theme.spacings[1]}`};
  margin-bottom: ${({ theme }) => theme.spacings[5]};

  div:last-child {
    margin-top: ${({ theme }) => theme.spacings[2]};
    margin-left: ${({ theme }) => theme.spacings[3]};
  }

  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacings[4]};
  }
`;

export const StatsNum = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 56.9px;
  letter-spacing: 0.2px;
  line-height: 112%;
  width: 86px;
  color: ${({ theme, color }) =>
    theme.colors[color] || color || theme.colors.black};
  ${({ theme }) => theme.media.mobile} {
  }
`;

export const Loading = styled(Spin)`
  span {
    width: 68.8px;
    line-height: 112%;
    color: ${({ theme, color }) => theme.colors[color]};
  }
`;
