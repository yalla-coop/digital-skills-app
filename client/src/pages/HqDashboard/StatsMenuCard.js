import PropTypes from 'prop-types';

import * as S from './StatsMenuCard.style';
import * as T from '../../components/Typography';
import { Loading } from '../../components';

function StatsCard(props) {
  const { title, txt, color, linkTxt, linkUrl, loading, statNum } = props;

  return (
    <S.CardWrapper to={linkUrl}>
      <S.TopWrapper bgColor={color}>
        {loading ? (
          <Loading color="white" fontSize={48} />
        ) : (
          <T.H2 style={{ width: '56px' }} as="span" color="white">
            {statNum || '-'}
          </T.H2>
        )}
        <div>
          {title && <T.Body16B color="white">{title}</T.Body16B>}
          <T.BodySM color="white">{txt}</T.BodySM>
        </div>
      </S.TopWrapper>
      <S.BottomWrapper>
        <T.BodyB as="span" color={color}>
          {linkTxt}
        </T.BodyB>
      </S.BottomWrapper>
    </S.CardWrapper>
  );
}

StatsCard.defaultProps = {
  color: 'teal',
};

StatsCard.propTypes = {
  title: PropTypes.string,
  txt: PropTypes.string,
  color: PropTypes.string,
  linkTxt: PropTypes.string,
  linkUrl: PropTypes.string,
  loading: PropTypes.bool,
  statNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.bool,
};

export default StatsCard;
