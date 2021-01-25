import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import setMargin from '../../helpers/set-margin';

const commonStyle = ({ theme, color, caps, ...props }) => `
font-style: normal;
font-weight: 900;
letter-spacing: 0.2px;
color: ${theme.colors[color] || color || theme.colors.black};
text-transform: ${caps ? 'uppercase' : 'initial'};
`;

const h1Style = `
font-size: 56.9px;
line-height: 64px;
`;

const h2Style = `
font-size: 45.5px;
line-height: 53px;
`;

const h3Style = `
font-size: 36.4px;
line-height: 44px;
`;

const h4Style = `
font-size: 29.2px;
line-height: 37px;
`;

const h5Style = `
font-size: 23.3px;
line-height: 31px;
`;

const h6Style = `
font-size: 18.66px;
line-height: 26px;
`;

export const H1 = styled.h1`
  ${setMargin};
  ${commonStyle};
  ${h1Style};
  ${({ theme }) => theme.media.mobile} {
    ${h2Style};
  }
`;

export const H2 = styled.h2`
  ${setMargin};
  ${h2Style};
  ${commonStyle};
  ${({ theme }) => theme.media.mobile} {
    ${h3Style};
  }
`;

export const H3 = styled.h3`
  ${setMargin};
  ${h3Style};
  ${commonStyle};
  ${({ theme }) => theme.media.mobile} {
    ${h4Style};
  }
`;

export const H4 = styled.h4`
  ${setMargin};
  ${h4Style};
  ${commonStyle};
  ${({ theme }) => theme.media.mobile} {
    ${h5Style};
  }
`;

export const H5 = styled.h5`
  ${setMargin};
  ${h5Style};
  ${commonStyle};
  ${({ theme }) => theme.media.mobile} {
    ${h6Style};
  }
`;
export const H6 = styled.h6`
  ${setMargin};
  ${h6Style};
  ${commonStyle};
`;

export const BodyL = styled.p`
  ${setMargin};
  ${commonStyle};
  font-style: normal;
  font-weight: normal;
  font-size: 23.3px;
  line-height: 32px;
`;
export const BodyR = styled.p`
  ${setMargin};
  ${commonStyle};
  font-style: normal;
  font-weight: normal;
  font-size: 18.66px;
  line-height: 25px;
`;
export const Body16 = styled.p`
  ${setMargin};
  ${commonStyle};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
`;
export const BodyLB = styled.p`
  ${setMargin};
  ${commonStyle};
  font-style: normal;
  font-weight: bold;
  font-size: 23.3px;
  line-height: 135%;
`;
export const BodyB = styled.p`
  ${setMargin};
  ${commonStyle};
  font-style: normal;
  font-weight: bold;
  font-size: 18.66px;
  line-height: 143%;
`;
export const Body16B = styled.p`
  ${setMargin};
  ${commonStyle};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 143%;
`;

export const Link = styled(RouterLink)`
  ${setMargin};
  ${commonStyle};
  color: ${({ theme, color }) =>
    theme.colors[color] || color || theme.colors.blue};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 143%;
  text-decoration-line: underline;
`;
