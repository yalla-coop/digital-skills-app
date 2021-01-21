// COMMON STYLES

import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.section`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ theme }) => `${theme.spacings[4]} ${theme.spacings[3]}`};
  filter: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.div`
  ${setMargin}
  ${({ horizontal }) =>
    horizontal &&
    `
    display: flex;
    align-items: center;
  `}
`;
