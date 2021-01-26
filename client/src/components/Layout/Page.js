import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Menu from './Menu';

import { Layout, PageContent } from './style';

const Page = ({ children, ...props }) => {
  return (
    <>
      <NavBar menu={<Menu />} />
      <Layout>
        <SideBar menu={<Menu />} />
        <Layout>
          <PageContent>{children}</PageContent>
        </Layout>
      </Layout>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
