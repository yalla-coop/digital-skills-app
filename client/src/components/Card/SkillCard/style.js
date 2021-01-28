import styled from '@emotion/styled';

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  box-shadow: ${({ theme: { shadows } }) => shadows.light};
  padding: ${({ theme: { spacings } }) =>
    `${spacings[3]} ${spacings[4]} ${spacings[4]} ${spacings[3]}`};
  transition: all 0.2s;
  &:active {
    transform: translateY(3px);
  }
`;

export const Content = styled.div`
  div {
    p {
      display: inline;
      font-weight: bold;
    }
  }
`;

export const IconContainer = styled.div``;
