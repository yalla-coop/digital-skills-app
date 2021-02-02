import styled from '@emotion/styled';
import { Col as GridCol } from '../../components/Grid';

export const Col = styled(GridCol)`
  margin-bottom: ${({ theme: { spacings } }) => spacings[5]};
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme: { spacings } }) => spacings[3]};
  }
`;
