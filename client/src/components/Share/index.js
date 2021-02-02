import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';
import Icon from '../Icon';

import { Type, Container, Icons } from './style';
import * as T from '../../components/Typography';

const Share = ({ text = 'Share this page', facebook, email, whatsapp }) => {
  return (
    <Container>
      <Type>
        <T.Body16B color="white">{text}</T.Body16B>
      </Type>
      <Icons>
        <FacebookShareButton url={window.location} hidden={!facebook}>
          <Icon icon="facebook" width="11" height="28 " color="white" />
        </FacebookShareButton>
        <WhatsappShareButton url={window.location} hidden={!whatsapp}>
          <Icon icon="whatsapp" width="24" height="28" color="white" />
        </WhatsappShareButton>
        <EmailShareButton url={window.location} hidden={!email}>
          <Icon icon="mail" width="30" height="30" color="white" />
        </EmailShareButton>
      </Icons>
    </Container>
  );
};

export default Share;
