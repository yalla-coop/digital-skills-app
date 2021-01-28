import React from 'react';

import { Container } from './style';
import { navRoutes } from '../../constants';

import * as T from '../../components/Typography';
const Footer = () => {
  return (
    <Container>
      <T.Link to={navRoutes.EXTERNAL.TERMS_OF_USE}>Terms of use</T.Link>
      <T.Link to={navRoutes.EXTERNAL.PRIVACY_POLICY}>Privacy</T.Link>
      <T.Link to={navRoutes.EXTERNAL.COOKIES}>Cookies</T.Link>
    </Container>
  );
};

export default Footer;
