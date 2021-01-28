import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 340px;
  button {
    border: none;
  }
  p {
    padding-right: ${({ theme: { spacings } }) => spacings[3]};
  }
`;

export const Link = styled('a')`
  text-decoration: none;
  font-style: normal;
  font-weight: bold;
  font-size: 18.66px;
  color: ${({ theme: { colors } }) => colors.teal};
`;
