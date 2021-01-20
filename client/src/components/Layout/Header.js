import React from 'react';
import Icon from '../Icon';

import * as S from './style';

const Header = ({ headerIcon }) => (
  <S.Header>
    {headerIcon && (
      <Icon
        width={headerIcon === 'darts' ? 170 : 150}
        height={150}
        icon={headerIcon}
        color="white"
      />
    )}
  </S.Header>
);

export default Header;
