import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin};
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.blue};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.blue};
  }

  .ant-checkbox-inner {
    background: ${({ theme }) => theme.colors.literGray};
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.literGray};
    width: 24px;
    height: 24px;
  }

  .ant-checkbox-input {
    width: 24px;
    height: 24px;
  }

  .ant-checkbox {
    font-size: 24px;
    top: 0;
  }

  .ant-checkbox-inner::after {
    left: 25%;
    height: 11px;
    top: 45%;
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
  }
`;
