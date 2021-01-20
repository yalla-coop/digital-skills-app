// COMMON INPUT STYLES
import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

export const placeholderStyle = ({ theme }) => `
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.liteGray};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.liteGray};
  }
  :-ms-input-placeholder { /* IE 10+ */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.liteGray};
  }
  :-moz-placeholder { /* Firefox 18- */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.liteGray};
  }
`;

export const Field = styled.div`
  ${setMargin}
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

export const Label = styled.label`
  ${setMargin}
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
