import styled from '@emotion/styled';
import Button from '../../components/Button';

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings[9]};
`;

export const LoadMoreButton = styled(Button)`
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
  border: none;
`;
