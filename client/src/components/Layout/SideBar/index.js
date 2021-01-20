import React from 'react';
import { Layout } from 'antd';
import theme from '../../../theme';

const SideBar = ({ menu, color }) => {
  return (
    <Layout.Sider
      breakpoint={'md'}
      style={{ backgroundColor: color || theme.colors.blue }}
      collapsedWidth={0}
      trigger={null}
      width={265}
    >
      {menu}
    </Layout.Sider>
  );
};

export default SideBar;
