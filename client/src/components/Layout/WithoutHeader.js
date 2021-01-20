import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Menu from './Menu';

import { Layout, AntdFooter, AntdContent } from './style';

const WithoutHeader = ({ children }) => {
  return (
    <>
      <NavBar menu={<Menu />} />
      <Layout>
        <SideBar menu={<Menu />} />
        <Layout>
          <AntdContent>{children}</AntdContent>
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
