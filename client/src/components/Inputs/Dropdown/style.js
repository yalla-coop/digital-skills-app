import styled from '@emotion/styled';
import setMargin from '../../../helpers/set-margin';

export const Field = styled.div`
  ${setMargin}
  width: ${({ w }) => w || '100%'};
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

  // GENERAL MATRIX STYLING
  ${({ matrix }) =>
    matrix &&
    `
    display: flex;
    alignItems: center;
  `}
  // ANTD STYLING
    // STYLE OVERALL CONTAINER
    .ant-select {
    border: ${({ theme }) => theme.borders.primary};
    border-color: ${({ theme, open, color }) =>
      open ? theme.colors.teal : theme.colors[color] || theme.colors.gray};
    width: 100%;
    height: ${({ matrix }) => (matrix ? '42px' : '100%')};
    background: ${({ outline }) => outline && 'none'};

    ${({ big, theme }) =>
      big &&
      `
      border: none;
      border-bottom: 1px solid;
      border-color: ${theme.colors.white};
  `}
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: ${({ outline }) => outline && 'none'};
  }

  // STYLE INPUT CONTAINER
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: none;
    border-radius: 0;
    padding: ${({ matrix }) => (matrix ? '0.25rem 1rem' : '1rem')};
    padding-left: ${({ big }) => big && '0.25rem'};
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 100%;
    padding: ${({ matrix }) => (matrix ? '0.25rem 1rem' : '1rem')};
    padding-left: ${({ big }) => big && '0.25rem'};
  }

  // STYLE SELECTED ITEM IN INPUT FOR MULTIPLE SELECT
  .ant-select-multiple .ant-select-selection-item {
    height: 100%;
    padding: 0.1rem 0.4rem;
    font-size: ${({ big }) => (big ? '23.3px' : '1rem')};
  }

  // STYLE ARROW ICON
  .ant-select-arrow,
  .ant-select-clear,
  .ant-select-selection-item-remove {
    color: ${({ theme, outline }) =>
      outline ? theme.colors.white : theme.colors.black};
    width: ${({ big }) => (big ? '25px' : '21px')};
    height: 96%;
    top: 7px;
    display: flex;
    align-items: center;

    svg {
      width: ${({ big }) => (big ? '24px' : '15px')};
      height: ${({ big }) => (big ? '22px' : '14px')};
      transition: all ease 0.2s;

      transform: ${({ open, multi }) => open && !multi && 'rotate(180deg)'};
    }
  }

  // STYLE PLACEHOLDER
  .ant-select-multiple .ant-select-selection-placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.liteGray};
    padding-left: 0.75rem;
  }

  // STYLE SELECTED ITEM IN SINGLE DROPDOWN
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    font-size: ${({ big }) => (big ? '23.3px' : '1rem')};
    color: ${({ theme, outline }) =>
      outline ? theme.colors.white : theme.colors.black};
  }

  // STYLE INPUT TEXT
  .ant-select-selection-overflow-item {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .ant-select-item-group {
    color: red;
  }
`;

export const Label = styled.label`
  ${setMargin}
  width: ${({ matrix }) => (matrix ? '50%' : '100%')};
  display: flex;
  align-items: center;
`;

export const menuStyle = styled`
`;

export const Answer = styled.div`
  flex-direction: column;
  width: 100%;
`;
