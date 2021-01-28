import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';

import * as S from './style';

function Loading({ color, fontSize = 48 }) {
  const antIcon = <LoadingOutlined style={{ fontSize }} spin />;
  return <S.Loading color={color} indicator={antIcon} />;
}

Loading.defaultProps = {
  color: 'blue',
  fontSize: 48,
};

Loading.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

export default Loading;
