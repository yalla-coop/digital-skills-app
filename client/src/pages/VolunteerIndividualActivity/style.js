import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  padding-top: ${({ theme, pt }) => theme.spacings[pt]};
  color: red;
  min-height: ${({ minHeight }) => minHeight};

  ${({ theme }) => theme.media.mobile} {
    padding: ${({ theme }) =>
      `${theme.spacings[3]} ${theme.constants.layout.withoutHeader.padding.mobile}`};
  }
`;

export const GetStarted = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  box-shadow: ${({ theme }) => theme.shadows.light};
  padding: ${({ theme }) => theme.spacings[3]};
  margin-bottom: ${({ theme }) => theme.spacings[5]};

  ${({ theme }) => theme.media.mobile} {
    margin-top: ${({ theme }) => theme.spacings[5]};
    margin-bottom: ${({ theme }) => theme.spacings[5]};
  }
`;
