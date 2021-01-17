import styled from '@emotion/styled';
import setMargin from '../../helpers/setMargin';

const communStyle = ({ theme, color, caps, ...props }) => `
font-style: normal;
letter-spacing: 0.2px;
color: ${theme.colors[color] || color || theme.colors.black};
text-transform: ${caps ? 'uppercase' : 'initial'}
`;

const h1Style = `
font-weight: 900;
font-size: 56.9px;
line-height: 64px;
`;

const h2Style = `
font-weight: 900;
font-size: 45.5px;
line-height: 53px;
`;

const h3Style = `
font-weight: 900;
font-size: 36.4px;
line-height: 44px;
`;

const h4Style = `
font-weight: 900;
font-size: 29.2px;
line-height: 37px;
`;

const h5Style = `
font-weight: 900;
font-size: 23.3px;
line-height: 31px;
`;

const h6Style = `
font-weight: 900;
font-size: 18.66px;
line-height: 26px;
`;

export const H1 = styled.h1`
  ${setMargin}
  ${communStyle}
  ${h1Style}
  ${({ theme }) => theme.media.mobile} {
    ${h2Style}
  }
`;

export const H2 = styled.h2`
  ${setMargin}
  ${h2Style}
  ${communStyle}
  ${({ theme }) => theme.media.mobile} {
    ${h3Style}
  }
`;

export const H3 = styled.h3`
  ${setMargin}
  ${h3Style}
  ${communStyle}
  ${({ theme }) => theme.media.mobile} {
    ${h4Style}
  }
`;

export const H4 = styled.h4`
  ${setMargin}
  ${h4Style}
  ${communStyle}
  ${({ theme }) => theme.media.mobile} {
    ${h5Style}
  }
`;

export const H5 = styled.h5`
  ${setMargin}
  ${h5Style}
  ${communStyle}
  ${({ theme }) => theme.media.mobile} {
    ${h6Style}
  }
`;
export const H6 = styled.h6`
  ${setMargin}
  ${h6Style}
  ${communStyle}
`;

export const BodyL = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 23.3px;
  line-height: 32px;
  ${setMargin}
  ${communStyle}
`;
export const BodyR = styled.p`
  ${setMargin}
  ${communStyle}
  font-style: normal;
  font-weight: normal;
  font-size: 18.66px;
  line-height: 25px;
`;
export const Body16 = styled.p`
  ${setMargin}
  ${communStyle}
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
`;
export const BodyLB = styled.p`
  ${setMargin}
  ${communStyle}
  font-style: normal;
  font-weight: bold;
  font-size: 23.3px;
  line-height: 135%;
`;
export const BodyB = styled.p`
  ${setMargin}
  ${communStyle}
  font-style: normal;
  font-weight: bold;
  font-size: 18.66px;
  line-height: 143%;
`;
export const Body16B = styled.p`
  ${setMargin}
  ${communStyle}
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 143%;
`;
