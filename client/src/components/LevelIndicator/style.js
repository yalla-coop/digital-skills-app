import styled from '@emotion/styled';

const dim = {
  small: {
    width: 26,
    height: 18,
    iWidth: 5,
    hGutter: 2,
    vGutter: 4,
  },
  large: {
    width: 44,
    height: 32,
    iWidth: 8,
    hGutter: 4,
    vGutter: 6.5,
  },
};

export const Wrapper = styled.span`
  display: inline-block;
  width: ${({ size }) => dim[size].width}px;
  height: ${({ size }) => dim[size].height}px;

  span:last-child {
    margin-right: 0;
  }
`;

export const Level = styled.span`
  display: inline-block;
  border-radius: 1.5px;
  border: 1.5px solid ${({ theme, color }) => theme.colors[color]};
  width: ${({ size }) => dim[size].iWidth}px;
  height: ${({ size, i }) => dim[size].height - i * dim[size].vGutter}px;
  margin-right: ${({ size }) => dim[size].hGutter}px;
  background-color: ${({ bgColor, theme, bg }) =>
    bg ? theme.colors[bgColor] : ''};
`;
