import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';

import * as S from './style';
import * as T from '../../Typography';

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

function StatsCard(props) {
  const { loading, title, color, txt, statNum, percentage } = props;

  return (
    <S.CardWrapper>
      {loading ? (
        <S.Loading color={color} indicator={antIcon} />
      ) : (
        <S.StatsNum color={color}>
          {statNum || '-'}
          {statNum && percentage && (
            <T.Body16B as="span" color={color}>
              %
            </T.Body16B>
          )}
        </S.StatsNum>
      )}
      <div>
        {title && <T.BodyB color={color}>{title}</T.BodyB>}
        <T.Body16>{txt}</T.Body16>
      </div>
    </S.CardWrapper>
  );
}

StatsCard.defaultProps = {
  color: 'teal',
};

StatsCard.propTypes = {
  loading: PropTypes.bool,
  title: PropTypes.string,
  color: PropTypes.string,
  txt: PropTypes.string,
  statNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage: PropTypes.bool,
};

export default StatsCard;
