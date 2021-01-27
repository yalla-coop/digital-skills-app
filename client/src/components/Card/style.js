// COMMON STYLES

import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const Wrapper = styled.section`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ theme, withoutPaddings }) => {
    if (withoutPaddings) {
      return 0;
    } else {
      return `${theme.spacings[4]} ${theme.spacings[3]}`;
    }
  }};
  filter: ${({ theme, withoutShadow }) =>
    withoutShadow ? 'none' : theme.shadows.card};
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.div`
  ${setMargin};
  ${({ horizontal }) =>
    horizontal &&
    `
    display: flex;
    align-items: center;
  `}
`;
