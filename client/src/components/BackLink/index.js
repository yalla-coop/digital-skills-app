import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as T from '../Typography';
import Icon from '../Icon';

import * as S from './style';

function BackLink({ color, iconColor }) {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <S.Wrapper onClick={goBack}>
      <Icon icon="leftRow" width={16} height={16} color={iconColor} />
      <T.Body16B ml="1" as="span" color={color}>
        Back
      </T.Body16B>
    </S.Wrapper>
  );
}

BackLink.propTypes = {
  color: PropTypes.string,
  iconColor: PropTypes.string,
};

export default BackLink;
