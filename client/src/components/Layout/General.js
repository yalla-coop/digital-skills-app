import React from 'react';
import PropTypes from 'prop-types';

import SideBar from './SideBar';
import Menu from './Menu';
import Header from './Header';

import * as S from './style';

const General = ({ children, headerIcon, goBack, ...props }) => {
  return (
    <>
      <S.Layout>
        <SideBar menu={<Menu />} />
        <S.Layout>
          <Header headerIcon={headerIcon} goBack={goBack} />
          <S.Content>{children}</S.Content>
          <S.AntdFooter>Footer</S.AntdFooter>
        </S.Layout>
      </S.Layout>
    </>
  );
};

General.propTypes = {
  children: PropTypes.node.isRequired,
};

export default General;
