import PropTypes from 'prop-types';

import * as T from '../Typography';
import Icon from '../Icon';
import LevelIndicator from '../LevelIndicator';

import * as S from './style';

function ActivityHeader(props) {
  const { title, createdBy = {}, mobileBgColor, time, difficultyLevel } = props;
  const { name, icon, url } = createdBy;

  const anchorProps = () => {
    if (url)
      return {
        href: url,
        target: '_blank',
        rel: 'noreferrer',
      };
    return {};
  };

  return (
    <div>
      <S.Title mobileBgColor={mobileBgColor}>
        <T.H3 as="div">{title}</T.H3>
        <T.Body16 as="span" color="gray">
          Created by
        </T.Body16>
        &nbsp;
        <T.Body16B as={url ? 'a' : 'span'} {...anchorProps()}>
          {name}
        </T.Body16B>
        &nbsp;
        {icon && (
          <Icon
            icon={icon}
            width={24}
            height={24}
            style={{ verticalAlign: 'bottom' }}
          />
        )}
      </S.Title>
      <S.ActivityInfo>
        <T.BodyB as="span" ml="3" color="blue">
          {time} minutes
        </T.BodyB>
        <S.DifficultyLevel>
          <LevelIndicator
            level={difficultyLevel}
            color="navy"
            bgColor="navy"
            size="small"
          />
          &nbsp;
          <T.BodyB color="navy" as="span">
            Difficulty Level {difficultyLevel}
          </T.BodyB>
        </S.DifficultyLevel>
      </S.ActivityInfo>
    </div>
  );
}

ActivityHeader.propTypes = {
  title: PropTypes.string,
  createdBy: PropTypes.exact({
    name: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
  }),
  mobileBgColor: PropTypes.string,
  time: PropTypes.number,
  difficultyLevel: PropTypes.number,
};

export default ActivityHeader;
