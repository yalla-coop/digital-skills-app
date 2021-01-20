import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../theme';

import NavBar from './NavBar';
import Menu from './Menu';

import { Layout, AntdFooter, AntdContent, AntdSider } from './style';

const WithBlocks = ({ children, ...props }) => {
  return (
    <>
      <NavBar menu={<Menu />} />
      <Layout>
        <AntdSider
          breakpoint={'md'}
          style={{ backgroundColor: props.leftColor || theme.colors.blue }}
          collapsedWidth={0}
          trigger={null}
          width={theme.constants.blockWidth}
        />
        <Layout>
          <AntdContent>{children}</AntdContent>
          <AntdFooter>Footer</AntdFooter>
        </Layout>
        <AntdSider
          breakpoint={'md'}
          style={{ backgroundColor: props.rightColor || theme.colors.teal }}
          collapsedWidth={0}
          trigger={null}
          width={theme.constants.blockWidth}
        />
      </Layout>
    </>
  );
};

WithBlocks.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithBlocks;
