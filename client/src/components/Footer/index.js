import React from 'react';

import * as S from './style';
import { navRoutes } from '../../constants';
import Share from '../../components/Share';
import * as T from '../../components/Typography';

const Footer = ({ showShare }) => {
  return (
    <S.Wrapper>
      {showShare && <Share facebook email whatsapp />}
      <S.Container>
        <T.Link to={navRoutes.EXTERNAL.TERMS_OF_USE}>Terms of use</T.Link>
        <T.Link to={navRoutes.EXTERNAL.PRIVACY_POLICY}>Privacy</T.Link>
        <T.Link to={navRoutes.EXTERNAL.COOKIES}>Cookies</T.Link>
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
