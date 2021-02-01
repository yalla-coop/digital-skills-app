import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from '../Footer';

import { Layout, Content, FooterContainer } from './style';

const Form = ({
  children,
  selectedKey,
  setSelectedKey,
  withoutPaddings,
  withoutHeader = true,
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

          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Layout>
      </Layout>
    </>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
