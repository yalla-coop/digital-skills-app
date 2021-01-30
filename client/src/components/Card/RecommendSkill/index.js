import React from 'react';
import Icon from '../../Icon';
import * as T from '../../Typography';
import LevelIndicator from '../../LevelIndicator';
import * as S from './style';
import theme from '../../../theme';
import { useHistory } from 'react-router-dom';
import { GENERAL } from '../../../constants/nav-routes';

const RecommendSkill = ({
  title,
  id,
  icon,
  completedActivities,
  totalActivities,
  level,
  color,
}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(GENERAL.SKILL.replace(':id', id));
  };

  return (
    <S.Container onClick={handleClick}>
      <S.IconContainer color={color}>
        <Icon icon={icon} width="120px" height="120px" color="white" />
      </S.IconContainer>
      <T.BodyB mt="3" ml="4" style={{ fontWeight: 900 }}>
        {title}
      </T.BodyB>
      <S.Content>
        <S.Div>
          <Icon
            icon="trophy"
            width="48"
            height="48"
            strokeColor="liteBlue"
            color="blue"
          />
          <T.Body16B ml="2">
            {completedActivities} of {totalActivities} activities{' '}
            <S.Span>completed</S.Span>
          </T.Body16B>
        </S.Div>
        <S.Div>
          <LevelIndicator
            size="large"
            color="teal"
            bgColor="mediumTeal"
            level={level}
            style={{ marginTop: theme.spacings[1] }}
          />
          <T.Body16B ml="2">
            Difficulty <S.Span>Level {level}</S.Span>
          </T.Body16B>
        </S.Div>
      </S.Content>
    </S.Container>
  );
};

export default RecommendSkill;
