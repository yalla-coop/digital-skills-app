import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';

import { Layout, AntdFooter, Content } from './style';

const WithoutHeader = ({ children, selectedKey, setSelectedKey }) => {
  return (
    <>
      <NavBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Layout>
        <SideBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <Layout>
          <Content withoutHeader>{children}</Content>
          <AntdFooter>Footer</AntdFooter>
        </Layout>
      </Layout>
    </>
  );
};

WithoutHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithoutHeader;
