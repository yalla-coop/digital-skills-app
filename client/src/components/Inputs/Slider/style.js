import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin}
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  .ant-slider-track {
    background-color: ${({ theme }) => theme.colors.black};
  }

  .ant-slider-rail {
    background-color: ${({ theme }) => theme.colors.black};
  }

  .ant-slider-dot-active {
    border-color: ${({ theme }) => theme.colors.teal};
  }

  .ant-slider-dot {
    border-color: ${({ theme }) => theme.colors.teal};
  }

  .ant-slider-handle {
    border-color: ${({ theme }) => theme.colors.teal};
    background: ${({ theme }) => theme.colors.teal};
    width: 20px;
    height: 20px;
    margin-top: -8px;
  }

  .ant-slider {
    :hover {
      .ant-slider-track {
        background-color: ${({ theme }) => theme.colors.liteGray};
      }

      .ant-slider-rail {
        background-color: ${({ theme }) => theme.colors.liteGray};
      }

      .ant-slider-handle {
        border-color: ${({ theme }) => theme.colors.teal};
      }

      .ant-slider-dot-active {
        border-color: ${({ theme }) => theme.colors.teal};
      }

      .ant-slider-dot {
        border-color: ${({ theme }) => theme.colors.teal};
      }
    }
  }
`;
