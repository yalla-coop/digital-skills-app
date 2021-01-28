import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  div.ant-typography,
  .ant-typography p {
    margin-bottom: 0;
  }

  .ant-skeleton-element {
    display: block !important;
    width: 100% !important;
  }
`;

export const ActivityCard = styled(Link)`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  box-shadow: ${({ theme }) => theme.shadows.light};
`;
