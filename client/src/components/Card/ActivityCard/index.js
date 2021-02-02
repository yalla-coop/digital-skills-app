import PropTypes from 'prop-types';

import * as S from './style';
import * as T from '../../Typography';

import { Typography } from 'antd';
import LevelIndicator from '../../LevelIndicator';
import Icon from '../../Icon';

function ActivityCard({
  to,
  title,
  completionTime,
  difficulty,
  isCompleted,
  color,
}) {
  return (
    <S.CardWrapper to={to}>
      <S.ActivityCardTextDiv>
        <Typography.Paragraph
          style={{ maxWidth: '95%' }}
          ellipsis={{ tooltip: title, rows: 2 }}
        >
          <T.H6>{title}</T.H6>
        </Typography.Paragraph>
        <T.BodyB color={color}>{completionTime} minutes</T.BodyB>
      </S.ActivityCardTextDiv>
      <S.ActivityCardColouredDiv color={color}>
        {isCompleted ? (
          <Icon icon="cupWithFlash" strokeColor="white" />
        ) : (
          <LevelIndicator
            level={difficulty}
            size="large"
            color="white"
            bgColor="white"
          />
        )}
        <T.Body16B color="white" mt="1">
          {isCompleted ? 'Completed' : <>Level&nbsp;{difficulty}</>}
        </T.Body16B>
      </S.ActivityCardColouredDiv>
    </S.CardWrapper>
  );
}

ActivityCard.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  completionTime: PropTypes.number,
  difficulty: PropTypes.number,
  isCompleted: PropTypes.bool,
  color: PropTypes.string,
};

export default ActivityCard;
