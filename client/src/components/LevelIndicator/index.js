import PropTypes from 'prop-types';

import * as S from './style';

function LevelIndicator(props) {
  const { level } = props;
  return (
    <S.Wrapper {...props}>
      {new Array(4)
        .fill(1, 0, level)
        .fill(0, level, 4)
        .map((val, i) => (
          <S.Level key={i} i={3 - i} bg={!!val} {...props} />
        ))}
    </S.Wrapper>
  );
}

LevelIndicator.defaultProps = {
  size: 'small',
  color: 'navy',
  bgColor: 'navy',
};

LevelIndicator.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.string,
};
export default LevelIndicator;
