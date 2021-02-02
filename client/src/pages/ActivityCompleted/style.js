import styled from '@emotion/styled';
import { Layout as AntdLayout } from 'antd';
import setMargin from '../../helpers/set-margin';
import * as T from '../../components/Typography';

const { Header: AntdHeader } = AntdLayout;

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacings[7]};
`;

export const Banner = styled.aside`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 48px 0;

  ${({ theme }) => theme.media.mobile} {
    margin: 0 10px;
    width: auto;
    padding: 16px 0;
  }
`;

export const Activities = styled.div`
  margin: 0 auto;
  width: 80%;

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

export const Header = styled(AntdHeader)`
  height: ${({ theme }) => theme.constants.headerHeight.desktop};
  transition: 0.1s all;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.teal};
  margin-bottom: ${({ theme }) => theme.spacings[5]};
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacings[4]};
    height: ${({ theme }) => theme.constants.headerHeight.mobile};
  }
`;

export const CircleHeader = styled(AntdHeader)`
  height: ${({ theme }) => theme.constants.headerHeight.desktop};
  transition: 0.1s all;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacings[3]};
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.teal};
  margin-bottom: ${({ theme }) => theme.spacings[4]};
  ${({ theme }) => theme.media.mobile} {
    margin-bottom: ${({ theme }) => theme.spacings[3]};
  }
`;

export const SkillWrapper = styled.div`
  ${setMargin}
  display: flex;
  align-items: center;
`;

export const SkillTitle = styled(T.H6)`
  max-width: 80%;
  padding-left: ${({ theme }) => theme.spacings[2]};
`;
