import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Icon from '../../Icon';
import * as T from '../../Typography';
import LevelIndicator from '../../LevelIndicator';
import * as S from './style';
import theme from '../../../theme';
import { useHistory } from 'react-router-dom';
import { GENERAL } from '../../../constants/nav-routes';
import * as AntdIcon from '@ant-design/icons';

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

  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.desktop})`,
  });

  const isTablet = useMediaQuery({
    query: `(max-width: ${theme.breakpoints.tablet})`,
  });

  const Component = AntdIcon[icon];

  return (
    <S.Container onClick={handleClick}>
      <S.IconContainer color={color}>
        {icon === 'defaultSkill' || !Component ? (
          <Icon icon={icon} width="120" height="120" color="white" />
        ) : (
          <Component style={{ fontSize: 120, color: 'white' }} />
        )}
      </S.IconContainer>
      <T.BodyB mt="3" ml="4" mr="4" style={{ fontWeight: 900 }}>
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
            {Math.round(completedActivities)} of {Math.round(totalActivities)}{' '}
            activities <S.Span>completed</S.Span>
          </T.Body16B>
        </S.Div>
        <S.Div>
          <LevelIndicator
            size="large"
            color="teal"
            bgColor="mediumTeal"
            level={Math.round(level)}
            style={{ marginTop: theme.spacings[1] }}
          />
          {(isTablet || isDesktop) && (
            <T.Body16B ml="2">
              Difficulty <S.Span>Level {Math.round(level)}</S.Span>
            </T.Body16B>
          )}
        </S.Div>
      </S.Content>
    </S.Container>
  );
};

export default RecommendSkill;
