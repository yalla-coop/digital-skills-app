import React from 'react';
import * as S from './style';
import * as T from '../../Typography';
import Icon from '../../Icon';
import { useHistory } from 'react-router-dom';

const ActivityCard = ({ title, skills, activities, to }) => {
  const history = useHistory();

  const handleClick = () => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <S.CardContainer onClick={handleClick} role="button">
      <S.Content>
        <T.BodyB mb="1">{title}</T.BodyB>
        <div>
          {!!skills && (
            <>
              <T.Body16 color="teal">{skills} skills </T.Body16>{' '}
              <T.Body16 color="liteGray"> | </T.Body16>
            </>
          )}
          <T.Body16 color="blue">{activities} activities</T.Body16>
        </div>
      </S.Content>
      <S.IconContainer>
        <Icon icon="rightRow" width="22" height="22" />
      </S.IconContainer>
    </S.CardContainer>
  );
};

export default ActivityCard;
