// COMMON STYLES

import styled from '@emotion/styled';

export const Wrapper = styled.section`
  background-color: ${({ theme, color }) => theme.colors.white};
  filter: ${({ theme }) => theme.shadows.card};
  display: flex;
  padding: 0;
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ theme }) => `${theme.spacings[2]} ${theme.spacings[3]}`};
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacings[3]};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
