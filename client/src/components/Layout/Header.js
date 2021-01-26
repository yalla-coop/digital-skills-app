import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Icon from '../Icon';
import BackLink from '../BackLink';
import { breakpoints } from '../../theme';

import * as S from './style';

const Header = ({ headerIcon, goBack }) => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakpoints.mobile})`,
  });

  return (
    <S.HeaderWrapper>
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
      {goBack && (
        <S.BackWrapper>
          <BackLink
            iconColor={isMobile ? 'white' : 'teal'}
            color={isMobile ? 'white' : 'black'}
            mb="3"
          />
        </S.BackWrapper>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
