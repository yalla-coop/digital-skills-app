import React from 'react';
import {
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';

import { Type, Container, Icons } from './style';
import * as T from '../../components/Typography';

const Share = ({ text = 'Share this page', facebook, email, whatsapp }) => {
  return (
    <Container>
      <Type>
        <T.Body16B color={'white'}>{text}</T.Body16B>
      </Type>
      <Icons>
        <FacebookShareButton url={window.location} hidden={!facebook}>
          <FacebookIcon bgStyle={{ fill: 'none' }} size={45} />
        </FacebookShareButton>
        <WhatsappShareButton url={window.location} hidden={!whatsapp}>
          <WhatsappIcon bgStyle={{ fill: 'none' }} size={45} />
        </WhatsappShareButton>
        <EmailShareButton url={window.location} hidden={!email}>
          <EmailIcon bgStyle={{ fill: 'none' }} size={45} />
        </EmailShareButton>
      </Icons>
    </Container>
  );
};

export default Share;
