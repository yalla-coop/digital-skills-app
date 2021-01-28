import React from 'react';
import { GENERAL } from '../../constants/nav-routes';
import Icon from '../Icon';
import * as T from '../Typography';
import * as S from './style';

const ViewActivityLink = ({ activityId, ...props }) => {
  return (
    <S.ViewContainer {...props}>
      <Icon icon="eye" color="blue" />
      <T.Link
        ml="2"
        to={GENERAL.ACTIVITY.replace(':id', activityId)}
        target="_blank"
      >
        View activity
      </T.Link>
      <T.Body16>(this will open in a new tab)</T.Body16>
    </S.ViewContainer>
  );
};

export default ViewActivityLink;
