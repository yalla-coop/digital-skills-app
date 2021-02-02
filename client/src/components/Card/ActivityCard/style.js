import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CardWrapper = styled(Link)`
  box-shadow: ${({ theme }) => theme.shadows.light};
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacings[3]};
  transition: 0.5s;
  height: 100%;

  :hover {
    transform: scale(1.05);
  }
`;

export const ActivityCardTextDiv = styled.div`
  padding: ${({ theme }) => theme.spacings[3]};
`;

export const ActivityCardColouredDiv = styled.div`
  background-color: ${({ theme, color }) => theme.colors[color] || color};
  padding: ${({ theme }) => theme.spacings[3]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
