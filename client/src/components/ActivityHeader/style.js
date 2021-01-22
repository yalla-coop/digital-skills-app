import styled from '@emotion/styled';

export const Title = styled.h3`
  margin-top: ${({ theme }) => theme.spacings[5]};
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  padding-bottom: ${({ theme }) => theme.spacings[5]};

  span {
    display: inline-block;
    margin-top: ${({ theme }) => theme.spacings[3]};
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.blue};
  }

  ${({ theme }) => theme.media.mobile} {
    padding-left: ${({ theme }) =>
      theme.constants.layout.withoutHeader.padding.mobile};
    padding-top: ${({ theme }) => theme.spacings[5]};
    padding-bottom: ${({ theme }) => theme.spacings[4]};
    background-color: ${({ theme, mobileBgColor }) =>
      theme.colors[mobileBgColor]};

    div,
    span,
    a,
    svg {
      color: ${({ theme }) => theme.colors.white};
    }

    span:nth-of-type(2) {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ActivityInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.litestGray};
  padding: ${({ theme }) => theme.spacings[4]} 0;
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  ${({ theme }) => theme.media.mobile} {
    padding-left: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const DifficultyLevel = styled.span`
  margin-left: ${({ theme }) => theme.spacings[8]};
  ${({ theme }) => theme.media.mobile} {
    margin: 0;
    margin-right: ${({ theme }) => theme.spacings[3]};
  }
`;
