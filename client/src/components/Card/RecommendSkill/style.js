import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  border-radius: ${({ theme: { borderRadius } }) =>
    `0px 0px ${borderRadius.card} ${borderRadius.card}`};
  box-shadow: ${({ theme: { shadows } }) => shadows.light};
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacings[4]};
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
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
  align-items: center;
  margin: auto 0 0 0;
`;

export const Span = styled.span`
  display: block;
`;

export const Div = styled.div`
  display: flex;
`;
