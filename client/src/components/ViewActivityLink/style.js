import styled from '@emotion/styled';

export const ViewContainer = styled('div')`
  align-self: flex-start;
  margin-top: ${({ theme: { spacings } }) => spacings[4]};
  margin-bottom: ${({ theme: { spacings } }) => spacings[7]};
  svg {
    margin-top: 3px;
  }
`;
