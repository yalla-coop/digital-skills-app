import React from 'react';
import PropTypes from 'prop-types';

import SideBar from './SideBar';
import Menu from './Menu';
import Header from './Header';

import * as S from './style';

const General = ({ children, headerIcon, ...props }) => {
  return (
    <>
      <S.Layout>
        <SideBar menu={<Menu />} />
        <S.Layout>
          <Header headerIcon={headerIcon} />
          <S.AntdContent>{children}</S.AntdContent>
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
