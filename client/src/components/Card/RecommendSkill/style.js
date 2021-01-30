import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  border-radius: ${({ theme: { borderRadius } }) =>
    `0px 0px ${borderRadius.card} ${borderRadius.card}`};
  box-shadow: ${({ theme: { shadows } }) => shadows.light};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacings[4]};
`;
export const IconContainer = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme: { borderRadius } }) =>
    `${borderRadius.card} ${borderRadius.card} 0px 0px`};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const Content = styled.div`
  display: flex;
  padding: ${({ theme: { spacings } }) => spacings[4]};
  justify-content: space-between;
`;

export const Span = styled.span`
  display: block;
`;

export const Div = styled.div`
  display: flex;
`;
