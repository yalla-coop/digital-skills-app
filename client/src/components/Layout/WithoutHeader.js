import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from '../../components/Footer';

import { Layout, Content } from './style';

const WithoutHeader = ({
  children,
  selectedKey,
  setSelectedKey,
  withoutPaddings,
  withoutHeader = true,
  ...props
}) => {
  return (
    <>
      <NavBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      <Layout>
        <SideBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
        <Layout>
          {withoutPaddings ? (
            children
          ) : (
            <Content withoutHeader={withoutHeader}>{children}</Content>
          )}

          <Footer showShare={props.showShare} />
        </Layout>
      </Layout>
    </>
  );
};

WithoutHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithoutHeader;
