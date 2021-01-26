import React from 'react';
import { Layout } from 'antd';
import theme from '../../../theme';
import Icon from '../../Icon';
import * as S from './style';
import Menu from '../../Menu';

const SideBar = ({ color, selectedKey, setSelectedKey }) => {
  return (
    <Layout.Sider
      breakpoint={'md'} // 768px from antd
      style={{ backgroundColor: color || theme.colors.blue }}
      collapsedWidth={0}
      trigger={null}
      width={theme.constants.sideBar.width}
    >
      <S.Container>
        <S.LogoContainer>
          <Icon icon="logo" color="white" />
        </S.LogoContainer>
        <Menu selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      </S.Container>
    </Layout.Sider>
  );
};

export default SideBar;
