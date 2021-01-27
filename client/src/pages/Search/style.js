import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacings[5]};

  .ant-typography {
    color: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ColouredDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.teal};
  padding-top: ${({ theme }) => theme.spacings[8]};
  padding-bottom: ${({ theme }) => theme.spacings[8]};
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};

  ${({ theme }) => theme.media.mobile} {
    padding-left: ${({ theme }) =>
      theme.constants.layout.withoutHeader.padding.mobile};
    padding-right: ${({ theme }) =>
      theme.constants.layout.withoutHeader.padding.mobile};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultsDiv = styled.div`
  padding-left: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};
  padding-right: ${({ theme }) =>
    theme.constants.layout.withoutHeader.padding.desktop};

  ${({ theme }) => theme.media.mobile} {
    padding-left: ${({ theme }) =>
      theme.constants.layout.withoutHeader.padding.mobile};
    padding-right: ${({ theme }) =>
      theme.constants.layout.withoutHeader.padding.mobile};
  }
`;

export const Result = styled(Link)`
  padding: ${({ theme }) => `${theme.spacings[4]} 0`};
  border: none;
  border-bottom: 1px solid #cccccc;
  width: 100%;
  display: block;
`;

export const ResultContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: '0 0.5rem';
`;
