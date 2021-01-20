import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Menu from './Menu';

import { Layout, AntdContent } from './style';

const Page = ({ children, ...props }) => {
  return (
    <>
      <NavBar menu={<Menu />} />
      <Layout>
        <SideBar menu={<Menu />} />
        <Layout>
          <AntdContent>{children}</AntdContent>
        </Layout>
      </Layout>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
