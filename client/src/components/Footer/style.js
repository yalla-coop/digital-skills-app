import styled from '@emotion/styled';

export const Container = styled('div')`
  padding: ${({ theme: { spacings, constants } }) =>
    `${spacings[3]} ${constants.general.paddingLeft}`};
  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) => `${theme.spacings[3]} ${theme.spacings[5]}`};
  }
  width: 100%;
  min-height: ${({ theme }) => theme.constants.layout.footer.height};
  a {
    display: block;
  }
`;
