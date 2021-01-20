import React from 'react';
import PropTypes from 'prop-types';

import * as S from './style';
import Header from './Header';

const Notification = ({ children, headerIcon, ...props }) => {
  return (
    <>
      <S.Layout>
        <Header headerIcon={headerIcon} />
        <S.AntdContent>{children}</S.AntdContent>
      </S.Layout>
    </>
  );
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Notification;
