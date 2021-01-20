import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin}
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  .ant-radio-checked .ant-radio-inner {
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.blue};
    border-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.blue};
  }

  .ant-radio-wrapper:hover .ant-radio-inner,
  .ant-rdaio:hover .ant-radio-inner,
  .ant-rdaio-input:focus + .ant-radio-inner {
    border-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.blue};
  }

  .ant-radio-checked::after {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid white;
  }

  .ant-radio-inner::after {
    background-color: white;
    width: 12px;
    height: 12px;
    left: 5px;
    top: 5px;
  }

  .ant-radio-inner {
    background: ${({ theme }) => theme.colors.literGray};
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.literGray};
    width: 24px;
    height: 24px;
  }
`;

export const radioStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '30px',
  lineHeight: '30px',
  marginRight: '1rem',
  marginBottom: '1rem',
};

export const horizontalStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
};
