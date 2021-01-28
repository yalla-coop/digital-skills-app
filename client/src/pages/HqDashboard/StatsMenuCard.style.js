import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import setMargin from '../../helpers/set-margin';

export const CardWrapper = styled(Link)`
  display: block;
  filter: ${({ theme }) => theme.shadows.card};
  margin-bottom: ${({ theme }) => theme.spacings[6]};
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacings[3]};
  }
`;
export const TopWrapper = styled.div`
  ${setMargin};
  display: flex;
  padding: ${({ theme }) => `${theme.spacings[3]}`};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};

  div:last-child {
    margin-left: ${({ theme }) => theme.spacings[4]};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const BottomWrapper = styled.div`
  height: 56px;
  text-align: center;
  line-height: 56px;
  background-color: ${({ theme }) => theme.colors.white};
`;
