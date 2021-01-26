import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';

import { Layout, PageContent } from './style';

const Page = ({ children, selectedKey, setSelectedKey, ...props }) => {
  return (
    <>
      <NavBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Layout>
        <SideBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
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
